import React from 'react'
import SingleFlashCard from './SingleFlashCard'
import img1 from "../assets/chair.png"
import CommonHead from './CommonHead'

const OurProducts = () => {
  return (
    <div className='container pt-20'>
        <CommonHead header={"Most Popular"} content={"Best selling"} />
        <div className='grid grid-cols-3 grid-rows-3 gap-3 pb-20'>
            <SingleFlashCard image={img1} title={"Eco-friendly Wood Veneer"} newPrice={300} oldPrice={400} reviews={300} rating={3} />
            <SingleFlashCard image={img1} title={"Eco-friendly Wood Veneer"} newPrice={300} oldPrice={400} reviews={300} rating={3} />
            <SingleFlashCard image={img1} title={"Eco-friendly Wood Veneer"} newPrice={300} oldPrice={400} reviews={300} rating={3} />
            <SingleFlashCard image={img1} title={"Eco-friendly Wood Veneer"} newPrice={300} oldPrice={400} reviews={300} rating={3} />
            <SingleFlashCard image={img1} title={"Eco-friendly Wood Veneer"} newPrice={300} oldPrice={400} reviews={300} rating={3} />
            <SingleFlashCard image={img1} title={"Eco-friendly Wood Veneer"} newPrice={300} oldPrice={400} reviews={300} rating={3} />
            <SingleFlashCard image={img1} title={"Eco-friendly Wood Veneer"} newPrice={300} oldPrice={400} reviews={300} rating={3} />
            <SingleFlashCard image={img1} title={"Eco-friendly Wood Veneer"} newPrice={300} oldPrice={400} reviews={300} rating={3} />
            <SingleFlashCard image={img1} title={"Eco-friendly Wood Veneer"} newPrice={300} oldPrice={400} reviews={300} rating={3} />
        </div>
    </div>
  )
}

export default OurProducts;