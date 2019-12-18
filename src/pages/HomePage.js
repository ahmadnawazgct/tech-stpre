import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import Services from '../components/homepage/Services';
import Featured from '../components/homepage/Featured';

const HomePage =()=> {
    return(
        <>
            <Hero 
                title="awesome gadgets" 
                max="true"
            >
                <Link 
                    to="/products" 
                    className="main-link" 
                    style={{margin:'2rem'}}
                >
                our products
                </Link>
            </Hero>
            <Services />
            <Featured />
        </>
    )
}
export default HomePage;
