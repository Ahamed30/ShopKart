import React from 'react'
import {Col } from 'reactstrap';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = (props) => {
    const { products,  addToCart } = props
    const productComponent = products.map((card,i) => {
        return (
        <Col sm="3" key={products[i].id} >
            <ProductCard 
                id={products[i].id}
                link= {products[i].link} 
                name={products[i].name}
                price={products[i].price}
                rating={products[i].rating}
                inCart={products[i].inCart}
                addToCart={addToCart}/>
        </Col>
        );
    })
    
    return (
        <div className="container">
          <div className="row">
              {productComponent}
          </div>
        </div>
    );
}

export default ProductList
