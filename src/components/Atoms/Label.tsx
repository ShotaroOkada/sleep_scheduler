import React from 'react';
import styled from 'styled-components';
import Color from '../../styles/Color';
import { FontSize, FontFamily } from '../../styles/Font';

type Props = {
  name: string
}

const Label: React.FC<Props> = (props) => {
  const { name } = props;
  return (
    <StyledQuestionLabel>{name}</StyledQuestionLabel>
  )
}

export default Label;

const StyledQuestionLabel = styled.div`
color: ${Color.LightGray};
font-size: ${FontSize.Small};
font-family: ${FontFamily.Roboto};
margin-top: 20px;
`