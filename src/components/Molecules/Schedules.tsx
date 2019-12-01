import React from 'react';
import { useSelector } from 'react-redux';
import RootState from '../../states';
import Schedule from '../Atoms/Schedule';
import styled from 'styled-components';

const Schedules: React.FC = () => {
  const schedules = useSelector<RootState, RootState['scheduleState']['schedules']>(state => state.scheduleState.schedules);
  return (
    <StyledSchedules>
      {schedules.map((schedule, index) => {
        return <Schedule key={`${index}:${schedule}`} scheduleName={schedule.name} background={schedule.background} index={index} position={schedule.position} size={schedule.size} />
      })}
    </StyledSchedules>
  )
}

export default Schedules;

const StyledSchedules = styled.div`

`