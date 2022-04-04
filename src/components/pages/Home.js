import React, { useEffect } from 'react';


const Home = () => {

    useEffect(()=>{
        document.title='Play Again? - Ecommerce';
    },[]);

    return (
        <div>
            <div className="banner"></div>
            <h1>Home</h1>
        </div>
    )
}

export default Home