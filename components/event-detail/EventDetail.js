import React from 'react';
import EventImage from './EventImage';
import EventInfo from './EventInfo';

function EventDetail({ event }) {
  const { title, description, location, date, image } = event;
  return (
    <section class='text-gray-600 body-font'>
      <div class='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
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
