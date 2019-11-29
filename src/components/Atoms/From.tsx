import React from 'react';
import styled from 'styled-components';
import Color from '../../utilsUI/Color';
import Font from '../../utilsUI/Font';

type Props = {
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  value: string;
}

const Form: React.FC<Props> = (props) => {
  const { onChange, value } = props
  return (
    <StyledForm type='text' onChange={onChange} value={value} />
  )
}

export default Form;

const StyledForm = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  color: ${Color.LightGray};
  font-size: ${Font.SizeDefault};
  font-family: ${Font.FamilyRoboto};
  border-radius: 3px;
  padding: 5px 7px 5px 3px;
  &:focus {
    outline:none;
    background: ${Color.WhiteSmoke}
  }
`