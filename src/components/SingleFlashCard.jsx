import React from "react";
import Rating from "./Rating";
import { LuEye } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setCart, setWishlist } from "../redux/productSlice";
import { Bounce, toast } from "react-toastify";

const SingleFlashCard = ({
  image,
  title,
  newPrice,
  oldPrice,
  rating,
  reviews,
  id,
  productDetail
}) => {

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product-details/${id}`);
  };

  const handleCart = () => {
    if (!productDetail) {
      console.error("Product detail missing");
      return;
    }
    dispatch(setCart(productDetail));
     toast.success("Added to cart!", {
       position: "top-right",
       autoClose: 1000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: false,
       draggable: true,
       progress: undefined,
       theme: "light",
       transition: Bounce,
     });
  };

  const handleWish = () => {
    if (!productDetail) {
      console.error("Product detail missing");
      return;
    }
    dispatch(setWishlist(productDetail));
    toast.success("Added to wishlist!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };


  return (
    <div className="max-w-67.5 w-full flex flex-col overflow-hidden mt-10">
      <div className="relative group">
        <img
          src={image}
          alt="product"
          className="w-full object-contain cursor-pointer"
          onClick={handleClick}
        />

        {newPrice < oldPrice && (
          <span className="absolute top-1 left-2 bg-red-primary text-[#FAFAFA] px-3 py-1 rounded-md">
            {Math.round(((newPrice - oldPrice) / oldPrice) * 100)}%
          </span>
        )}

        <button className="text-xl p-1.25 absolute top-2 right-3 bg-white rounded-full cursor-pointer" onClick={handleWish}>
          <FaRegHeart />
        </button>

        <button className="text-xl p-1.25 absolute top-12 right-3 bg-white rounded-full">
          <LuEye />
        </button>
        {/* Cart */}
        <button
          onClick={handleCart}
          className="text-white cursor-pointer absolute bottom-5 left-0 w-full bg-black h-10.25 rounded-b-xl opacity-0 flex justify-center items-center group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300"
        >
          Add to Cart
        </button>
      </div>

      <div onClick={handleClick} className={"cursor-pointer"}>
        <h2>{title}</h2>

        <div className="flex gap-3">
          <p className="text-red-primary">${newPrice}</p>
          <p className="text-black/50 line-through">${oldPrice}</p>
        </div>

        <div className="flex gap-2 items-center">
          <Rating number={rating} />
          <span className="text-sm text-black/50">({reviews})</span>
        </div>
      </div>
    </div>
  );
};

export default SingleFlashCard;
