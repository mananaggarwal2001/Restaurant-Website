import React from 'react'
import Card from './Card'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import grilledChicken from '../Images/Grilled chicken.webp'
import Hamburger from '../Images/Hamburger.webp'
const Table = () => {
    let count = 0;
    const scrollRight = () => {
        document.getElementById('content').scrollLeft += 300;
        count += 300;
    }
    const scrollLeft = () => {
        document.getElementById('content').scrollLeft -= 300;
        count -= 300;
        console.log(count)
    }
    return (
        <div className='py-24 flex flex-col items-center justify-center'>
            <h1 className='font-["Great_vibes"] text-4xl text-red-900'>Book a</h1>
            <h1 className='text-4xl uppercase font-serif'>Table</h1>
            <div className="carosoulContainer w-4/6 items-center relative ">
                <div className='flex absolute  my-auto  left-0 right-0 bottom-[45.3%] z-50 -mx-4'>
                    <button onClick={scrollLeft} className='text-4xl   me-auto border-[2px] border-black rounded-full cursor-pointer hover:bg-gray-300 '><FiChevronLeft /></button>
                    <button onClick={scrollRight} className='text-4xl  border-[2px] border-black rounded-full cursor-pointer hover:bg-gray-300 '><FiChevronRight /></button>
                </div>
                <div id='content' className="tableCard  inline-flex justify-center flex-row space-x-6 my-8 overflow-x-auto relative w-11/12 scrollbar-hide scroll-smooth transition-all duration-300">
                        <Card imageName={grilledChicken} name="griled Chicken" price='30' />
                        <Card imageName={grilledChicken} name="griled Chicken" price='30' />
                        <Card imageName={grilledChicken} name="griled Chicken" price='30' />
                        <Card imageName={grilledChicken} name="griled Chicken" price='30' />
                        <Card imageName={grilledChicken} name="griled Chicken" price='30' />
                        <Card imageName={grilledChicken} name="griled Chicken" price='30' />
                        <Card imageName={Hamburger} name="hamburger" price='20' />
                        <Card imageName={Hamburger} name="hamburger" price='20' />
                        <Card imageName={Hamburger} name="hamburger" price='20' />
                        <Card imageName={Hamburger} name="hamburger" price='20' />
                        <Card imageName={Hamburger} name="hamburger" price='20' />
                
                </div>
            </div>
        </div>
    )
}

export default Table