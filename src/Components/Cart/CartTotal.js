import React from 'react';
import { FaAmazonPay } from "react-icons/fa";
import { SiGooglepay } from "react-icons/si";

const CartTotal = (props) => {
    const { cartSubTotal, cartTax, cartTotal, clearCart, onRouteChange, isSignedIn } = props.value;
    return (

            <div className="container">
                <div className="row">
                    <div className="">
                        <button 
                            onClick={clearCart}
                            className ="btn btnClear btn-outline-primary  text-uppercase mb-3 px-5"
                            type="button" >clear cart
                        </button>
                        <h5>
                            <span className="text-title">
                                subtotal :
                            </span>
                            <strong>$ {cartSubTotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                tax :
                            </span>
                            <strong>$ {cartTax}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                total :
                            </span>
                            <strong>$ {cartTotal}</strong>
                        </h5>
                        <div className="text-center">
                            <button className ="btn btn-outline-primary"  onClick={
                                isSignedIn ? () => onRouteChange('placeOrder') 
                                :() => alert("Please Sign In")} style={{marginRight: 5}}>
                                <FaAmazonPay  style={{ margin: 10, width: 50, height: 25, fontSize: 30 }} />
                            </button>
                            <button className ="btn btn-outline-primary pay"onClick={
                                isSignedIn ? () => onRouteChange('placeOrder') 
                                :() => alert("Please Sign In")}>
                                <SiGooglepay style={{ margin: 10, width: 50, height: 25, fontSize: 30 }} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default CartTotal;

