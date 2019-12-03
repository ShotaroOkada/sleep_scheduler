import React from 'react';
import styled from 'styled-components';
import { FontSize, FontFamily } from '../../styles/Font';
import Color from '../../styles/Color';

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
  font-size: ${FontSize.Small}px;
  color: ${Color.LightGray};
  font-family: ${FontFamily.Roboto};
  border-radius: 3px;
  text-decoration: none;
  padding: 5px 7px 3px 7px;
  margin-left: 5px;
  &:focus {
    outline: none;
    background: ${Color.WhiteSmoke}
  }
  &:hover {
    background: ${Color.WhiteSmoke}
  }
`