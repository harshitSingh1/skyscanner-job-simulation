import React, { useState } from 'react';
import { BpkCode } from '@skyscanner/backpack-web/bpk-component-code';
import BpkButton from '@skyscanner/backpack-web/bpk-component-button';
import BpkText from '@skyscanner/backpack-web/bpk-component-text';
import { cssModules } from '@skyscanner/backpack-web/bpk-react-utils';
import STYLES from './App.scss';
import BpkCalendar, { CALENDAR_SELECTION_TYPE } from '@skyscanner/backpack-web/bpk-component-calendar';
import { format } from 'date-fns/format';

const getClassName = cssModules(STYLES);
const formatDateFull = (date) => format(date, 'EEEE, do MMMM yyyy');
const formatMonth = (date) => format(date, 'MMMM yyyy');

const daysOfWeek = [
  { name: 'Sunday', nameAbbr: 'Sun', index: 0, isWeekend: true },
  { name: 'Monday', nameAbbr: 'Mon', index: 1, isWeekend: false },
  { name: 'Tuesday', nameAbbr: 'Tue', index: 2, isWeekend: false },
  { name: 'Wednesday', nameAbbr: 'Wed', index: 3, isWeekend: false },
  { name: 'Thursday', nameAbbr: 'Thu', index: 4, isWeekend: false },
  { name: 'Friday', nameAbbr: 'Fri', index: 5, isWeekend: false },
  { name: 'Saturday', nameAbbr: 'Sat', index: 6, isWeekend: true },
];

const App = () => {
  const [selectionConfiguration, setSelectionConfiguration] = useState({
    type: CALENDAR_SELECTION_TYPE.single,
    date: null,
  });

  const handleDateSelect = (date) => {
    setSelectionConfiguration({
      type: selectionConfiguration.type,
      date: date,
    });
  };

  return (
    <div className={getClassName('App')}>
      <header className={getClassName('App__header')}>
        <div className={getClassName('App__header-inner')}>
          <BpkText data-testid="heading" tagName="h1" textStyle="xxl" className={getClassName('App__heading')}>
            Flight Schedule
          </BpkText>
        </div>
      </header>
      <main className={getClassName('App__main')}>
        <BpkText tagName="p" className={getClassName('App__text')}>
          Select a date to check the flight schedule.
        </BpkText>
        <div className={getClassName('App__calendar-container')}>
          <BpkCalendar
            id="calendar"
            onDateSelect={handleDateSelect}
            formatMonth={formatMonth}
            formatDateFull={formatDateFull}
            daysOfWeek={daysOfWeek}
            weekStartsOn={1}
            changeMonthLabel="Change Month"
            nextMonthLabel="Next Month"
            previousMonthLabel="Previous Month"
            selectionConfiguration={selectionConfiguration}
            className={getClassName('App__calendar')}
          />
        </div>
        <BpkButton onClick={() => alert('Flight Scheduled!')} className={getClassName('App__button')}>
          Continue
        </BpkButton>
      </main>
      <footer className={getClassName('App__footer')}>
        <BpkText tagName="p" className={getClassName('App__footer-text')}>
          © 2025 Flight Schedule App. All rights reserved.
        </BpkText>
      </footer>
    </div>
  );
};

export default App;
