import React from 'react';
import styled from 'styled-components';
import QuestionArea from '../Organisms/QuestionArea';
import TimeLineAmArea from '../Organisms/TimeLineAmArea';
import TimeLinePmArea from '../Organisms/TimeLinePmArea';
import ScheduleArea from '../Organisms/ScheduleArea';


const HomeTemplate: React.FC = () => {
  return (
    <GridLayout>
      <QuestionArea />
      <TimeLineAmArea />
      <TimeLinePmArea />
      <ScheduleArea />
    </GridLayout>
  )
}

export default HomeTemplate;

export enum HomeGridArea {
  Question = 'Question',
  TimeLineAm = 'TimeLineAm',
  TimeLinePm = 'TimeLinePm',
  Schedule = 'Schedule'
}

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  grid-template-areas: 
   " Question  TimeLineAm  TimeLinePm "
   " Question  Schedule    Schedule   "
`;