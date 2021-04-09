import { useRouter } from 'next/router';
import EventList from '../../components/events/EventList';
import { getFilteredEvents } from '../../data/data';

function FilteredEventsPage() {
  const router = useRouter();

  const filteredData = router.query.slug;

  console.log(filteredData);

  if (!filteredData) {
    return (
      <div>
        <p>Loading!!!</p>
      </div>
    );
  }

  const [filteredYear, filteredMonth] = filteredData;

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  console.log(numYear);

  if (isNaN(numYear) || isNaN(numMonth) || numMonth > 12 || numMonth < 1) {
    return (
      <div>
        <p>Invalid Filter search</p>
      </div>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

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

export default FilteredEventsPage;
