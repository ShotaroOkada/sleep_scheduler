import React from 'react';
import styled from 'styled-components';
import Colors from '../../utilsUI/Color';
import Fonts from '../../utilsUI/Fonts';

const Form = () => {
  return (
    <StyledInput type='text' />
  )
}

export default Form;

const StyledInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  color: ${Colors.LightGray};
  font-size: ${Fonts.SizeDefault};
  font-family: ${Fonts.FamilyRoboto};
  border-radius: 3px;
  padding: 5px 7px 5px 3px;
  &:focus {
    outline:none;
    background: ${Colors.WhiteSmoke}
  }
`