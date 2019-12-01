import React, { useState, CSSProperties } from 'react';
import { default as Select, Styles } from 'react-select';
import { ValueType } from 'react-select/src/types';
import Font from '../../utilsUI/Font';
import Color from '../../utilsUI/Color';

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
  control: (base: CSSProperties) => ({
    ...base,
    fontFamily: Font.FamilyRoboto as string,
    fontSize: Font.SizeDefault,
    color: Color.LightGray,
  }),
  menu: (base: CSSProperties) => ({
    ...base,
    fontFamily: Font.FamilyRoboto as string,
    fontSize: Font.SizeDefault,
    color: Color.LightGray
  })
};




