import React from 'react';
import Schedule from './Atoms/Schedule';
import Colors from '../utilsUI/Color';
import TimeLine from './Molecules/TimeLine';

const App: React.FC = () => {
  return (
    <div>
      <TimeLine />
      <Schedule scheduleName='睡眠' background={Colors.RoyalBlue} />
    </div>
  );
}

export default App;
