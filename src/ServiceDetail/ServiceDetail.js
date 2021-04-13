import React from 'react';

const ServiceDetail = (service) => {
    return (
        <div className="col-md-4">
            <img src={service.img} alt={service.name}/>
            <h5>{service.name}</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, alias.</p>
        </div>
    );
};

export default ServiceDetail;