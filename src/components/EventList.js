import React from 'react';
import './EventList.css';

function EventList({ events, deleteEvent }) {
  return (
    <div className="event-list">
      {events.map(event => (
        <div key={event.id} className="event-item">
          <h3>{event.name}</h3>
          <p>{event.startTime} - {event.endTime}</p>
          <p>{event.description}</p>
          <button onClick={() => deleteEvent(event.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default EventList;
