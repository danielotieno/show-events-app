import React from 'react';

function Register() {
  return (
    <div>
      <form className='flex justify-center m-4 mt-10'>
        <input
          className='px-4 py-2 text-gray-800 bg-white border-t border-b border-l border-gray-200 rounded-md '
          placeholder='your@mail.com'
        />
        <button className='px-4 py-2 font-bold text-white uppercase bg-yellow-800 border-t border-b border-r border-yellow-900 rounded-md'>
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
