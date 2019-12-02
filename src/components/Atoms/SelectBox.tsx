import React, { useState, CSSProperties } from 'react';
import { default as Select, Styles } from 'react-select';
import { ValueType } from 'react-select/src/types';
import Font from '../../utilsUI/Font';
import Color from '../../utilsUI/Color';

export type Option = {
  value: string | null,
  label: string | null
}

type Props = {
  options: Option[]
}

const SelectBox: React.FC<Props> = props => {
  const { options } = props
  const [selectedOption, setSelectedOption] = useState<Option>({ value: null, label: null });

  const handleChange = (selectedOption: ValueType<Option>) => {
    setSelectedOption(selectedOption as Option)
  }

  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={options}
      styles={styles}
    />
  )
};

export default SelectBox;

const styles: Partial<Styles> = {
  option: (provided) => ({
    ...provided,
    color: Color.LightGray
  }),
  control: (base: CSSProperties) => ({
    ...base,
    fontFamily: Font.FamilyRoboto as string,
    color: Color.LightGray
  }),
  menu: (base: CSSProperties) => ({
    ...base,
    fontFamily: Font.FamilyRoboto as string,
    color: Color.LightGray
  })
};




