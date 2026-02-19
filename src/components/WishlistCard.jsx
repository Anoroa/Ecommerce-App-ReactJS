import React from "react";
import { IoTrashOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setCart, removeWishlist } from "../redux/productSlice";

const WishlistCard = ({ product }) => {
  const dispatch = useDispatch();

  const { id, thumbnail, title, price, discountPercentage } = product;

  const newPrice = Math.round(price - (price * discountPercentage) / 100);

  const handleRemove = () => {
    dispatch(removeWishlist(id));
  };

  const handleAddToCart = () => {
    dispatch(setCart(product));
    dispatch(removeWishlist(id));
  };

  return (
    <div className="max-w-67.5 w-full flex flex-col overflow-hidden mt-10">
      <div className="relative group">
        <img src={thumbnail} alt={title} className="w-full object-contain" />

        <button
          onClick={handleRemove}
          className="absolute top-2 right-3 text-2xl cursor-pointer"
        >
          <IoTrashOutline />
        </button>

        <button
          onClick={handleAddToCart}
          className="text-white absolute bottom-0 left-0 w-full bg-black h-10 opacity-0 group-hover:opacity-100 transition-all"
        >
          Add to Cart
        </button>
      </div>

      <h2 className="mt-2">{title}</h2>
      <p className="text-red-primary">${newPrice}</p>
    </div>
  );
};

export default WishlistCard;
