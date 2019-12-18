import React from 'react';
import Info from '../components/aboutpage/Info';
import aboutBcg from '../images/aboutBcg.jpeg';
import Hero from '../components/Hero';

const AboutPage =()=> {
    return(
        <div>
            <Hero img={aboutBcg} />
            <Info />
        </div>
    );
}
export default AboutPage;
