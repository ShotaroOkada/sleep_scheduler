import React from 'react';
import { useSelector } from 'react-redux';
import RootState from '../../states';
import Schedule from '../Atoms/Schedule';

const Schedules: React.FC = () => {
  const schedules = useSelector<RootState, RootState['scheduleState']['schedules']>(state => state.scheduleState.schedules);
  return (
    <div>
      {schedules.map((schedule, index) => {
        return <Schedule key={`${index}:${schedule} x:${schedule.position.x} y:${schedule.position.y}`} scheduleName={schedule.name} background={schedule.background} index={index} position={schedule.position} />
      })}
    </div>
  )
}

export default Schedules;