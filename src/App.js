import './App.css';

import React, { useState } from 'react';

import Header from './header';
import FilterBar from './filter_bar';
import StatisticBar from './statistic_bar';
import MonthlyRecords from './monthly_records';
import UpperDrawer from './upper_drawer';

function App() {
  const [movement, setMovement] = useState(0);
  const [startY, setStartY] = useState(0);

  const handleTouchStart = (event) => {
    setStartY(event.touches[0].clientY);
  };

  const handleTouchMove = (event) => {
    const touchY = event.touches[0].clientY;
    const diffY = startY - touchY;
    setMovement(-diffY);
  };

  return (
    <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
      <div className='z-10'>
        <UpperDrawer movement={movement} maxMovement={96} zIndex={10}>
          <div className='App-background bg-blend-normal'>
            <Header key="0" />
            <FilterBar key="1" />
            <StatisticBar key="2" expense={1362.74} income={11988.7} />
          </div>
        </UpperDrawer>
      </div>

      <div className='top-36 absolute  w-full z-0' >
        <UpperDrawer movement={movement} maxMovement={180}>
          <div className='App-background bg-blend-normal' style={{ height: 'calc(100% - 9rem)' }} >
            <MonthlyRecords records={[]}></MonthlyRecords>
          </div>
        </UpperDrawer>
      </div>
    </div>
  );
}

export default App;
