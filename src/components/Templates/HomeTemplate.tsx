import React from 'react';
import styled from 'styled-components';
import FeelingArea from '../Organisms/FeelingArea';
import TimeLineArea from '../Organisms/TimeLineArea';
import ScheduleArea from '../Organisms/ScheduleArea';

const HomeTemplate: React.FC = () => {
  return (
    <GridLayout>
      <FeelingArea />
      <TimeLineArea />
      <ScheduleArea />
    </GridLayout>
  )
}

export default HomeTemplate;

export enum HomeGridArea {
  Feeling = 'Feeling',
  TimeLine = 'TimeLine',
  Schedule = 'Schedule'
}

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: "
  ${HomeGridArea.Feeling} ${HomeGridArea.TimeLine} ${HomeGridArea.Schedule}"
`;