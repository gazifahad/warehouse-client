import React from 'react';
import LoadItems from '../LoadItems/LoadItems';

const Home = () => {
    return (
        <div className='min-vh-100 container'>
            <h1>Welcome to Warehouse</h1>
            <LoadItems></LoadItems>
            <div>
                extra section 1
            </div>
            <div>
                extra section 2
            </div>
        </div>
    );
};

export default Home;