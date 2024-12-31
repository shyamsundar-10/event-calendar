import React, { useState, useEffect } from 'react';
import './Calendar.css';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = [
  'January', 'February', 'March', 'April', 'May', 'June', 
  'July', 'August', 'September', 'October', 'November', 'December'
];

function Calendar({ events, openModal }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  useEffect(() => {
    setCurrentDate(new Date(currentYear, currentMonth, 1));
  }, [currentMonth, currentYear]);

  const renderDays = () => {
    const startDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const calendarDays = [];

    for (let i = 0; i < startDay; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dayEvents = events.filter(event => new Date(event.date).toDateString() === new Date(currentYear, currentMonth, day).toDateString());
      calendarDays.push(
        <div key={day} className="calendar-day" onClick={() => openModal(new Date(currentYear, currentMonth, day).toISOString())}>
          <div className="date">{day}</div>
          {dayEvents.map(event => (
            <div key={event.id} className="event">
              {event.name}
            </div>
          ))}
        </div>
      );
    }

    return calendarDays;
  };

  const prevMonth = () => {
    setCurrentMonth(prev => (prev === 0 ? 11 : prev - 1));
    setCurrentYear(prev => (currentMonth === 0 ? prev - 1 : prev));
  };

  const nextMonth = () => {
    setCurrentMonth(prev => (prev === 11 ? 0 : prev + 1));
    setCurrentYear(prev => (currentMonth === 11 ? prev + 1 : prev));
  };

  const handleYearChange = (e) => {
    setCurrentYear(parseInt(e.target.value, 10));
  };

  const handleMonthChange = (e) => {
    setCurrentMonth(parseInt(e.target.value, 10));
  };

  const renderYearOptions = () => {
    const years = [];
    for (let i = 2000; i <= 2050; i++) {
      years.push(<option key={i} value={i}>{i}</option>);
    }
    return years;
  };

  const renderMonthOptions = () => {
    return months.map((month, index) => (
      <option key={month} value={index}>{month}</option>
    ));
  };

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={prevMonth}>Previous</button>
        <div>
          <select value={currentMonth} onChange={handleMonthChange}>
            {renderMonthOptions()}
          </select>
          <select value={currentYear} onChange={handleYearChange}>
            {renderYearOptions()}
          </select>
        </div>
        <button onClick={nextMonth}>Next</button>
      </div>
      <div className="days-of-week">
        {daysOfWeek.map(day => (
          <div key={day} className="day-of-week">{day}</div>
        ))}
      </div>
      <div className="calendar-grid">
        {renderDays()}
      </div>
    </div>
  );
}

export default Calendar;
