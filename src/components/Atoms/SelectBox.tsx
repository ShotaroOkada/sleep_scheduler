import React, { useState } from 'react';
import styled from 'styled-components';
import { default as Select } from 'react-select';
import { ValueType } from 'react-select/src/types';

type OptionType = {
  value: string | null,
  label: string | null
}

type Props = {
  options: OptionType[]
}

const SelectBox: React.FC<Props> = props => {
  const { options } = props
  const [selectedOption, setSelectedOption] = useState<OptionType>({ value: null, label: null });

  const handleChange = (selectedOption: ValueType<OptionType>) => {
    setSelectedOption(selectedOption as OptionType)
  }
  return (
    <StyledSelectBox
      value={selectedOption}
      onChange={handleChange}
      options={options}
      area-hidden={false}
    />
  )
};

export default SelectBox;

const StyledSelectBox = styled(Select)`
  
`