import React from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import WishlistCard from "../components/WishlistCard";
import CommonHead from "../components/CommonHead";
import SingleFlashCard from "../components/SingleFlashCard";
import chair from "../assets/chair.png"

const Wishlist = () => {
  const navigate = useNavigate();
  const wishlist = useSelector((state) => state.products.wishList);

  const wishlistNum = wishlist.length;

  const handleNav = () => {
    navigate("/cart");
  };

  const arr = [1, 2, 3, 4];

  return (
    <section id="wishlist" className="mt-20 pb-35">
      <div className="container">
        <div className="wishlist-header flex justify-between items-center">
          <h2 className="text-xl">Wishlist ({wishlistNum})</h2>

          {wishlistNum > 0 && (
            <button
              onClick={handleNav}
              className="font-medium px-12 py-4 border-2 border-gray-400/50 rounded-md"
            >
              Move All To Bag
            </button>
          )}
        </div>

        <div className="wishlist-items flex flex-wrap gap-7.5 items-center">
          {/* {wishlist ? wishlist.map((item) => (
            <WishlistCard key={item.id} product={item} />
          )) : <></>} */}
          {wishlist.length > 0 ? wishlist.map((item) => (
            <WishlistCard key={item.id} product={item} />
          )) : <h2 className="text-2xl mt-10 mx-auto">Your wishlist is empty...</h2>}
        </div>
        <div className="just-for-you mt-20">
          {/* header */}
          <div className="flex justify-between">
            <CommonHead header={"Just for you"} content={""} />
            <button
              className={
                "px-12 py-4 border-2 border-gray-400/50 rounded-md cursor-pointer text-nowrap"
              }
            >
              See All
            </button>
          </div>
          {/* js for u */}
          <div className="flex">
            {arr.map((item, i)=>{
               return <SingleFlashCard
                 key={i}
                 image={chair}
                 title={"item.title"}
                 newPrice={300}
                 oldPrice={200}
                 rating={5}
                 reviews={43}
               />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
