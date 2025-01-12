import React from 'react';
import './EventList.css';

function EventList({ events, deleteEvent }) {
  // Sort events by date
  const sortedEvents = events.sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div className="event-list">
      {sortedEvents.map(event => (
        <div key={event.id} className="event-item">
          <h3>{event.name}</h3>
          <p>{new Date(event.date).toDateString()}</p> {/* Display the date */}
          <p>{event.description}</p>
          <button onClick={() => deleteEvent(event.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default EventList;
