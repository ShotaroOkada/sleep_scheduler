import React from 'react';
import TimeLine from '../Molecules/TimeLine';
import GridArea from '../GridArea';
import { HomeGridArea } from '../Templates/HomeTemplate';
import styled from 'styled-components';

const TimeLineAmArea: React.FC = () => {
  const times: string[] = ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00']
  return (
    <GridArea area={HomeGridArea.TimeLineAm}>
      <StyledTimeLineAmArea>
        <TimeLine times={times} />
      </StyledTimeLineAmArea>
    </GridArea>
  )
};

export default TimeLineAmArea;

const StyledTimeLineAmArea = styled.div`
  margin-top: 10px;
  position: absolute;
  right: 10px;
`

