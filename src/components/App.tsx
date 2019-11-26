import React from 'react';
import Schedule from './Atoms/Schedule';
import Colors from '../utilsUI/Color';
import TimeLine from './Molecules/TimeLine';
import styled from 'styled-components';
import CreateSchedule from './Molecules/CreateSchedule';

const App: React.FC = () => {
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.metaKey && e.key === 'v') {
      console.log('cammand + v')
    } else {
      return
    }
  }

  return (
    <Wrapper onKeyDown={onKeyDown} tabIndex={0}>
      <TimeLine />
      {/* <Schedule scheduleName='睡眠' background={Colors.RoyalBlue} /> */}
      <CreateSchedule />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  outline: none; /* フォーカス時の青枠を外す*/
`
