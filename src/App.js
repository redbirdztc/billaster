import './App.css';

import React, { useState } from 'react';

import Header from './header';
import FilterBar from './filter/filter_bar.js';
import StatisticBar from './bar/statistic_bar.js';
import UpperDrawer from './upper_drawer';
import Footer from './footer';
import Mask from './mask';
import FilterForm from './filter/filter_form.js';
import RecordsContent from './records/content_records.js';
import { PeriodMonthly } from './filter/filter_form_periods.js';

// footer imgs
import InvoiceIcon from './img/invoice.png';
import AnalyticsIcon from './img/analytics.png';
import BudgetIcon from './img/calculator.png';
import AccountIcon from './img/wallet.png';
import CategoryIcon from './img/category.png';

import CenterPopper from './popper/center_popper.js';
import generatedData from './dataset/records.js';

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

function round(number, precision) {
  return Math.round(+number + "e" + precision) / Math.pow(10, precision);
}

function App() {
  const now = new Date();
  const [headerMovement, setHeaderMovement] = useState(0);
  const [startY, setStartY] = useState(0);
  const [mask, setMask] = useState(false);
  const [startDate, setStartDate] = useState(new Date(`${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-01T00:00:00.000+08:00`));
  const [endDate, setEndDate] = useState(new Date(`${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate()}T23:59:59.999+08:00`));
  const [period, setPeriod] = useState(PeriodMonthly);

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


  const data = generatedData.filter((record) => {
    return record.date.getTime() >= startDate.getTime() && record.date.getTime() <= endDate.getTime();
  })

  const expense = round(data.filter((record) => {
    return record.isExpense
  }).reduce((acc, record) => {
    return acc + record.amount;
  }, 0), 2)

  const income = round(data.filter((record) => {
    return !record.isExpense
  }).reduce((acc, record) => {
    return acc + record.amount;
  }, 0), 2);

  return (
    <div >
      <div className='App-background' onTouchStart={handleTouchStart} onTouchMove={handleTouchMove(96, setHeaderMovement)}>
        <UpperDrawer movement={headerMovement} maxMovement={96} boxShadow={"0px 1px 16px 2px rgba(0,0,0,0.1)"}>
          <div className='App-background'>
            <Header />
            <FilterBar onFilterClicked={() => { setMask(!mask) }}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
              startDate={startDate}
              endDate={endDate}
              period={period} />
            <StatisticBar content={[['EXPENSE', `Yuan ${expense}`], ['INCOME', `Yuan ${income}`], ['BALANCE', `Yuan ${income - expense}`]]} />
          </div>
        </UpperDrawer>

        <RecordsContent records={data} />

        <div className='h-12 w-full fixed bottom-0 App-background' style={{ boxShadow: "1px 0px 16px 1px rgba(0,0,0,0.05)" }}>
          <Footer btns={footerBtns} />
        </div>
        {mask &&
          <Mask zIndex={20} color={"#858173"} onClick={() => setMask(!mask)}>
            <CenterPopper>
              <div className='w-2/3 App-background rounded-2xl p-4'>

                <FilterForm curPeriod={period}
                  onPeriodClick={(e) => {
                    e.stopPropagation();
                    const arr = period.getStartEndFromNow();
                    setStartDate(arr[0]); setEndDate(arr[1]);
                    setPeriod(period);
                  }}></FilterForm>

              </div>
            </CenterPopper>
          </Mask>
        }
      </div>
    </div>
  );
}

export default App;
