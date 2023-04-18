import React from 'react'
import chicken from '../Images/chickenicon.webp'
const TodayMenuCard = () => {
    return (
        <div className='flex border border-red-900'>
            <img src={chicken} alt="" />
            <div className="vegitableContainer flex flex-col justify-center p-5">
                <div className="vegitableFlavour flex">
                    <h1 className='me-auto font-serif uppercase'>Vegitable Flavour</h1>
                    <h1 className='font-serif uppercase'>$32</h1>
                </div>
                <p className='my-4 self-start'>
                    Lorem ipsum, dolor sit amet consectetur.
                </p>
                <div className="addtoCartStar flex">
                    <a href="" className='me-auto font-serif border border-red-900 py-2 px-4 hover:border-white hover:text-white hover:bg-red-900 transition-all duration-300'>Add To Cart</a>
                    <p>Star</p>
                </div>
            </div>
        </div>
    )
}

export default TodayMenuCard