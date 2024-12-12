import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarComponent() {
  const [value, setValue] = useState(new Date());

  return (
    <div>
      <Calendar 
        onChange={setValue} 
        value={value} 
        selectRange 
      />
    </div>
  );
}

export default CalendarComponent;
