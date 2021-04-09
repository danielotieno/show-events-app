import React from 'react';
import Link from 'next/link';

function Nav() {
  return (
    <header className='bg-yellow-800'>
      <div className='container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row'>
        <Link href='/'>
          <a className='flex items-center mb-4 font-medium text-gray-900 title-font lg:w-1/2 md:mb-0'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              className='w-10 h-10 p-2 text-white bg-indigo-500 rounded-full'
              viewBox='0 0 24 24'>
              <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
            </svg>
            <span className='mt-2 ml-3 font-serif font-bold text-white lg:text-3xl '>
              Events Hub
            </span>
          </a>
        </Link>

        <div className='flex lg:justify-end lg:w-1/2 '>
          <Link href='/events'>
            <button className='inline-flex items-center px-6 py-2 mt-4 text-base font-bold text-black bg-white border-0 rounded focus:outline-none hover:bg-gray-200 md:mt-0'>
              Explore All Events
              <svg
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                className='w-4 h-4 ml-1'
                viewBox='0 0 24 24'>
                <path d='M5 12h14M12 5l7 7-7 7'></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Nav;
