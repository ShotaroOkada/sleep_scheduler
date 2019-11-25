import React, { useState } from 'react';
import styled from 'styled-components';
import Fonts from '../../utilsUI/Fonts';
import { Rnd, DraggableData, Position } from 'react-rnd';
import { DraggableEvent } from 'react-draggable';

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

  return (
    <Wrapper
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
  font-family: ${Fonts.FamilyMairyo};
  color: white;
  padding: 10px;
  border-radius: 5px;
`)