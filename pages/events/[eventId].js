import React from 'react';
import { useRouter } from 'next/router';
import EventDetail from '../../components/event-detail/EventDetail';
import { getEventById } from '../../data/data';

function EventDetailedPage() {
  const router = useRouter();

  const eventId = router.query.eventId;

  const event = getEventById(eventId);

  if (!event) {
    return <p>Sorry Event Not Found!!</p>;
  }

  return (
    <>
      <EventDetail event={event} />
    </>
  );
}

export default EventDetailedPage;
