import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Default styles

const CalendarComp = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    console.log('Selected date:', newDate);
  };

  return (
    <div className="custom-calendar">
      <div className="calendar-header">
        <h2>
          {date.toLocaleString('default', { month: 'long' })}, {date.getFullYear()}
        </h2>
        <button onClick={() => setDate(new Date())} className="today-btn">
          Today
        </button>
      </div>

      <Calendar
        value={date}
        onChange={handleDateChange}
        locale="en-US"
        showNeighboringMonth={false} // Hide previous/next month's dates
        tileClassName={({ date }) =>
          date.getDay() === 5 ? 'highlight' : '' // Highlight Fridays
        }
      />
    </div>
  );
};

export default CalendarComp;
