import React from 'react';
import LoadItems from '../LoadItems/LoadItems';
import ContactForm from './../Contact/Contact';

const Home = () => {
    return (
        <div className='min-vh-100 container'>
            <h1>Welcome to Warehouse</h1>
            <LoadItems></LoadItems>
            <div>
               <h2>Our features</h2>
               <ul className='text-start'>
                   <li>24*7 support system</li>
                   <li>100% authentic products</li>
                   <li>Green and fresh Items</li>
                   <li>Reliable and rechable at anytime</li>
                   <li> Dynamic and customer friendly environment</li>
               </ul>
               
            </div>
            <div>
                <h2>Contact Us</h2>
                <section>
                    <ContactForm></ContactForm>
                </section>
            </div>
        </div>
    );
};

export default Home;