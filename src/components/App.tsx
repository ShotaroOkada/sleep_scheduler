import React from 'react';
import Schedule from './Elements/Schedule';
import Colors from '../utilsUI/Color';

const App: React.FC = () => {
  return (
    <div>
      <Schedule scheduleName='睡眠' background={Colors.RoyalBlue} />
    </div>
  );
}

export default App;
