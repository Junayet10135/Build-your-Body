import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { img, name, price, description, id } = service;
    const navigate = useNavigate();

    const handleServiceId = id => {
        navigate('/checkout');

    }
    return (
        <div className='service-container mb-5 g-5 col-sm-12 col-md-6 col-lg-4 rounded'>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body text-start">
                <h5 className="card-title">{name}</h5>
                <p className="card-text"><strong>Price:</strong> {price}</p>
                <p><small>{description}</small></p>
                <button onClick={() => handleServiceId(id)} className='button d-block mx-auto'> Wanna book? <small>{name}</small></button>
            </div>

        </div>
    );
};

export default Service;