import React from 'react';
import styled from 'styled-components';
import Color from '../../utilsUI/Color';
import Font from '../../utilsUI/Font';

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
font-size: ${Font.SizeDefault};
font-family: ${Font.FamilyRoboto};
margin-top: 20px;
`