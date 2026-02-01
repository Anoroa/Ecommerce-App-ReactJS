import React from 'react'

const CommonButton = ({name, className}) => {
    return (
        <button className={`text-white text-[16px] font-medium bg-red px-12 py-3 rounded-sm w-fit ${className}`}>{name}</button>
    )
}

export default CommonButton