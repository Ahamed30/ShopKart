import React from 'react'
import CartItem from './CartItem/CartItem';

const CartList = (props) => {
    const { cart, increamentItem, decreamentItem, removeItem, emptyCart } = props.value;
    return (
        <div className="container-fluid">
            {props.value.cart.map((item, i) => {
                return <CartItem key = {item.id} 
                                    id = {item.id}
                                    link = {item.link}
                                    name = {item.name}
                                    price = {item.price}
                                    rating = {item.rating}
                                    count={item.count}
                                    total={item.total}
                                    cart = {cart}
                                    increamentItem = {increamentItem}
                                    decreamentItem = {decreamentItem}
                                    removeItem = {removeItem}
                                    emptyCart = {emptyCart}/>
            })
            }
        </div>
    )
}

export default CartList
