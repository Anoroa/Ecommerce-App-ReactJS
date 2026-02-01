import React, { useEffect, useState } from 'react'
import { countDownDateAndTime } from 'countdown-date-time';

const MusicCounter = () => {

    const conduct_date = '2026-02-18 16:54:00';

    const [time, setTime] = useState({})

    useEffect(()=>{
        setInterval(()=>{
            const countDown = countDownDateAndTime(conduct_date);
            setTime(countDown)
        }, 1000)
    }, [])

    return (
        <>
            <div className='flex gap-x-6 mt-8 mb-10 w-full'>
                <div className='flex lg:w-15.5 lg:h-15.5 w-14 h-14 bg-white rounded-full items-center justify-center'>
                    <div>
                        <h2 className='font-semibold lg:text-[16px] text-[13px] text-center'>{time.days}</h2>
                        <h1 className='text-[11px] text-center'>Days</h1>
                    </div>
                </div>
                <div className='flex lg:w-15.5 lg:h-15.5 w-14 h-14 bg-white rounded-full items-center justify-center'>
                    <div>
                        <h1 className='font-semibold lg:text-[16px] text-[13px] text-center'>{time.hours}</h1>
                        <h2 className='text-[11px] text-center'>Hours</h2>
                    </div>
                </div>
                <div className='flex lg:w-15.5 lg:h-15.5 w-14 h-14 bg-white rounded-full items-center justify-center'>
                    <div>
                        <h2 className='font-semibold lg:text-[16px] text-[13px] text-center'>{time.minutes}</h2>
                        <h1 className='text-[11px] text-center'>Minutes</h1>
                    </div>
                </div>
                <div className='flex lg:w-15.5 lg:h-15.5 w-14 h-14 bg-white rounded-full items-center justify-center'>
                    <div>
                        <h2 className='font-semibold lg:text-[16px] text-[13px] text-center'>{time.seconds}</h2>
                        <h1 className='text-[11px] text-center'>Seconds</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MusicCounter