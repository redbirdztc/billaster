import './App.css';

import React, { useState } from 'react';

import Header from './header';
import FilterBar from './filter_bar';
import StatisticBar from './statistic_bar';
import MonthlyRecords from './monthly_records';
import UpperDrawer from './upper_drawer';

function App() {
  const [headerMovement, setHeaderMovement] = useState(0);
  const [startY, setStartY] = useState(0);

  const handleTouchStart = (event) => {
    setStartY(event.touches[0].clientY);
  };

  const handleTouchMove = (maxMovement, setter) => (event) => {
    const touchY = event.touches[0].clientY;
    var diffY = startY - touchY;

    if (diffY < 0) {
      diffY = 0
    } else if (diffY > maxMovement) {
      diffY = maxMovement
    }

    setter(diffY);
  };

  return (
    <div>
      <div className='App-background' onTouchStart={handleTouchStart} onTouchMove={handleTouchMove(96, setHeaderMovement)}>
        <UpperDrawer movement={headerMovement} maxMovement={96} boxShadow={"0px 1px 16px 2px rgba(0,0,0,0.1)"}>
          <div className='App-background'  >
            <Header />
            <FilterBar />
            <StatisticBar expense={1362.74} income={11988.7} />
          </div>
        </UpperDrawer>

        <div className='w-full z-0 left-0 fixed' style={{ position: 'relative', top: `${144 - headerMovement}px` }}>
          <div className='App-background' style={{ height: 'calc(100% - 9rem)' }}>
            <MonthlyRecords records={[]} />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
