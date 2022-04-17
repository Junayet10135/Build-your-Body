import React from 'react';

const HappyClient = ({client}) => {
    const { img, name, description} = client;
    return (
        <div className='mb-5 g-5 col-sm-12 col-md-6 col-lg-4'>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                
            </div>
        </div>
    );
};

export default HappyClient;