import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl mx-auto px-4 py-4 md:flex md:items-center md:justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
              <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">Diouma</span>
            </a>
          </div>
          <div className="hidden md:flex md:w-auto" id="navbar-search">
            <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0">
              <li>
                <Link to='/' className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
              </li>
              <li>
                <Link to='/' className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">About</Link>
              </li>
              <li>
                <Link to='/' className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">Services</Link>
              </li>
              <li>
                <Link to='../login' className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     
      <Outlet />
     
      
    </>
  );
}
