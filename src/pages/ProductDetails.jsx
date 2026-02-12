import React, { useEffect, useState } from 'react'
import gamepadSmall from '../assets/gamepadSmall.png'
import gamepadBig from '../assets/gamepadBig.png'
import { Rate } from 'antd'
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import BreadCrumb from "../components/BreadCrumb.jsx";

const ProductDetails = () => {
    const [productData, setProductData] = useState([])
    const [buffer, setBuffer] = useState(false)
    const [categories, setCategories] = useState([])
    const [pageNumber, setPageNumber] = useState(6)
    const [images, setImages] = useState([])
    const [rating, setRating] = useState(1)
    const [reviewNumber, setReviewNumber] = useState([])

    const dispatch = useDispatch()
    let params = useParams()
    let id = params.id
    async function apiFetch(){
        await axios.get(`https://dummyjson.com/products/${id}`)
            .then((product)=>{setProductData(product.data);
                setBuffer(true)
                setImages(product.data.images)
                setRating(product.data.rating)
                setReviewNumber(product.data.reviews)
            })
    }
    useEffect(()=>{
        apiFetch()
    }, [])
    console.log(productData);
    return (
        <>
            <div className='container pt-20 pb-35'>
                <div>
                    <BreadCrumb />
                </div>
                <div className='flex gap-10'>
                    <div className='flex gap-7.5'>
                        <div className='flex flex-col gap-6'>
                            {
                                buffer ?
                                    images.map((item, idx)=>{
                                        return (
                                            <img key={idx} src={item} alt="console" className='w-42.5 h-46'/>
                                        )
                                    })
                                    :
                                    <>

                                    </>
                            }

                        </div>
                        {
                            buffer ?
                                <img src={productData.thumbnail} alt="console" className='w-125 h-150'/>
                                :
                                <></>
                        }
                    </div>
                    <div className='w-100'>
                        <h1 className='font-inter text-[24px] font-semibold mmb-4'>{productData.title}</h1>
                        <div className='flex gap-4 my-4'>
                            <div className='flex gap-2 pr-4 border-r border-r-black'>
                                <Rate allowHalf disabled value={rating} />
                                <p className='text-[14px] text-black opacity-50'>({reviewNumber.length} Reviews)</p>
                            </div>
                            <p className='text-[14px] text-[#00FF66]'>{productData.availabilityStatus}</p>
                        </div>
                        <p className='text-[14px] w-93.25 pb-6'>{productData.description}</p>
                        <hr />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails