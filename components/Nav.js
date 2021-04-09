import React from 'react';
import Link from 'next/link';

function Nav() {
  return (
    <header className='bg-yellow-800'>
      <div className='container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row'>
        <Link href='/'>
          <a className='flex items-center mb-4 font-medium text-gray-900 title-font lg:w-1/2 md:mb-0'>
            <h1 className='mt-3 ml-3 font-serif text-3xl font-bold text-white '>
              JS Bits Events
            </h1>
          </a>
        </Link>

        <div className='flex mt-1 lg:justify-end lg:w-1/2 '>
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
