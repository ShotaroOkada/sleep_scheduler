import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { createSchedule } from '../../actions/Schedules/ActionCreator';
import Color from '../../styles/Color'
import Button from '../Atoms/Button';
import Form from '../Atoms/Form';

const CreatingSchedule: React.FC = () => {
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
    dispatch(createSchedule({ schedule: { name: inputSchedule, background: Color.RoyalBlue, position: { x: 0, y: 0 }, size: { width: 'auto', height: 'auto' } } }))
    setInputSchedule('');
  }

  return (
    <StyledCreatingSchedule>
      <Form onChange={onChange} value={inputSchedule} />
      <Button onClick={onClick} />
    </StyledCreatingSchedule>
  )
}

export default CreatingSchedule;

const StyledCreatingSchedule = styled.div`
  position: absolute;
  right: 10px;
  margin-bottom: 10px;
`