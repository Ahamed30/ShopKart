import React, { Component } from 'react';
import CartColumn from './CartColumn';
import CartList from './CartList';
import EmptyCart from './EmptyCart';
import CartTotal from './CartTotal';


class Cart extends Component {
    render() {
        const { cart } = this.props;
        if( cart.length > 0){
            return (
                <div> 
                    <h3 className="text-center">Your Cart</h3>
                    <CartColumn />
                    <CartList value={ this.props }/>
                    <CartTotal value={ this.props }/>
                </div>
            )
        }else{
            return <EmptyCart />
        }
        
    }
}

export default Cart
