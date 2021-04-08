import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function EventItem({ event }) {
  const { id, image, title, location, date } = event;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress = location.replace(', ', '\n');

  const singleEventLink = `/events/${id}`;

  return (
    <div class='w-1/2 mb-10 px-4'>
      <div class='rounded-lg h-64 overflow-hidden'>
        <Image
          width={500}
          height={350}
          alt={title}
          class='object-cover rounded object-center h-full w-full'
          src={`/${image}`}
        />
      </div>
      <h2 class='title-font text-2xl font-medium text-gray-900 mt-6 mb-3'>
        {title}
      </h2>
      <h2 class='title-font text-base font-medium text-gray-900 mt-6 mb-3'>
        {humanReadableDate}
      </h2>

      <p class='leading-relaxed italic text-lg'>{formattedAddress}</p>
      <Link href={singleEventLink}>
        <button class='flex mx-auto mt-6 font-bold text-white bg-yellow-900 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded'>
          Explore Event &#8594;
        </button>
      </Link>
    </div>
  );
}

export default EventItem;
