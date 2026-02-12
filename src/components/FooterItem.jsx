import React from 'react'

const FooterItem = ({title, item1, item2, item3, item4, item5}) => {
  return (
    <div className='w-43.75'>
        <h2 className='font-medium text-[20px]'>{title}</h2>
        <div className=' flex mt-6 flex-col gap-4'>
            <a>{item1}</a>
            <a>{item2}</a>
            <a>{item3}</a>
            <a>{item4}</a>
            <a>{item5}</a>
        </div>
    </div>
  )
}

export default FooterItem;