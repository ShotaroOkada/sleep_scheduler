import React from 'react';
import styled from 'styled-components';
import CreateSchedule from './Molecules/CreateSchedule';
import Schedules from './Organisms/Schedules';
import { useSelector, useDispatch } from 'react-redux';
import RootState from '../states';
import { createSchedule } from '../actions/Schedules/ActionCreator';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const copiedSchedule = useSelector<RootState, RootState['scheduleState']['copiedSchedule']>(state => state.scheduleState.copiedSchedule);
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.metaKey && e.key === 'v') {
      if (copiedSchedule.name === '') {
        return
      } else {
        dispatch(createSchedule({ schedule: { name: copiedSchedule.name, background: copiedSchedule.background, position: { x: 0, y: 0 } } }));
      }
    } else {
      return
    }
  }

  return (
    <Wrapper onKeyDown={onKeyDown} tabIndex={0}>
      {/* <TimeLine /> */}
      <Schedules />
      <CreateSchedule />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  outline: none; /* フォーカス時の青枠を外す*/
`
