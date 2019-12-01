import React from 'react';
import Label from '../Atoms/Label';
import SelectBox from '../Atoms/SelectBox';

const Questions: React.FC = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ]
  return (
    <div>
      <Label name='ほげほげですか？' />
      <SelectBox options={options} />
    </div>
  )
}

export default Questions;