import React from 'react'

const CoverPage = () => {
    return (
        <div className='flex justify-center py-14'>
            <div className="container p-3 w-max bg-white bg-opacity-50 space-y-4 ">
                <div className="con p-16 border-[3px] border-red-900">

                    <h1 className='font-serif text-4xl mb-7'>Welcome to Our</h1>
                    <h1 className="font-['Great_Vibes'] text-5xl text-red-900  mb-7"> Red Cayanne</h1>
                    <h1 className='text-4xl uppercase font-serif  mb-14'>A Premium Restaurant Theme</h1>
                    <button className="btn bg-red-800 border-[2.2px] border-red-900 text-white py-3 px-5 font-bold uppercase hover:bg-inherit hover:border-red-900 hover:border-[2.2px] hover:text-red-900 transition-all duration-200">Look Menu</button>
                </div>
            </div>
        </div>
    )
}

export default CoverPage