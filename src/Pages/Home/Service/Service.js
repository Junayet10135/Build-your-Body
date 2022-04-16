import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { img, name, price, id } = service;
    const navigate = useNavigate();

    const handleServiceId = id => {
        navigate(`/service/${id}`)

    }
    return (
        <div className='service-container mb-5 g-5 col-sm-12 col-md-6 col-lg-4'>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Name:{name}</h5>
                <p className="card-text">Price: {price}</p>
                <button onClick={() => handleServiceId(id)} className='btn btn-primary'> Wanna book?{name}</button>
            </div>

        </div>
    );
};

export default Service;