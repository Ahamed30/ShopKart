import React from 'react';


const Home = ({ onRouteChange }) => {
    return (
        
        <div className="container" > 
            <div className="text-center" style={{paddingTop : "15%", paddingLeft:"30%"}}>
                <h1>Thank You For Shopping!</h1>
                <button onClick={() => onRouteChange('products')}  type="button" className="btn1 btn-outline-primary">To continue shopping</button>
            </div>    
        </div>
        
    )

}

export default Home
