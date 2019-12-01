import React from 'react';
import GridArea from '../../utilsUI/GridArea';
import { HomeGridArea } from '../Templates/HomeTemplate';
import SelectBox from '../Atoms/SelectBox';

const FeelingArea: React.FC = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ]
  return (
    <GridArea area={HomeGridArea.Feeling}>
      FeelingArea
      <SelectBox options={options} />
    </GridArea>
  )
};

export default FeelingArea;