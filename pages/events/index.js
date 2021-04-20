import EventList from '../../components/events/EventList';
import EventSearch from '../../components/events/EventSearch';

function AllEventsPage({ events }) {
  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <>
      <EventSearch onSearch={findEventsHandler} />
      <EventList events={events} />
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:1337/events`);

  const events = await res.json();

  return {
    props: {
      events,
    },
  };
};

export default AllEventsPage;
