import React, { Component } from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import './Navbar.css';

class Navbar extends Component {
    render() {
        const { onRouteChange, isSignedIn } = this.props;
        return (
            <nav className="navbar navbar-default navbar-inverse navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <div className="navbar-header element3">
                    <p onClick={() => onRouteChange('home')} className="navbar-brand" href="#">ShopKart</p>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li><p onClick={() => onRouteChange('products')} className="element3">Products</p></li>
                        {(isSignedIn === false) ?
                            <li><p onClick={() => onRouteChange('login')} className="element3">Login</p></li>
                            :<li><p onClick={() => onRouteChange('loggedOut')} className="element3">Logout</p></li>
                        }
                        <li><p onClick={() => onRouteChange('cart')} className="element3"><FaShoppingCart /></p></li>
                    </ul>
                </div>
            </nav>
            
        )
    }
}
export default Navbar
