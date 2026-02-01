import React from 'react'
import CommonHead from './CommonHead'
import CategorySlider from './CategorySlider'

const BrowseCategory = () => {
  return (
    <div className='pt-35 container'>
      <CommonHead header={"Categories"} content={"Browse By Category"}/>
      <CategorySlider />
    </div>
  )
}

export default BrowseCategory