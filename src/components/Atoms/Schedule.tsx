import React, { useState } from 'react';
import styled from 'styled-components';
import Fonts from '../../utilsUI/Fonts';
import { Rnd, DraggableData, Position } from 'react-rnd';
import { DraggableEvent } from 'react-draggable';
import Colors from '../../utilsUI/Color';

type Props = {
  scheduleName: string;
  background: string;
}

// タイムラインに貼り付ける予定が書かれたブロック
const Schedule: React.FC<Props> = (props) => {
  const { scheduleName, background } = props;
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const onDrag = (_: DraggableEvent, data: DraggableData) => {
    setX(data.x);
    setY(data.y);
  }

  const onResize = (position: Position) => {
    setX(position.x);
    setY(position.y);
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.metaKey && e.key === 'c') {
      console.log('command + c')
    } else if (e.key === 'Backspace') {
      console.log('delete');
    } else {
      return;
    }
  }

  return (
    <Wrapper
      tabIndex={0}
      onKeyDown={onKeyDown}
      background={background}
      position={{ x, y }}
      onDragStop={onDrag}
      onResize={onResize}
      enableResizing={{
        top: false, right: true, bottom: true, left: true,
        topRight: false, bottomRight: false, bottomLeft: false, topLeft: false
      }}
    >
      {scheduleName}
    </Wrapper >
  )
}

export default Schedule

type WrapperProps = {
  background: string
}

const Wrapper = styled(Rnd)<WrapperProps>((props: WrapperProps) => `
  background: ${props.background};
  font-family: ${Fonts.FamilyRoboto};
  color: white;
  padding: 8px;
  border-radius: 5px;
  font-size: ${Fonts.SizeDefault}px;
  &:focus{
    outline: none;
    box-shadow: 2px 2px 4px ${Colors.LightGray};
  }
`)