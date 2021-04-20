export async function getAllEvents() {
  const res = await fetch(`http://localhost:1337/events`);

  const events = await res.json();

  return events;
}

export async function getFilteredEvents(dateFilter) {
  const Allevents = await getAllEvents();

  const { year, month } = dateFilter;

  let filteredEvents = Allevents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
