import React from 'react'
import images from '../Images/restaurantlogo.webp'
const Navbar = () => {
    return (
        < div className=' flex flex-row justify-around items-center bg-black bg-opacity-80 py-6'>
            <img src={images} className='mx-14' alt="" />
            <ul className='flex text-white space-x-6 '>
                <li></li>
                <li className=' font-serif hover:text-red-900 ease-in-out duration-300 transition-colors cursor-pointer uppercase'>Home</li>
                <li className=' font-serif hover:text-red-900 ease-in-out duration-300 transition-colors cursor-pointer uppercase'>About Us</li>
                <li className=' font-serif hover:text-red-900 ease-in-out duration-300 transition-colors cursor-pointer uppercase'>Menu</li>
                <li className=' font-serif hover:text-red-900 ease-in-out duration-300 transition-colors cursor-pointer uppercase'>Gallery</li>
                <li className=' font-serif hover:text-red-900 ease-in-out duration-300 transition-colors cursor-pointer uppercase'>Pages</li>
                <li className=' font-serif hover:text-red-900 ease-in-out duration-300 transition-colors cursor-pointer uppercase'>News</li>
                <li className=' font-serif hover:text-red-900 ease-in-out duration-300 transition-colors cursor-pointer uppercase'>Contact US</li>
            </ul>
        </div>
    )
}

export default Navbar