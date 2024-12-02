import React from 'react';

const Calendar = () => (
  <div className="calendar-container">
    <h2>Dec, 2024</h2>
    <div className="calendar">
      <button>Today</button>
      <div className="dates">
        {[...Array(15).keys()].map(day => (
          <div key={day} className={day === 9 ? 'active' : ''}>
            {day + 1}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Calendar;
