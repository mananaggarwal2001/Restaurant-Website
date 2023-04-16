import React from 'react'
import Hamburger from '../Images/Hamburger.webp'
const Card = (props) => {
    const { imageName, name, price } = props;
    return (
        <div className='parentContainer  justify-center'>
            <img src={imageName} className='rounded-md ' />
            <div className=' bg-red-900 py-4 flex  rounded-md px-7'>
                <h1 className=' text-white uppercase font-serif me-32'>{name}</h1>
                <h1 className=' text-white uppercase font-serif'>${ price}</h1>
            </div>
            <div className="coverContainer flex rounded-lg">
            </div>
        </div>
    )
}

export default Card