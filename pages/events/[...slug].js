import EventList from '../../components/events/EventList';
import { getFilteredEvents } from '../../healpers/api-util';

function FilteredEventsPage({ hasError, filteredEvents }) {
  // if (!filteredData) {
  //   return (
  //     <div>
  //       <p>Loading!!!</p>
  //     </div>
  //   );
  // }

  if (hasError) {
    return (
      <div>
        <p>Invalid Filter please adjust your values</p>
      </div>
    );
  }

  if (filteredEvents.length === 0 || !filteredEvents) {
    return (
      <div>
        <p>No Events Found</p>
      </div>
    );
  }

  return (
    <>
      <EventList events={filteredEvents} />
    </>
  );
}

export const getServerSideProps = async (context) => {
  const filteredData = context.params.slug;

  const [filteredYear, filteredMonth] = filteredData;

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (isNaN(numYear) || isNaN(numMonth) || numMonth > 12 || numMonth < 1) {
    return {
      props: { hasError: true },
      // notFound: true
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      filteredEvents,
    },
  };
};

export default FilteredEventsPage;
