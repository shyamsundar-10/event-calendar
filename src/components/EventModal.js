import React, { useState, useEffect } from 'react';
import './EventModal.css';

function EventModal({ date, addEvent, editEvent, closeModal, eventToEdit }) {
  const [eventName, setEventName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (eventToEdit) {
      setEventName(eventToEdit.name);
      setDescription(eventToEdit.description);
    }
  }, [eventToEdit]);

  const handleSubmit = () => {
    const event = {
      id: eventToEdit ? eventToEdit.id : Date.now(),
      date,
      name: eventName,
      description,
    };
    eventToEdit ? editEvent(event) : addEvent(event);
    closeModal();
  };

  return (
    <div className="modal">
      <h2>{eventToEdit ? 'Edit Event' : `Add Event for ${new Date(date).toDateString()}`}</h2>
      <input
        type="text"
        placeholder="Event Name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleSubmit}>{eventToEdit ? 'Save Changes' : 'Add Event'}</button>
      <button onClick={closeModal}>Cancel</button>
    </div>
  );
}

export default EventModal;
