import React from 'react';
import styled from 'styled-components';
import Fonts from '../../utilsUI/Fonts';
import Colors from '../../utilsUI/Color';

type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<Props> = (props) => {
  const { onClick } = props;
  return (
    <StyledButton onClick={onClick}>
      ＋ 予定を追加
    </StyledButton>
  )
}

export default Button;

const StyledButton = styled.button`
  font-size: ${Fonts.SizeDefault}px;
  color: ${Colors.LightGray};
  font-family: ${Fonts.FamilyRoboto};
  border-radius: 3px;
  text-decoration: none;
  padding: 5px 7px 3px 7px;
  margin-left: 5px;
  &:focus {
    outline: none;
    background: ${Colors.WhiteSmoke}
  }
  &:hover {
    background: ${Colors.WhiteSmoke}
  }
`