import React from 'react'
import CommonHead from './CommonHead.jsx'
import SingleFlashCard from './SingleFlashCard.jsx'
import products1 from '../assets/chair.png'
import products2 from '../assets/keyboard.png'
import products3 from '../assets/monitor.png'
import products4 from '../assets/controller.png'
import Slider from 'react-slick'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import CommonButton from './CommonButton'

const OurProducts = () => {

    function SampleNextArrow(props) {
        const {onClick } = props;
        return (
            <div
                className='w-11.5 h-11.5 absolute -top-20 right-5.5 bg-[#F5F5F5] rounded-full lg:flex justify-center items-center hidden'
                onClick={onClick}
            ><FaArrowRight className="text-[24px]" /></div>
        );
    }

    function SamplePrevArrow(props) {
        const {onClick } = props;
        return (
            <div
                className='w-11.5 h-11.5 absolute -top-20 right-20.5 bg-[#F5F5F5] rounded-full lg:flex justify-center items-center hidden'
                onClick={onClick}
            ><FaArrowLeft className="text-[24px]" /></div>
        );
    }
    let settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        // eslint-disable-next-line react-hooks/static-components
        nextArrow: <SampleNextArrow />,
        // eslint-disable-next-line react-hooks/static-components
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <div className=' container mt-17.5 lg:mb-42 mb-7'>
                <CommonHead
                    header='Our Products'
                    content='Explore Our Products'
                />
                <div className='slider-container mt-15'>
                    <Slider {...settings}>
                        <div className={"flex"}>
                            <SingleFlashCard
                                image={products1}
                                title='Bread Dry Dog Food'
                                newPrice='100'
                                oldPrice='120'
                                rating='3'
                                reviews={32}
                                className='mt-15'
                            />
                            <SingleFlashCard
                                image={products3}
                                title='Montir'
                                newPrice='100'
                                oldPrice='120'
                                rating='3'
                                reviews={32}
                                className='mt-15'
                            />
                        </div>
                        <div>
                            <SingleFlashCard
                                image={products4}
                                title='Cat'
                                newPrice='100'
                                oldPrice='120'
                                rating='3'
                                reviews={32}
                                className='mt-15'
                            />
                            <SingleFlashCard
                                image={products2}
                                title='Phone'
                                newPrice='100'
                                oldPrice='120'
                                rating='3'
                                reviews={32}
                                className='mt-15'
                            />
                        </div>
                        <div>
                            <SingleFlashCard
                                image={products3}
                                title='Dog'
                                newPrice='100'
                                oldPrice='120'
                                rating='3'
                                reviews={32}
                                className='mt-15'
                            />
                            <SingleFlashCard
                                image={products1}
                                title='Bread Dry Dog Food'
                                newPrice='100'
                                oldPrice='120'
                                rating='3'
                                reviews={32}
                                className='mt-15'
                            />
                        </div>
                        <div>
                            <SingleFlashCard
                                image={products2}
                                title='Controller'
                                newPrice='100'
                                oldPrice='120'
                                rating='3'
                                reviews={32}
                                className='mt-15'
                            />
                            <SingleFlashCard
                                image={products1}
                                title='Bread Dry'
                                newPrice='100'
                                oldPrice='120'
                                rating='3'
                                reviews={32}
                                className='mt-15'
                            />
                        </div>
                        <div>
                            <SingleFlashCard
                                image={products4}
                                title=' Food'
                                newPrice='100'
                                oldPrice='120'
                                rating='3'
                                reviews={32}
                                className='mt-15'
                            />
                            <SingleFlashCard
                                image={products3}
                                title='CHir'
                                newPrice='100'
                                oldPrice='120'
                                rating='3'
                                reviews={32}
                                className='mt-15'
                            />
                        </div>
                    </Slider>
                </div>
                <div className='text-center'>
                    <CommonButton
                        name='View All Products'
                        className='text-center mt-15'
                    />
                </div>

            </div>
        </>
    )
}

export default OurProducts