import React from 'react';
import Time from '../Atoms/Time';
import styled from 'styled-components';

const Times: string[] = [
  '午前0時', '午前1時', '午前2時', '午前3時', '午前4時', '午前5時', '午前6時', '午前7時', '午前8時', '午前9時', '午前10時', '午前11時', '午後0時', '午後1時', '午後2時', '午後3時', '午後4時', '午後5時', '午後6時', '午後7時', '午後8時', '午後9時', '午後10時', '午後11時', '午後12時'
]

const TimeLine: React.FC = () => {
  return (
    <StyledTimeLine>
      {Times.map((time, index) => {
        return <Time key={index} time={time} />
      })}
    </StyledTimeLine>
  )
}

export default TimeLine;

const StyledTimeLine = styled.div`
  overflow: scroll;
  position: fixed;
  left: 50%;
  -webkit-transform : translateX(-50%);
  transform : translateX(-50%);
  &::-webkit-scrollbar {
    display: none;
  }
`