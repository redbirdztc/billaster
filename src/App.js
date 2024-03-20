import './App.css';
import React from 'react';

import Header from './header';
import FilterBar from './filter_bar';
import StatisticBar from './statistic_bar';
import MonthlyRecords from './monthly_records';


function App() {
  return (
    <div className="App App-background">
      <Header />
      <FilterBar />
      <StatisticBar expense={1362.74} income={11988.7} />
      <MonthlyRecords records={[]}></MonthlyRecords>
    </div>
  );
}

export default App;
