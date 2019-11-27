import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { createSchedule } from '../../actions/Schedules/ActionCreator';
import Colors from '../../utilsUI/Color'
import Button from '../Atoms/Button';
import Form from '../Atoms/From';

const CreateSchedule = () => {
  const dispatch = useDispatch();
  const [inputSchedule, setInputSchedule] = useState('');

  // スケジュール入力フォームのイベント
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputSchedule(e.currentTarget.value);
  }

  //　スケジュール追加フォームのイベント
  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.currentTarget.blur();
    if (inputSchedule === '') {
      return
    }
    dispatch(createSchedule({ schedule: { name: inputSchedule, background: Colors.RoyalBlue, position: { x: 0, y: 0 }, size: { width: 'auto', height: 'auto' } } }))
    setInputSchedule('');
  }

  return (
    <Wrapper>
      <Form onChange={onChange} value={inputSchedule} />
      <Button onClick={onClick} />
    </Wrapper>
  )
}

export default CreateSchedule;

const Wrapper = styled.div`

`