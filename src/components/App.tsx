import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import RootState from '../states';
import { createSchedule } from '../actions/Schedules/ActionCreator';
import HomeTemplate from './Templates/HomeTemplate';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const copiedSchedule = useSelector<RootState, RootState['scheduleState']['copiedSchedule']>(state => state.scheduleState.copiedSchedule);
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.metaKey && e.key === 'v') {
      console.log('command v')
      if (copiedSchedule.name === '') {
        return
      } else {
        dispatch(createSchedule({ schedule: { name: copiedSchedule.name, background: copiedSchedule.background, position: { x: 0, y: 0 }, size: { width: copiedSchedule.size.width, height: copiedSchedule.size.height } } }));
      }
    } else {
      return
    }
  }

  return (
    <Wrapper onKeyDown={onKeyDown} tabIndex={0}>
      <HomeTemplate />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100%;
  outline: none; /* フォーカス時の青枠を外す*/
  overflow: hidden;
`
