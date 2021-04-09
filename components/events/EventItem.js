import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DateIcon from '../icons/DateIcon';
import LocationIcon from '../icons/LocationIcon';
import ArrowRight from '../icons/ArrowRight';

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
    <div className='w-1/2 px-4 mb-10'>
      <div className='h-64 overflow-hidden rounded-lg'>
        <Image
          width={500}
          height={350}
          alt={title}
          className='object-cover object-center w-full h-full rounded'
          src={`/${image}`}
        />
      </div>
      <h2 className='mt-6 mb-3 font-serif text-2xl font-medium text-gray-900 title-font'>
        {title}
      </h2>

      <p className='text-lg italic leading-relaxed text-gray-900'>
        <LocationIcon />
        {formattedAddress}
      </p>

      <h2 className='mt-6 mb-3 font-serif text-base font-medium text-gray-900'>
        <DateIcon />
        {humanReadableDate}
      </h2>

      <Link href={singleEventLink}>
        <button className='flex px-6 py-2 mx-auto mt-6 font-bold text-white bg-yellow-900 border-0 rounded focus:outline-none hover:bg-yellow-600'>
          <span>Explore Event</span>{' '}
          <span className='ml-2'>
            {' '}
            <ArrowRight />{' '}
          </span>
        </button>
      </Link>
    </div>
  );
}

export default EventItem;
