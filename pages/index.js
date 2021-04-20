import Head from 'next/head';
import EventList from '../components/events/EventList';

function HomePage({ featuredEvents }) {
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

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:1337/events?isFeatured_eq=true`);

  const featuredEvents = await res.json();

  return {
    props: {
      featuredEvents,
    },
    revalidate: 1800,
  };
};

export default HomePage;
