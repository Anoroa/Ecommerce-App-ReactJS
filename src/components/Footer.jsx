import React from 'react'
import FooterItem from './FooterItem'
import { LuSendHorizontal } from 'react-icons/lu';
import QrCode from '../assets/QRCODE.png'
import GooglePlay from '../assets/GooglePlay.png'
import AppStore from '../assets/AppStore.png'
import { BiLogoFacebook } from 'react-icons/bi';
import { CiTwitter } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';
import { RiLinkedinLine } from 'react-icons/ri';
import { PiCopyrightLight } from 'react-icons/pi';

const Footer = () => {
  return (
    <div className='w-full pt-20 pb-6.25 bg-black text-white'>
        <div className='container'>
            <div className='flex w-full justify-between items-center lg:items-start flex-col lg:flex-row gap-6'>
                <div>
                    <h1 className='font-inter font-bold text-[24px] mb-6'>Exclusive</h1>
                    <a className='font-medium text-[20px] mt-6'>Subscribe</a>
                    <p className='mt-6 mb-4'>Get 10% off your first order</p>
                    <div className='flex w-54.25 h-12 border border-white rounded-sm py-3 px-4 justify-between'>
                        <input type="text" placeholder='Enter Your Email' className='w-[70%] outline-0'/>
                        <LuSendHorizontal className='text-[24px] text-white'/>
                    </div>
                </div>
                <FooterItem
                    title='Support'
                    item1='111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.'
                    item2='exclusive@gmail.com'
                    item3='+88015-88888-9999'
                />
                <FooterItem
                    title='Account'
                    item1='My Account'
                    item2='Login / Register'
                    item3='Cart'
                    item4='Wishlist'
                    item5='Shop'
                />
                <FooterItem
                    title='Quick Links'
                    item1='Privacy Policy'
                    item2='Terms Of Use'
                    item3='FAQ'
                    item4='Contact'
                />
                <div>
                    <h2 className='font medium text-[20px] mb-6'>Download App</h2>
                    <p className='mb-2 font-medium text-[12px] opacity-70'>Save $3 with App New User Only</p>               
                    <div className="grid grid-cols-2 grid-rows-2 w-45 h-21 gap-1">
                        <div className="row-span-2"><img src={QrCode} alt="QR"/></div>
                        <div ><img src={GooglePlay} alt="LOGO" /></div>
                        <div className="col-start-2"><img src={AppStore} alt="LOGO" /></div>
                    </div>
                    <div className='flex gap-6 text-[24px] mt-6'>
                        <BiLogoFacebook />
                        <CiTwitter />
                        <FaInstagram />
                        <RiLinkedinLine />
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-0.5 opacity-25 mt-19 w-fit mx-auto'> <PiCopyrightLight className='text-[20px]' />Copyright Rimel 2022. All right reserved</div>
        </div>
    </div>
  )
}

export default Footer