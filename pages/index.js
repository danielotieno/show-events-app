import Head from 'next/head';
import EventList from '../components/events/EventList';
import { getFeaturedEvents } from '../data/data';

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <Head>
        <title>Welcome || Events Pages</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <EventList events={featuredEvents} />
    </div>
  );
}

export default HomePage;
