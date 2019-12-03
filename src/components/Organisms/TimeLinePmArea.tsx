import React from 'react';
import TimeLine from '../Molecules/TimeLine';
import GridArea from '../GridArea';
import { HomeGridArea } from '../Templates/HomeTemplate';
import styled from 'styled-components';

const TimeLinePmArea: React.FC = () => {
  const times: string[] = ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00']
  return (
    <GridArea area={HomeGridArea.TimeLinePm}>
      <StyledTimeLinePmArea>
        <TimeLine times={times} />
      </StyledTimeLinePmArea>
    </GridArea>
  )
};

export default TimeLinePmArea;

const StyledTimeLinePmArea = styled.div`
  margin-top: 10px;
  align-items: center;
`

