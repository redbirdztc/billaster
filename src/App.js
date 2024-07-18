import './App.css';

import React, { useState } from 'react';

import Header from './header';
import FilterBar from './filter_bar';
import StatisticBar from './statistic_bar';
import MonthlyRecords from './monthly_records';
import UpperDrawer from './upper_drawer';
import Footer from './footer';

// footer imgs
import InvoiceIcon from './img/invoice.png';
import AnalyticsIcon from './img/analytics.png';
import BudgetIcon from './img/calculator.png';
import AccountIcon from './img/wallet.png';
import CategoryIcon from './img/category.png';


const footerBtns = [
  {
    name: "Records",
    icon: InvoiceIcon,
    onClick: () => { console.log("Records") }
  },
  {
    name: "Analysis",
    icon: AnalyticsIcon,
    onClick: () => { console.log("Analysis") }
  },
  {
    name: "Budgets",
    icon: BudgetIcon,
    onClick: () => { console.log("Budgets") }
  },
  {
    name: "Accounts",
    icon: AccountIcon,
    onClick: () => { console.log("Accounts") }
  },
  {
    name: "Categories",
    icon: CategoryIcon,
    onClick: () => { console.log("Categories") }
  }
]

const RecordsElement = () => {
  return (
    <div className='w-full z-0 left-0 pt-[10rem] pb-[3rem]' >
      <div className='App-background' style={{ height: 'calc(100% - 9rem)' }}>
        <MonthlyRecords records={[]} />
      </div>
    </div>
  )
}

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
            <StatisticBar expense={1362.74} income={199988.7} />
          </div>
        </UpperDrawer>

        <RecordsElement></RecordsElement>

        <div className='h-12 w-full fixed bottom-0 App-background'>
          <Footer btns={footerBtns}></Footer>
        </div>
      </div>

    </div>
  );
}

export default App;
