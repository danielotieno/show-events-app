import React from 'react';
import Link from 'next/link';
import HomeIcon from '../icons/HomeIcon';

function EventInfo({ title, description, location, date }) {
  return (
    <div className='flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0'>
      <h1 className='mb-4 font-serif text-3xl font-extrabold text-gray-900 sm:text-4xl'>
        {title}
      </h1>
      <p className='mb-8 text-base leading-relaxed'>{description}</p>
      <p className='mb-8 leading-relaxed uppercase md:text-xl'>
        {' '}
        <span className='font-serif font-bold'>Location</span> : {location}
      </p>
      <p className='mb-8 leading-relaxed uppercase md:text-xl'>
        {' '}
        <span className='font-serif font-bold'>Date</span> : {date}
      </p>
      <div className='flex justify-center'>
        <Link href='/'>
          <button className='inline-flex px-6 py-2 text-lg text-white bg-yellow-900 border-0 rounded focus:outline-none hover:bg-yellow-700'>
            <span>Back Home</span>{' '}
            <span className='mx-2'>
              <HomeIcon />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default EventInfo;
