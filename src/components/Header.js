import React from 'react';
import Image from 'next/image';
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';
function Header() {
  return (
    <header>
      <div className='flex item-center bg-amazon_blue p-1 flex-grow py-2'>
        <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
          <Image
            src='http://links.papareact.com/f90'
            width={150}
            height={40}
            objectFit='contain'
            className='cursor-pointer'
          />
        </div>
        <div className='hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500'>
          <input
            className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4'
            type='text'
          />
          <SearchIcon className='h-12 p-4' />
        </div>

        {/* Right */}
        <div className='text-white flex items-center space-x-6 mx-6 whitespace-nowrap'>
          <div className='link'>
            <p>Hello Dilshod Shoolimkhon</p>
            <p className='bottom-link'>Account & Lists</p>
          </div>
          <div className='link'>
            <p>Returns</p>
            <p className='bottom-link'>& Orders</p>
          </div>
          <div className='relative link flex items-center'>
            <span className='absolute top-0 right-0 md:right-6 h-5 w-5 bg-yellow-400 text-center rounded-full text-black font-bold'>
              0
            </span>
            <ShoppingCartIcon className='h-10' />
            <p className='hidden md:inline bottom-link mt-2'>Cart</p>
          </div>
        </div>
      </div>

      {/* bottom nav */}
      <div className='flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm'>
        <p className='link flex items-center'>
          <MenuIcon className='h-6 mr-1' />
          All
        </p>
        <p className='link'>Today's Deals</p>
        <p className='link'>Customer Service</p>
        <p className='link'>Gift Cards</p>
        <p className='link hidden md:inline-flex'>Electronics</p>
        <p className='link hidden md:inline-flex'>Health & Beauty</p>
        <p className='link hidden md:inline-flex'>Closing</p>
        <p className='link hidden md:inline-flex'>Track Your Order</p>
      </div>
    </header>
  );
}

export default Header;