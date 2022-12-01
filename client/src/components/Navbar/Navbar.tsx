import React from "react";
import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className='bg-slate-100 m-0 p-4 shadow-md items-center justify-center'>
      <div className='flex justify-between subpixel-antialiased items-center'>
        <div className='flex items-center space-x-2'>
          <div className='p-2 border-2 border-blue-900 rounded-md cursor-pointer lg:hidden'>
            <AiOutlineMenu color='blue-900' />
          </div>
          <h3 className='text-xl font-bold cursor-pointer'>Ecommerce</h3>
        </div>
        <div className='flex space-x-6  items-center justify-center'>
          <ul className='space-x-6 font-sans font-medium items-center hidden lg:flex'>
            <li className='cursor-pointer hover:border-b-2 hover:border-blue-900 hover:ease-out duration-300'>
              Home
            </li>
            <li className='cursor-pointer hover:border-b-2 hover:border-blue-900 hover:ease-out duration-300'>
              Products
            </li>
            <li className='cursor-pointer hover:border-b-2 hover:border-blue-900 hover:ease-out duration-300'>
              Contact
            </li>
            <li className='cursor-pointer hover:border-b-2 hover:border-blue-900 hover:ease-out duration-300'>
              About
            </li>
          </ul>
          <button className='rounded-md bg-blue-800 text-white p-2 hover:bg-blue-900'>
            <Link to='/auth'>Login</Link>
          </button>
          <div className='relative'>
            <p className='absolute -top-4 -right-2 bg-blue-900 text-white rounded-full p-1 text-xs'>
              0
            </p>
            <AiOutlineShoppingCart fontSize={20} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
