import React from 'react';
import LoadItems from '../LoadItems/LoadItems';
import ContactForm from './../Contact/Contact';

const Home = () => {
    return (
        <div className='min-vh-100 container'>
           
           <h1>Welcome to GreenStock Warehouse
            </h1>
            <div className="banner">
            
            <img className='img-fluid' src="https://i.pinimg.com/originals/60/9b/9e/609b9e55c51475728f6b8d288fd0d400.jpg" alt="" />
            </div>
        
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