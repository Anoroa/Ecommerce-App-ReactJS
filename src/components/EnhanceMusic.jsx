import React from 'react'
import MusicCounter from './MusicCounter'
import JBLBackground from '../assets/JBLBackground.png'

const EnhanceMusic = () => {
    return (
        <>
            <div className="container mt-35">
                <div className='px-14 py-17.5 hidden lg:block' style={{
                    backgroundImage:`url(${JBLBackground})`
                }}>
                    <div>
                        <div>
                            <h1 className='font-semibold text-[16px] text-[#00FF66]'>Categories</h1>
                            <h2 className='w-110.75 font-inter font-semibold text-[49px] mt-8 text-white'>Enhance Your Music Experience</h2>
                        </div>
                        <MusicCounter/>
                        <button className='py-4 px-12 bg-[#00FF66] font-medium text-white rounded-sm'>Buy Now!</button>
                    </div>
                </div>
                <div className='lg:px-14 lg:py-17.5 p-6 bg-black lg:hidden block'>
                    <div>
                        <div>
                            <h1 className='font-semibold text-[16px] text-[#00FF66]'>Categories</h1>
                            <h2 className='lg:w-110.75 font-inter font-semibold text-[29px] lg:text-[49px] mt-8 text-white'>Enhance Your Music Experience</h2>
                        </div>
                        <MusicCounter/>
                        <button className='py-4 px-12 bg-[#00FF66] font-medium text-white rounded-sm'>Buy Now!</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EnhanceMusic