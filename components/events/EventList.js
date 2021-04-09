import React from 'react';
import EventItem from './EventItem';

function EventList({ events }) {
  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-wrap -mx-4 -mb-10 text-center'>
          {events.map((event) => {
            return <EventItem event={event} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default EventList;
