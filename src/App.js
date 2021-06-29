import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/LoginAndRegister/Login';
import Register from './Components/LoginAndRegister/Register';
import { products } from './Products.js';
import ProductList from './Components/Product/ProductList';
import Cart from './Components/Cart';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allProducts: [],
      cart: [],
      isSignedIn: false,
      route: 'home',
      quantity: 0,
      cartSubTotal: 0,
      cartTax: 0,
      cartTotal: 0
    }
  }
  componentDidMount(){
    this.setProducts();

  }
  getItem = (id) =>{
     const product = this.state.allProducts.find(item => item.id === id);
     return product;
  }
  setProducts = () =>{
    let tempProducts = [];
    products.forEach(item => {
      let singleItem = {...item};
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return {
        allProducts : tempProducts
      }
    })
  }
  increamentItem = (id) => {
    let tempCart = [...this.state.cart];
    const index = tempCart.indexOf(this.getItem(id));
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.total + product.price;
    const tax = 0.10 * product.price;
    const subtotal = product.price;
    const total = tax + subtotal;
    this.setState(() => {
      return {
        cart : tempCart,
        cartTax : tax + this.state.cartTax,
        cartSubTotal : subtotal + this.state.cartSubTotal,
        cartTotal : total + this.state.cartTotal
      }
    })
  }

  decreamentItem = (id) =>{
    let tempCart = [...this.state.cart];
    const index = tempCart.indexOf(this.getItem(id));
    const product = tempCart[index];
    product.count = product.count - 1;
    product.total = product.total - product.price;
    const tax = 0.10 * product.price;
    const subtotal = product.price;
    const total = tax + subtotal;
    this.setState(() => {
      return {
        cart : tempCart,
        cartTax : this.state.cartTax - tax,
        cartSubTotal : this.state.cartSubTotal - subtotal,
        cartTotal : this.state.cartTotal - total
      }
    },() => {
      if(product.count === 0){
        this.removeItem(id);
      }
    })
  }

  emptyCart = () => {
    console.log("This makes the cart empty");
  }
  removeItem = (id) => {
    let tempCart = [...this.state.cart];
    const tempProducts = [...this.state.allProducts];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = false;
    tempCart = tempCart.filter(item => item.id !== id);
    this.setState(() => {
      return {
        cart : tempCart,
        allProducts : tempProducts
      }
    })
  }
  onRouteChange = (route) => {
    console.log(route);
    if(route === "loggedIn"){
      this.setState(() => {
        return {
          isSignedIn : true, 
          route: 'products'
        }
      },() => {
        console.log(this.state.isSignedIn)
      })
    }else if(route === "loggedOut"){
      this.setState({isSignedIn : false, route: 'home'})
    }else{
      this.setState({route : route})
    }
  }

  addToCart = (id) => {
    let tempProducts = [...this.state.allProducts];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.count = 1;
    const price = product.price;
    product.total = price;
    product.inCart = true;
    const tax = 0.10 * product.price;
    const subtotal = product.price;
    const total = tax + subtotal;
    this.setState(() => {
      return {
        allProducts: tempProducts,
        cart : [...this.state.cart, product],
        cartTax : tax + this.state.cartTax,
        cartSubTotal : subtotal + this.state.cartSubTotal,
        cartTotal : total + this.state.cartTotal};
      }
    );
  }
  clearCart = () => {
    this.setState({cart : []});
  }
  render(){
    return (
      <div>
         <Navbar onRouteChange = {this.onRouteChange} isSignedIn={this.state.isSignedIn} />
        { (this.state.route === 'home')?
          <Home onRouteChange={this.onRouteChange} />
          :(this.state.route === 'login')?
            <Login onRouteChange={this.onRouteChange} />
            :(this.state.route === 'register')?
             <Register onRouteChange={this.onRouteChange} />
             : (this.state.route === 'placeOrder') ?
                <PlaceOrder onRouteChange={this.onRouteChange} />
                :(this.state.route === 'cart') ?
                  <Cart cart={this.state.cart} 
                        increamentItem = {this.increamentItem}
                        decreamentItem = {this.decreamentItem}
                        removeItem = {this.removeItem} 
                        emptyCart = {this.emptyCart}
                        cartSubTotal={this.state.cartSubTotal}
                        cartTax={this.state.cartTax}
                        cartTotal={this.state.cartTotal}
                        clearCart={this.clearCart}
                        onRouteChange={this.onRouteChange} 
                        isSignedIn={this.state.isSignedIn} />
                        :<ProductList products={this.state.allProducts} 
                                        cart={ this.state.cart } 
                                        addToCart={this.addToCart}/>}
      </div>
    );
  }
}

export default App;
