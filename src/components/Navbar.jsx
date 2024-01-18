import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ deletedboxhandler,showdoneboxHandler,deletecount,upcomingcount}) {
  return (
    <nav className='justify-between flex px-4 py-3 bg-slate-400 space-x-4'>
      <div className='flex space-x-4'>
        <ul className='px-1 py-1 hover:bg-green-300 rounded-lg'>
          <button onClick={() =>{ 
            deletedboxhandler(false)
            showdoneboxHandler(false)
        }}>Home</button>
        </ul>
        <ul className='px-1 py-1 hover:bg-green-400 rounded-lg'>
        <button onClick={() =>{ 
            deletedboxhandler(true)
            showdoneboxHandler(false)
        }}>Recyclebin</button> 
        </ul>
        <ul className='px-1 py-1 hover:bg-green-400 rounded-lg'>
        <button onClick={() =>{ 
            deletedboxhandler(false)
            showdoneboxHandler(true)
        }}>Done</button>
        </ul>
      </div>
      <div className='flex space-x-2'>
        <p className='cursor-pointer'>deleted: {deletecount}</p>
        <p className='cursor-pointer'>upcoming: {upcomingcount}</p>
      </div>
    </nav>
  );
}
