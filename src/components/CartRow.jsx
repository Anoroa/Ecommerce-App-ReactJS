import React from 'react';
import {MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp} from "react-icons/md";

function CartRow({img, name, price, quantity, subtotal}) {
    return (
        <div className="cart-row flex items-center justify-between px-10 py-6 shadow-lg mt-10">
            <h2 className={"flex gap-5 items-center"}><img className={"w-12.5"} src={img} alt={"cart-item"}/><span>{name}</span></h2>
            <h2>{price}</h2>
            <div className={"flex items-center justify-center gap-1 px-3 py-1.5 border-2 border-gray-400 rounded-lg"}>
                <h2>{quantity}</h2>
                <div className={"flex flex-col"}>
                    <button><MdOutlineKeyboardArrowUp /></button>
                    <button><MdOutlineKeyboardArrowDown /></button>
                </div>
            </div>
            <h2>{subtotal}</h2>
        </div>
    );
}

export default CartRow;