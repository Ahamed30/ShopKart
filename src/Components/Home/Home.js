import React from 'react';


const Home = ({ onRouteChange }) => {
    return (
        
        <div className="container" > 
            <div className="text-center" style={{paddingTop : "15%", paddingLeft:"40%"}}>
                <h1>ShopKart</h1>
                <button onClick={() => onRouteChange('products')}  type="button" className="btn1 btn-outline-primary">Go Shop Now</button>
            </div>    
        </div>
        
    )

}

export default Home

