import React from 'react'
import popcorn from '../Images/popcornbackgroundimage.jpg'
import TodayMenuCard from './TodayMenuCard'
const TodayMenu = () => {
    const imageBackground = {
        backgroundImage: `url(${popcorn})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'

    }
    return (
        <div style={imageBackground}>
            <div className="heading bg-red-800 bg-opacity-80 py-24">
                <h1 className='font-["great_vibes"] text-4xl text-white'>Most Popular</h1>
                <h1 className='font-serif uppercase text-4xl text-white'>Today's Menu</h1>
                <div className="Menu mt-14 mb-6">
                    <ul className='flex justify-center items-center space-x-5'>
                        <li className='border border-black font-serif  px-3 uppercase hover:bg-black hover:text-white hover:border-white cursor-pointer transition-all duration-500 text-lg'>All</li>
                        <li className='border border-black font-serif  px-3 uppercase hover:bg-black hover:text-white hover:border-white cursor-pointer transition-all duration-500 text-lg'>BreakFast</li>
                        <li className='border border-black font-serif  px-3 uppercase hover:bg-black hover:text-white hover:border-white cursor-pointer transition-all duration-500 text-lg'>Lunch</li>
                        <li className='border border-black font-serif  px-3 uppercase hover:bg-black hover:text-white hover:border-white cursor-pointer transition-all duration-500 text-lg'>Dinner</li>
                        <li className='border border-black font-serif  px-3 uppercase hover:bg-black hover:text-white hover:border-white cursor-pointer transition-all duration-500 text-lg'>Snacks</li>
                        <li className='border border-black font-serif  px-3 uppercase hover:bg-black hover:text-white hover:border-white cursor-pointer transition-all duration-500 text-lg'>Coffee</li>
                    </ul>
                </div>
                <div className="itemsComponent bg-white ml-48 mr-48 grid grid-cols-2 gap-9 py-9 px-16">
                    <TodayMenuCard />
                    <TodayMenuCard />
                    <TodayMenuCard />
                    <TodayMenuCard />
                </div>
            </div>
        </div>
    )
}

export default TodayMenu