import { Book, MapPin, Moon } from '@phosphor-icons/react';
import React from 'react';

const Home = () => {
  return (
    <div className='w-full h-fit sm:h-screen pt-10   m-auto p-10 dark:bg-neutral-800'>
      <div className=' bg-gray-200 rounded m-auto p-10 dark:text-white dark:bg-neutral-600'>
        <h1 className='font-bold text-2xl mb-7'>WELCOME TO THE SCHOOL FACILITIES COMPLAINT PLATFORM</h1>
        <p className='font-lg'>
          This platform allows you to submit your complaints online.
          You can submit a new complaint or track an already submitted complaint regarding any issues with the school facilities.
        </p>
      </div>
      <div className='grid sm:grid-cols-2 gap-4'>
        <a
          className="w-full p-10 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-gray-200 mt-10 dark:text-white dark:bg-neutral-600"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
          <Book className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-blue-400 group-hover:rotate-12 transition-transform duration-300" />
          <Book className="mb-2 text-2xl text-blue-600 group-hover:text-white transition-colors relative z-10 duration-300" />
          <h3 className="font-bold text-2xl mb-7 relative z-10 group-hover:text-white duration-300">
          SUBMIT A COMPLAINT
          </h3>
          <p className="font-lg text-slate-400 group-hover:text-blue-200 relative z-10 duration-300">
          To submit a new complaint, click the button below.
          </p>
        </a>
        <a
          className="w-full p-10 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-gray-200 mt-10 dark:text-white dark:bg-neutral-600"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
          <MapPin className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-blue-400 group-hover:rotate-12 transition-transform duration-300" />
          <MapPin className="mb-2 text-2xl text-blue-600 group-hover:text-white transition-colors relative z-10 duration-300" />
          <h3 className="font-bold text-2xl mb-7 relative z-10 group-hover:text-white duration-300">
          TRACK A COMPLAINT

          </h3>
          <p className="font-lg text-slate-400 group-hover:text-blue-200 relative z-10 duration-300">
          To track an existing complaint, click the button below.
          </p>
        </a>
        
      </div>
    </div>
  );
};

export default Home;
