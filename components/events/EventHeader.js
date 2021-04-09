import React from 'react';

function EventHeader({ heading, headingParagraph }) {
  return (
    <div className='flex flex-wrap w-full mb-20'>
      <div className='w-full mb-6 lg:w-1/2 lg:mb-0'>
        <h1 className='mb-2 text-2xl font-medium text-gray-900 sm:text-3xl title-font'>
          {heading}
        </h1>
        <div className='w-20 h-1 bg-indigo-500 rounded'></div>
      </div>
      <p className='w-full leading-relaxed text-gray-500 lg:w-1/2'>
        {headingParagraph}
      </p>
    </div>
  );
}

export default EventHeader;
