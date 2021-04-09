import React from 'react';
import EventList from '../../components/events/EventList';
import { getAllEvents } from '../../data/data';

function AllEventsPage() {
  const events = getAllEvents();
  return (
    <section>
      <EventList events={events} />
    </section>
  );
}

export default AllEventsPage;
