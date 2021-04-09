import React from 'react';
import Link from 'next/link';
import HomeIcon from '../icons/HomeIcon';

function EventInfo({ title, description, location, date }) {
  return (
    <div class='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
      <h1 class='font-serif sm:text-4xl text-3xl mb-4 font-extrabold text-gray-900'>
        {title}
      </h1>
      <p class='mb-8 leading-relaxed text-base'>{description}</p>
      <p class='mb-8 leading-relaxed md:text-xl uppercase'>
        {' '}
        <span className='font-serif font-bold'>Location</span> : {location}
      </p>
      <p class='mb-8 leading-relaxed md:text-xl uppercase'>
        {' '}
        <span className='font-serif font-bold'>Date</span> : {date}
      </p>
      <div class='flex justify-center'>
        <Link href='/'>
          <button class='inline-flex text-white bg-yellow-900 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-700 rounded text-lg'>
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
