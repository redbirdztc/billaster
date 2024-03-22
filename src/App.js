import './App.css';
import React, { useState } from 'react';

import Header from './header';
import FilterBar from './filter_bar';
import StatisticBar from './statistic_bar';
import MonthlyRecords from './monthly_records';
import UpperDrawer from './upper_drawer';
import GradientComponent from './gradient';


function App() {
  const drawerItems = [
    (<Header key="0" />),
    (<FilterBar key="1" />),
    (<StatisticBar key="2" expense={1362.74} income={11988.7} />),
    (<GradientComponent key="3" width='100%' height='2vh'></GradientComponent>)
  ];

  const [movement, setMovement] = useState(0);
  const [startY, setStartY] = useState(0);

  const handleTouchStart = (event) => {
    setStartY(event.touches[0].clientY);
  };

  const handleTouchMove = (event) => {
    const touchY = event.touches[0].clientY;
    const diffY = startY - touchY;
    setMovement(-diffY );
  };

  return (
    <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
      <UpperDrawer height="19vh" movement={movement} subElements={drawerItems} maxMovement={11 * (window.innerHeight / 100)} >
      </UpperDrawer>


      <div style={{ top: '19vh', position: 'absolute', height:'81vh',width:'100%'}} className='App-background'>
        <MonthlyRecords records={[]}></MonthlyRecords>
      </div>
    </div>
  );
}

export default App;
