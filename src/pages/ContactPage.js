import React from 'react';
import Hero from  '../components/Hero';
import contactBcg from '../images/contactBcg.jpeg';
import Contact from '../components/contactpage/Contact';

const ContactPage =()=> {
    return(
        <div>
            <Hero img={contactBcg} />
            <Contact  />
        </div>
        );
}
export default ContactPage;
