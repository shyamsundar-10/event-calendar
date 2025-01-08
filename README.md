



# Event Calendar Application

Visit the website - [click here](https://calendar-shyamsundar-10.netlify.app/)

## Overview

This project is a Dynamic Event Calendar Application built with React.js. It allows users to view, add, and delete events on a calendar. The application also supports filtering events by keyword and persists event data using `localStorage`.

## Features

- **Calendar View**: Displays a monthly calendar grid with days aligned properly. Users can navigate between months and years.
  ![calendar](https://github.com/user-attachments/assets/d6828e5a-791a-44a9-a808-f19c7b296514)

- **Event Management**: Users can add, edit, and delete events on specific days.
  
  ![addevent](https://github.com/user-attachments/assets/6843feba-810e-4096-a72b-dedc0141dffc)

- **Event Filtering**: Users can filter events by keyword.
  
  ![search](https://github.com/user-attachments/assets/bff8d6d4-3ff8-4a27-8404-2e76b1db5591)

- **Data Persistence**: Events are stored in `localStorage` to persist data between page refreshes.
  
  ![eventlist](https://github.com/user-attachments/assets/b899879f-a7f5-48bc-a24b-fb442d04628a)

- **Responsive Design**: The layout adjusts for different screen sizes, showing the filter section under the calendar on mobile devices.

## Project Structure

The project is structured as follows:
```
my-calendar-app/ 
├── public/ 
│ ├── index.html
├── src/
│ ├── components/ 
│ │ ├── Calendar.js
│ │ ├── EventModal.js
│ │ ├── EventList.js
│ ├── styles/ 
│ │ ├── styles.css
│ │ ├── Calendar.css
│ │ ├── EventModal.css
│ │ ├── EventList.css
│ ├── App.js
│ ├── index.js
├── package.json
├── README.md
```
### Components

1. **Calendar.js**

   This component renders the calendar view. It includes:
   - Logic to display days of the current month.
   - Navigation between months and years.
   - Handling click events to open a modal for adding/editing events.

2. **EventModal.js**

   This component renders a modal for adding or editing events. It includes:
   - Input fields for event name, start time, end time, and description.
   - Buttons to save the event or cancel the action.

3. **EventList.js**

   This component displays a list of events. It includes:
   - Logic to filter events based on the search keyword.
   - Handling delete actions for events.

### Logic Explanation

1. **Calendar Logic**:
   - The calendar is displayed using a grid layout. The days are dynamically generated based on the current month and year.
   - Navigation between months and years is handled by updating the state variables (`currentMonth` and `currentYear`).
   - The days of the week (Sunday to Saturday) are displayed at the top, and the days of the month are displayed in the grid.

2. **Event Management**:
   - Events are managed using the `useState` hook. Events are stored in an array, and each event has properties like `id`, `date`, `name`, `startTime`, `endTime`, and `description`.
   - Adding or editing an event opens a modal with input fields. The event data is saved in the state array and persisted in `localStorage`.

3. **Filtering Events**:
   - Events can be filtered using a search keyword. The `filteredEvents` array is generated by filtering the `events` array based on the keyword.
   - The filtered events are displayed in the `EventList` component.

4. **Data Persistence**:
   - Events are stored in `localStorage` to persist data between page refreshes. The `useEffect` hook is used to update `localStorage` whenever the `events` state changes.

5. **Responsive Design**:
   - The layout adjusts for different screen sizes using CSS media queries. On desktop, the filter section and calendar are displayed side by side. On mobile devices, the filter section is displayed under the calendar.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shyamsundar-10/event-calendar.git
   cd dynamic-event-calendar
2. Install dependencies:

   ```bash
   npm install

3. Start the development server:

   ```bash
   npm start

## Usage
**Viewing Events:**
Click on any day in the calendar to view, add, or edit events.

**Switching Months and Years:**
Use the "Previous" and "Next" buttons or the dropdowns to navigate between months and years.

**Filtering Events:**
Use the filter input field to search for events by name.

## Technologies Used

   - React.js: For building the user interface.

   - shadcn: For UI components.

   - localStorage: For data persistence.

   - CSS: For styling the application.

### License
This project is licensed under the MIT License.
