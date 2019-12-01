import React from 'react';
import TimeLine from '../Molecules/TimeLine';
import GridArea from '../../utilsUI/GridArea';
import { HomeGridArea } from '../Templates/HomeTemplate';
import styled from 'styled-components';

const TimeLineArea: React.FC = () => {
  return (
    <GridArea area={HomeGridArea.TimeLine}>
      <StyledTimeLineArea>
        <TimeLine />
      </StyledTimeLineArea>
    </GridArea>
  )
};

export default TimeLineArea;

const StyledTimeLineArea = styled.div`
  margin-top: 10px;
`

