import React from 'react';
import Schedule from './Atoms/Schedule';
import Colors from '../utilsUI/Color';
import TimeLine from './Molecules/TimeLine';
import styled from 'styled-components';

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
      <Schedule scheduleName='睡眠' background={Colors.RoyalBlue} />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh; /* アプリ全体にcommand + v判定をつけるために領域指定*/
  outline: none; /* フォーカス時の青枠を外す*/
`
