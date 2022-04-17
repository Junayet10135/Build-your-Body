import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id='services' className='mt-5 text-center container '>
            <h2 className='section-title p-2 '>Services</h2>
            <div className='row'>
            {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>) 
            }
                
            </div>
        </div>
    );
};

export default Services;