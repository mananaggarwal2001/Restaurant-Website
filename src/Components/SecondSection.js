import React from 'react'
import icon1 from '../Images/icon 1.webp'
import coffee from '../Images/coffee.webp'
import burger from '../Images/burgers.webp'
import drinks from '../Images/drinks.webp'
const SecondSection = () => {
    return (
        <div className='py-20'>
            <div className="container flex justify-center p-14 md:px-24 md:flex-row flex-col space-x-10 space-y-14">
                <div>

                </div>
                <div className="icon flex flex-col border-[2px] border-red-900 md:w-1/4 relative px-8">
                    <img src={icon1} className='w-[100px] m-auto absolute top-[-55px] left-0 right-0 overflow-clip' alt="" />
                    <h1 className='my-4 mt-20 font-serif text-red-900 uppercase text-2xl'>Pizzas</h1>
                    <h1 className='font-thin center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus iste fugit rem vero, vel error dignissimos adipisci sequi suscipit animi velit quas dolor?</h1>
                    <button className="btn my-7 border-[2px] border-red-900 w-max mx-auto text-sm font-serif uppercase py-2 px-4 hover:bg-red-900 hover:text-white transition-all duration-150">Read More</button>
                </div>
                <div className="icon flex flex-col border-[2px] border-red-900 md:w-1/4 relative px-8">
                    <img src={coffee} className='w-[100px] m-auto absolute top-[-55px] left-0 right-0 overflow-clip' alt="" />
                    <h1 className='my-4 mt-20 font-serif text-red-900 uppercase text-2xl'>coffee</h1>
                    <h1 className='font-thin center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus iste fugit rem vero, vel error dignissimos adipisci sequi suscipit animi velit quas dolor?</h1>
                    <button className="btn my-7 border-[2px] border-red-900 w-max mx-auto text-sm font-serif uppercase py-2 px-4 hover:bg-red-900 hover:text-white transition-all duration-150">Read More</button>
                </div>
                <div className="icon flex flex-col border-[2px] border-red-900 md:w-1/4 relative px-8">
                    <img src={burger} className='w-[100px] m-auto absolute top-[-55px] left-0 right-0 overflow-clip' alt="" />
                    <h1 className='my-4 mt-20 font-serif text-red-900 uppercase text-2xl'>Burgers</h1>
                    <h1 className='font-thin center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus iste fugit rem vero, vel error dignissimos adipisci sequi suscipit animi velit quas dolor?</h1>
                    <button className="btn my-7 border-[2px] border-red-900 w-max mx-auto text-sm font-serif uppercase py-2 px-4 hover:bg-red-900 hover:text-white transition-all duration-150">Read More</button>
                </div>
                <div className="icon flex flex-col border-[2px] border-red-900 md:w-1/4 relative px-8">
                    <img src={drinks} className='w-[100px] m-auto absolute top-[-55px] left-0 right-0 overflow-clip' alt="" />
                    <h1 className='my-4 mt-20 font-serif text-red-900 uppercase text-2xl'>drinks</h1>
                    <h1 className='font-thin center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus iste fugit rem vero, vel error dignissimos adipisci sequi suscipit animi velit quas dolor?</h1>
                    <button className="btn my-7 border-[2px] border-red-900 w-max mx-auto text-sm font-serif uppercase py-2 px-4 hover:bg-red-900 hover:text-white transition-all duration-150">Read More</button>
                </div>
            </div>
        </div>
    )
}

export default SecondSection