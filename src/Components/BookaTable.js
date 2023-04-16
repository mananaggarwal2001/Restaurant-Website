import React from 'react'
import bookatableImage from '../Images/bookaTableImage.jpg'
const BookaTable = () => {
    const imageStyle = {
        backgroundImage: `url(${bookatableImage})`,
        backgroundSize: 'cover',
        zIndex: '-100',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center'

    }
    return (
        <div style={imageStyle} className=' text-white   ' >
            <div className='bg-black w-full h-full bg-opacity-70 py-16 '>
                <h1 className='text-5xl font-["Great_Vibes"] mb-7'>Book a</h1>
                <h1 className='text-4xl uppercase font-serif mb-8'>Table</h1>
                <h1 className='uppercase text-sm mb-16'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga deserunt provident aspernatur!</h1>
                <form className='my-13 space-x-4' action="">
                    <input type="number"  className='py-2 px-2 rounded-md' placeholder='Date' />
                    <input type="number" className='py-2 px-2 rounded-md' placeholder='Dining Time' />
                    <input type="number" className='py-2 px-2 rounded-md' placeholder='Pary Size' />
                    <button className="btn uppercase bg-red-900 text-white font-bold py-2 px-14 border border-red-900 rounded-md hover:bg-inherit hover:border hover:border-white transition-all duration-500">Book My table</button>
                </form>
            </div>
        </div>
    )
}

export default BookaTable