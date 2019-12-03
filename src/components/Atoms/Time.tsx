import React from 'react';
import styled from 'styled-components';
import Color from '../../styles/Color';
import { FontSize, FontFamily } from '../../styles/Font';

type Props = {
  time: string
}

// TimeLineにおける1要素 時間+線
const Time: React.FC<Props> = (props) => {
  const { time } = props
  return (
    <StyledTime>
      <StyledText>{time}</StyledText>
    </StyledTime>
  )
}

export default Time;

const StyledTime = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  &::after {
    content: "";
    height: 1px;
    width: 20vw;
    display: block;
    background: ${Color.LightGray};
    margin-left: .4em;
  }
`
const StyledText = styled.span`
  width: 60px;
  text-align: right;
  font-family: ${FontFamily.Roboto};
  color: ${Color.LightGray};
  font-size: ${FontSize.Small}px;
`
