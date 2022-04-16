import React from 'react';
import Banner from '../Banner/Banner';
import HappyClients from '../HappyClients/HappyClients';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Services></Services>
            <HappyClients></HappyClients>
        </div>
    );
};

export default Home;