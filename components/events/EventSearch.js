import React from 'react';

function EventSearch() {
  return (
    <form className='container px-8 py-16 mx-auto mt-10 bg-white rounded-lg shadow-md'>
      <div className='flex justify-center'>
        <div className='px-8'>
          <label className='px-5 font-semibold' htmlFor='year'>
            Year
          </label>
          <select id='year' className='py-2 rounded lg:pr-36'>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
          </select>
        </div>
        <div className='px-2 lg:px-8'>
          <label className='px-4 font-semibold ' htmlFor='month'>
            Month
          </label>
          <select id='month' className='py-2 rounded lg:pr-36'>
            <option value='1'>January</option>
            <option value='2'>February</option>
            <option value='3'>March</option>
            <option value='4'>April</option>
            <option value='5'>May</option>
            <option value='6'>June</option>
            <option value='7'>July</option>
            <option value='8'>August</option>
            <option value='9'>September</option>
            <option value='10'>October</option>s
            <option value='11'>November</option>
            <option value='12'>December</option>
          </select>
        </div>
        <button className='px-4 py-2 text-base text-white bg-yellow-900 border-0 rounded lg:text-lg lg:px-8 focus:outline-none hover:bg-yellow-700'>
          Find Events
        </button>
      </div>
    </form>
  );
}

export default EventSearch;
