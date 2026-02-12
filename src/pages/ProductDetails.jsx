import React from 'react'
import gamepadSmall from '../assets/gamepadSmall.png'
import gamepadBig from '../assets/gamepadBig.png'
import { Rate } from 'antd'
import BreadCrumb from '../components/BreadCrumb'

const ProductDetails = () => {
  return (
    <>
        <div className='pt-20 pb-35 container'>
            <div className='mb-20'><BreadCrumb /></div>
            <div className=' flex gap-17.5'>
                <div className='flex gap-7.5'>
                    <div className='flex flex-col gap-4'>
                        <img src={gamepadSmall} alt="console" className='w-42.5'/>
                        <img src={gamepadSmall} alt="console" className='w-42.5'/>
                        <img src={gamepadSmall} alt="console" className='w-42.5'/>
                        <img src={gamepadSmall} alt="console" className='w-42.5'/>
                    </div>
                    <img src={gamepadBig} alt="console" className='w-125'/>
                </div>
                <div className='w-100'>
                    <h1 className='font-inter text-[24px] font-semibold mmb-4'>Havic HV G-92 Gamepad</h1>
                    <div className='flex gap-4 my-4'>
                        <div className='flex gap-2 pr-4 border-r border-r-black'>
                            <Rate allowHalf disabled defaultValue={3} />
                            <p className='text-[14px] text-black opacity-50'>(150 Reviews)</p>
                        </div>
                        <p className='text-[14px] text-[#00FF66]'>In Stock</p>
                    </div>
                    <p className='text-[14px] w-93.25 pb-6'>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                    <hr />
                    <div className='flex mt-5 gap-3'>
                        <h2>Colours:  </h2>
                        <input type="radio" name="Nothing" className='bg-[#A0BCE0]'/>
                        <input type="radio" name="Nothing" className='bg-red-900'/>
                        <input type="radio" name="Nothing" className='bg-green-400'/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductDetails