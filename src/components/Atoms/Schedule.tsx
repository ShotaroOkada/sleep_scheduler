import React from 'react';
import styled from 'styled-components';
import Fonts from '../../utilsUI/Font';
import { Rnd, DraggableData, Position, ResizableDelta } from 'react-rnd';
import { DraggableEvent } from 'react-draggable';
import Color from '../../utilsUI/Color';
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
  const dispatch = useDispatch();

  const onDrag = (e: DraggableEvent, data: DraggableData) => {
    if (position.x === data.x && position.y === data.y) {
      return
    }
    dispatch(positionChangeSchedule({ index, position: { x: data.x, y: data.y } }))
  }

  const onResizeStop = (e: MouseEvent | TouchEvent, dir: ResizeDirection, ref: HTMLDivElement, delta: ResizableDelta, position: Position) => {
    if (size.width === ref.style.width && size.height === ref.style.height) {
      return
    }
    dispatch(sizeChangeSchedule({ index, position: { x: position.x, y: position.y }, size: { width: ref.style.width, height: ref.style.height } }))
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.metaKey && e.key === 'c') {
      dispatch(copiedSchedule({ schedule: { name: scheduleName, background, position, size } }))
    } else if (e.key === 'Backspace') {
      dispatch(deleteSchedule({ index }))
    } else {
      return;
    }
  }

  return (
    <StyledSchedule
      tabIndex={0}
      onKeyDown={onKeyDown}
      background={background}
      position={position}
      size={size}
      onDragStop={onDrag}
      onResizeStop={onResizeStop}
      enableResizing={{
        top: false, right: true, bottom: true, left: true,
        topRight: false, bottomRight: true, bottomLeft: false, topLeft: false
      }}
    >
      {scheduleName}
    </StyledSchedule >
  )
}

export default Schedule

type StyledScheduleProps = {
  background: string
}

const StyledSchedule = styled(Rnd)<StyledScheduleProps>(props => `
  background: ${props.background};
  font-family: ${Fonts.FamilyRoboto};
  color: white;
  padding: 8px;
  border-radius: 5px;
  font-size: ${Fonts.SizeDefault}px;
  &:focus{
    outline: none;
    box-shadow: 3px 3px 5px ${Color.LightGray};
  }
`)