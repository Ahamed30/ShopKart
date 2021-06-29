import React from 'react'

const  CartColumn = () => {
    return (
        <div className="container-fliud text-center d-none d-lg-block">
            <div className="row">
                <div className="col-10  col-lg-2">
                    <p className="text-uppercase">Products</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">name of the product</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">price</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">quantity</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">remove</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">total</p>
                </div>
            </div>
            
        </div>
        // <thead>
        //     <tr>
        //       <th>Product</th>
        //       <th>Name</th>
        //       <th>Price</th>
        //       <th>Quantity</th>
        //       <th>remove</th>
        //       <th>total</th>
        //     </tr>
        //   </thead>
    )
}

export default CartColumn

