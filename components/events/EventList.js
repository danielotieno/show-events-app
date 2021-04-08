import React from 'react';
import EventItem from './EventItem';

function EventList({ events }) {
  return (
    <section class='text-gray-600 body-font'>
      <div class='container px-5 py-24 mx-auto'>
        <div class='flex flex-wrap -mx-4 -mb-10 text-center'>
          {events.map((event) => {
            return <EventItem event={event} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default EventList;
