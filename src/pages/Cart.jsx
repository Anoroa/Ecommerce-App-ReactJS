import Breadcrumb from "../components/BreadCrumb";
import CartRow from "../components/CartRow"
import keyboard from "../assets/keyboard.png"
import CommonButton from "../components/CommonButton.jsx";


function Cart() {
    return (
        <section id={"cart"}>
            <div className="container">
                <Breadcrumb className={"mt-20"}/>
                {/*     Row 1   */}
                <div className="cart-header flex items-center justify-between px-10 py-6 shadow-lg mt-20">
                    <h2>Product</h2>
                    <h2>Price</h2>
                    <h2>Quantity</h2>
                    <h2>Subtotal</h2>
                </div>
                {/*     Row 2   */}
                <CartRow img={keyboard} name={"Keyboard"} price={300} quantity={2} subtotal={300}/>
                <CartRow img={keyboard} name={"Mouse"} price={800} quantity={1} subtotal={800}/>
                <CartRow img={keyboard} name={"Monitor"} price={500} quantity={2} subtotal={500}/>
                <CartRow img={keyboard} name={"Chair"} price={1200} quantity={1} subtotal={1200}/>
                {/*     Row-3   */}
                <div className={"return-update-row mt-6 flex justify-between items-center"}>
                    <button className={"font-medium px-12 py-4 border-2 border-gray-400/50 rounded-md"}>Return To Shop
                    </button>
                    <button className={"font-medium px-12 py-4 border-2 border-gray-400/50 rounded-md"}>Update Cart
                    </button>
                </div>
                {/*   Row 4     */}
                <div className={"flex justify-between mt-20 mb-35"}>
                    <div className={"coupon"}>
                        <form className={"flex gap-4"}>
                            <input className={"border border-black outline-0 px-6 py-4 w-75 rounded-md"} placeholder={"Coupon Code"} />
                            <CommonButton name={"Apply Coupon"} className={"common-button"} />
                        </form>
                    </div>
                    <div className={"cart-total px-6 py-8 w-117.5 h-81 border-2 border-gray-800 rounded-md"}>
                        <h2 className={"text-xl font-semibold mb-6"}>Cart Total</h2>
                        <div className={"subtotal flex justify-between items-center pb-4 border-b-2 border-gray-400/50"}>
                            <h2 className={"text-black"}>Subtotal:</h2>
                            <span>$1750</span>
                        </div>
                        <div className={"shipping mt-4 flex justify-between items-center pb-4 border-b-2 border-gray-400/50"}>
                            <h2 className={"text-black"}>Shipping:</h2>
                            <span>$0</span>
                        </div>
                        <div className={"total mt-4 flex justify-between items-center pb-4"}>
                            <h2 className={"text-black"}>Total:</h2>
                            <span>$1750</span>
                        </div>
                        <CommonButton name={"Proceed to checkout"} className={"common-button mt-4 mx-auto block"} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cart;