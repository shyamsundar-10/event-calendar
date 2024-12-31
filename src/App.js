import React, { useState, useEffect } from "react";
import Calendar from "./components/Calendar";
import EventModal from "./components/EventModal";
import EventList from "./components/EventList";
import "./styles/styles.css";
import "./components/EventList.css";

function App() {
  const [events, setEvents] = useState(() => {
    const storedEvents = localStorage.getItem("events");
    return storedEvents ? JSON.parse(storedEvents) : [];
  });
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterKeyword, setFilterKeyword] = useState("");

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const addEvent = (event) => {
    setEvents([...events, event]);
    setIsModalOpen(false);
  };

  const editEvent = (editedEvent) => {
    setEvents(
      events.map((event) => (event.id === editedEvent.id ? editedEvent : event))
    );
    setIsModalOpen(false);
  };

  const deleteEvent = (eventId) => {
    setEvents(events.filter((event) => event.id !== eventId));
  };

  const openModal = (date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(filterKeyword.toLowerCase())
  );

  return (
    <div className="App">
      <div className="sidebar">
        <div className="filter-card">
          <input
            type="text"
            placeholder="Filter events"
            value={filterKeyword}
            onChange={(e) => setFilterKeyword(e.target.value)}
            className="filter-input"
          />
          <EventList events={filteredEvents} deleteEvent={deleteEvent} />
        </div>
      </div>
      <div className="main-content">
        <Calendar events={events} openModal={openModal} />
        {isModalOpen && (
          <EventModal
            date={selectedDate}
            addEvent={addEvent}
            editEvent={editEvent}
            closeModal={() => setIsModalOpen(false)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
