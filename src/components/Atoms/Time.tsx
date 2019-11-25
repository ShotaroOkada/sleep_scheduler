import React from 'react';
import styled from 'styled-components';
import Colors from '../../utilsUI/Color';
import Fonts from '../../utilsUI/Fonts';

type Props = {
  time: string
}

// TimeLineにおける1要素 時間+線
const Time: React.FC<Props> = (props) => {
  const { time } = props
  return (
    <Wrapper>
      <TextTime>{time}</TextTime>
    </Wrapper>
  )
}

export default Time;

const Wrapper = styled.span`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  &::after {
    content: "";
    height: 1px;
    width: 20vw;
    display: block;
    background: ${Colors.LightGray};
    margin-left: .4em;
  }
`
const TextTime = styled.span`
  width: 100px;
  text-align: right;
  font-family: ${Fonts.FamilyRoboto};
  color: ${Colors.LightGray};
  font-size: 13px;
`
