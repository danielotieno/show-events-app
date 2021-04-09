import React from 'react';
import Image from 'next/image';

function EventImage({ image }) {
  return (
    <div className='w-5/6 lg:max-w-lg lg:w-full md:w-1/2'>
      <Image
        width={400}
        height={500}
        class='object-cover object-center rounded'
        alt='hero'
        src={`/${image}`}
      />
    </div>
  );
}

export default EventImage;
