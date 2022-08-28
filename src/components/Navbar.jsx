import React, { useState } from 'react';
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { FaMoon, FaSun, FaUserFriends, FaWallet } from 'react-icons/fa';
import { MdFavorite, MdHelp } from 'react-icons/md';

export default function Navbar() {

    const [nav, setNav] = useState(false);

    return(
        <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 dark:bg-black">
            {/* Left side */}
            <div className="flex items-center">
                <div onClick={()=> setNav(!nav)} className="cursor-pointer">
                    <AiOutlineMenu size={30} className="mr-3 dark:text-white"/>
                </div>
                <h1 className="text-2xl sm:text-3xl dark:text-white">Chupap <span className="font-bold">Eat</span></h1>
                <div className="hidden lg:flex items-center bg-gray-200 dark:bg-gray-800 dark:text-white rounded-full ml-3 p-1 text-[14px]">
                    <p className="bg-black text-white dark:bg-white dark:text-black rounded-full p-2">Delivery</p>
                    <p className="p-2">Pick up</p>
                </div>
            </div>

            {/* Search Input */}
            <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
                <AiOutlineSearch size={20} />
                <input className="bg-transparent p-2 focus:outline-none" type="text" placeholder="Search foods" />
            </div>

            {/* Cart button */}
            <button className="bg-black text-white dark:bg-white dark:text-black hidden md:flex items-center py-2 rounded-full">
                <BsFillCartFill size={20} className="mr-2" /> Cart
            </button>

            {/* Mobile Menu */}
            {nav ? <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div> : ''}

            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white dark:bg-black z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
                <AiOutlineClose onClick={()=> setNav(!nav)} size={30} className="absolute right-4 top-4 cursor-pointer dark:text-white" />
                <h2 className="text-2xl p-4 dark:text-white">Chupap <span className="font-bold">Eat</span></h2>
                <nav>
                    <ul className="flex flex-col p-4 text-gray-800 dark:text-gray-200">
                        <li id="moon" className="moon text-xl py-4 flex cursor-pointer"><FaMoon size={25} className="mr-4" />Dark Mode</li>
                        <li id="sun" className="sun text-xl py-4 flex cursor-pointer"><FaSun size={25} className="mr-4" />Light Mode</li>
                        <hr />
                        <li className="text-xl py-4 flex"><TbTruckDelivery size={25} className="mr-4" />Orders</li>
                        <li className="text-xl py-4 flex"><MdFavorite size={25} className="mr-4" />Favorites</li>
                        <li className="text-xl py-4 flex"><FaWallet size={25} className="mr-4" />Wallet</li>
                        <li className="text-xl py-4 flex"><MdHelp size={25} className="mr-4" />Help</li>
                        <li className="text-xl py-4 flex"><AiFillTag size={25} className="mr-4" />Promotions</li>
                        <li className="text-xl py-4 flex"><BsFillSaveFill size={25} className="mr-4" />Best One</li>
                        <li className="text-xl py-4 flex"><FaUserFriends size={25} className="mr-4" />Invite Friends</li>
                    </ul>
                </nav>
            </div>

        </div>
    )
}