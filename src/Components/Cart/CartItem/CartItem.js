import React from 'react'
import { ImBin2 } from "react-icons/im";
import './CartItem.css';

const CartItem = (props) => {
    const { id, link, price, name, count, total} = props;
    const { increamentItem, decreamentItem, removeItem } = props;
    return (
        
        <div className="row my-2  text-capitalize text-center">
            <div className="col-10  mx-auto col-lg-2">
                <img
                    src={link}
                    style={{ width : "5rem", height:"5rem"}}
                    className = "img-fluid"
                    alt="product" />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                
                {name}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                
                ${price}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span onClick={()=>decreamentItem(id)} className="btn btnBlack">
                    -
                </span>
                <span className="btn btnBlack">{count}</span>
                <span onClick={()=>increamentItem(id)} className="btn btnBlack">+</span>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClickCapture={() => removeItem(id)}>
                    <ImBin2 />
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong>item total : $ {total}</strong>
            </div>
        </div>


                
                
    )
}

export default CartItem
