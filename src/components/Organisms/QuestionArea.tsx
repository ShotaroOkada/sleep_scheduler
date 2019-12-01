import React from 'react';
import GridArea from '../../utilsUI/GridArea';
import { HomeGridArea } from '../Templates/HomeTemplate';
import Questions from '../Molecules/Questions';

const FeelingArea: React.FC = () => {
  return (
    <GridArea area={HomeGridArea.Feeling}>
      FeelingArea
      <Questions />
    </GridArea>
  )
};

export default FeelingArea;