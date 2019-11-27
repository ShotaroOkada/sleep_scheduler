import React, { useState } from 'react';
import styled from 'styled-components';
import Fonts from '../../utilsUI/Fonts';
import { Rnd, DraggableData, Position, ResizableDelta } from 'react-rnd';
import { DraggableEvent } from 'react-draggable';
import Colors from '../../utilsUI/Color';
import { useDispatch } from 'react-redux';
import { copiedSchedule, deleteSchedule, positionChangeSchedule, sizeChangeSchedule } from '../../actions/Schedules/ActionCreator';
import { SchedulePosition, ScheduleSize } from '../../states/Schedules';
import { ResizeDirection } from 're-resizable';

type Props = {
  scheduleName: string;
  background: string;
  index: number;
  position: SchedulePosition;
  size: ScheduleSize;
}

// タイムラインに貼り付ける予定が書かれたブロック
const Schedule: React.FC<Props> = (props) => {
  const { scheduleName, background, index, position, size } = props;
  const [x, setX] = useState(position.x);
  const [y, setY] = useState(position.y);
  const [width, setWidth] = useState(size.width);
  const [height, setHeight] = useState(size.height);
  const dispatch = useDispatch();

  const onDrag = (_: DraggableEvent, data: DraggableData) => {
    if (x === data.x && y === data.y) {
      return
    }
    setX(data.x);
    setY(data.y);
    dispatch(positionChangeSchedule({ index, position: { x: data.x, y: data.y } }))
  }

  const onResize = (e: MouseEvent | TouchEvent, dir: ResizeDirection, ref: HTMLDivElement, delta: ResizableDelta, position: Position) => {
    setX(position.x);
    setY(position.y);
    setWidth(ref.style.width);
    setHeight(ref.style.height);
    dispatch(sizeChangeSchedule({ index, position: { x: position.x, y: position.y }, size: { width: ref.style.width, height: ref.style.height } }))
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.metaKey && e.key === 'c') {
      dispatch(copiedSchedule({ schedule: { name: scheduleName, background, position: { x, y }, size: { width, height } } }))
    } else if (e.key === 'Backspace') {
      dispatch(deleteSchedule({ index }))
    } else {
      return;
    }
  }

  return (
    <StyledRnd
      tabIndex={0}
      onKeyDown={onKeyDown}
      background={background}
      position={{ x, y }}
      size={{
        width,
        height
      }}
      onDragStop={onDrag}
      onResize={onResize}
      enableResizing={{
        top: false, right: true, bottom: true, left: true,
        topRight: false, bottomRight: false, bottomLeft: false, topLeft: false
      }}
    >
      {`${index}:${scheduleName}`}
    </StyledRnd >
  )
}

export default Schedule

type WrapperProps = {
  background: string
}

const StyledRnd = styled(Rnd)<WrapperProps>((props: WrapperProps) => `
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