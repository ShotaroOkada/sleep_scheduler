import React from 'react';
import CreatingSchedule from '../Molecules/CreatingSchedule';
import Schedules from '../Molecules/Schedules';
import GridArea from '../../utilsUI/GridArea';
import { HomeGridArea } from '../Templates/HomeTemplate';
import styled from 'styled-components';

const ScheduleArea: React.FC = () => {
  return (
    <GridArea area={HomeGridArea.Schedule}>
      <StyledScheduleArea>
        <CreatingSchedule />
        <Schedules />
      </StyledScheduleArea>
    </GridArea>
  )
};

export default ScheduleArea;

const StyledScheduleArea = styled.div`
  margin-top: 10px;
`