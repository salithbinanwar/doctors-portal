import React from 'react';
import fluoride from '../../../images/001-dental.png'
import cavity from '../../../images/tooth.png'
import teeth from '../../../images/tooth (1).png'
import ServiceDetail from '../../../ServiceDetail/ServiceDetail';
const serviceData = [
        {
            name:'fluoride Treatment',
            img:fluoride
        },
        {
            name:'Cavity Filling',
            img:cavity
        },
        {
            name:'Teeth whitening ',
            img:teeth
        }, 
]

const Services = () => {
    return (
        <div>
            <section className='services-container mt-5'>
                <div className='text-center'>
                <h5 style={{color:'#1cc7c1'}}>Our services</h5>
                <h2>We provide</h2>
                </div>
                <div className="w-75 row">
                    {
                        serviceData.map(service => <ServiceDetail service={service}></ServiceDetail> )
                    }
                </div>
            </section>
        </div>
    );
};

export default Services;