import './App.css';

import React, { useState } from 'react';

import Header from './header';
import FilterBar from './filter_bar';
import StatisticBar from './statistic_bar';
import MonthlyRecords from './monthly_records';
import UpperDrawer from './upper_drawer';

function App() {
  const [headerMovement, setHeaderMovement] = useState(0);
  const [recordsMovement, setRecordsMovement] = useState(0);
  const [startY, setStartY] = useState(0);

  const handleTouchStart = (event) => {
    setStartY(event.touches[0].clientY);
  };

  const handleTouchMove = (movement, maxMovement, setter) => (event) => {
    const touchY = event.touches[0].clientY;
    var diffY = movement + (startY - touchY);

    if (diffY < 0) {
      diffY = 0
    } else if (diffY > maxMovement) {
      diffY = maxMovement
    }

    setter(diffY);
  };

  return (
    <div >
      <div  onTouchStart={handleTouchStart} onTouchMove={handleTouchMove(headerMovement, 96, setHeaderMovement)}>
        <UpperDrawer movement={headerMovement} maxMovement={96} >
          <div className='App-background  z-10'>
            <Header/>
            <FilterBar/>
            <StatisticBar expense={1362.74} income={11988.7} />
          </div>
        </UpperDrawer>
      </div>

      <div className='top-36  w-full' onTouchStart={handleTouchStart} onTouchMove={handleTouchMove(recordsMovement, 180, setRecordsMovement)}>

          <div className='App-background z-0' style={{ height: 'calc(100% - 9rem)' }} >
            <MonthlyRecords records={[]}></MonthlyRecords>
          </div>
      </div>
    </div>
  );
}

export default App;
