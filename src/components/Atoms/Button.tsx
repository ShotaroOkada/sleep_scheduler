import React from 'react';
import styled from 'styled-components';
import Fonts from '../../utilsUI/Fonts';
import Colors from '../../utilsUI/Color';

const Button: React.FC = () => {
  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.currentTarget.blur();
  }
  return (
    <Wrapper onClick={onClick}>
      ＋ 予定を追加
    </Wrapper>
  )
}

export default Button;

const Wrapper = styled.button`
  font-size: ${Fonts.SizeDefault}px;
  color: ${Colors.LightGray};
  font-family: ${Fonts.FamilyRoboto};
  border-radius: 3px;
  text-decoration: none;
  padding: 5px 7px 5px 7px;
  &:focus {
    outline: none;
    background: ${Colors.WhiteSmoke}
  }
  &:hover {
    background: ${Colors.WhiteSmoke}
  }
`