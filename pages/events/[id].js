import React from 'react';
import EventDetail from '../../components/event-detail/EventDetail';

function EventDetailedPage({ event }) {
  if (!event) {
    return <p>Sorry Event Not Found!!</p>;
  }

  return (
    <>
      <EventDetail event={event} />
    </>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch(`http://localhost:1337/events/${context.params.id}`);

  const event = await res.json();

  return {
    props: {
      event,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:1337/events`);

  const events = await res.json();

  const ids = events.map((event) => event.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default EventDetailedPage;
