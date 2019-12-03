import React from 'react';
import Time from '../Atoms/Time';
import styled from 'styled-components';

type Props = {
  times: string[]
}

const TimeLine: React.FC<Props> = (props) => {
  const { times } = props;
  return (
    <StyledTimeLine>
      {times.map((time, index) => {
        return <Time key={index} time={time} />
      })}
    </StyledTimeLine>
  )
}

export default TimeLine;

const StyledTimeLine = styled.div`

`