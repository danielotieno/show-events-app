import React from 'react';
import EventImage from './EventImage';
import EventInfo from './EventInfo';

function EventDetail({ event }) {
  const { title, description, location, date, image } = event;
  return (
    <section className='text-gray-600 body-font'>
      <div className='container flex flex-col items-center px-5 py-24 mx-auto md:flex-row'>
        <EventInfo
          title={title}
          description={description}
          location={location}
          date={date}
        />
        <EventImage image={image} />
      </div>
    </section>
  );
}

export default EventDetail;
