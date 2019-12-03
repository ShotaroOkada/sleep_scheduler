import React from 'react';
import GridArea from '../GridArea';
import { HomeGridArea } from '../Templates/HomeTemplate';
import Questions from '../Molecules/Questions';

const QuestionArea: React.FC = () => {
  return (
    <GridArea area={HomeGridArea.Feeling}>
      <Questions />
    </GridArea>
  )
};

export default QuestionArea;