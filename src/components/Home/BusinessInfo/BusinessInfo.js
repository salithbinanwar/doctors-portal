import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import {faClock, faMapMarker, faPhone} from '@fortawesome/free-solid-svg-icons'

const infosData = [
    {
        title: 'Opening Hours',
        description: 'we are open 7 days',
        icon: faClock,
        background: 'primary'
    }, {
        title: 'visit our location',
        description: 'brooklyn, NY ',
        icon: faMapMarker,
        background: 'dark'
    }, {
        title: 'Call us now ',
        description: '+15832538923',
        icon: faPhone,
        background: 'primary'
    }
]
const BusinessInfo = () => {
    return (
        <div>
            <section className='d-flex justify-content-center'>
                <div className="w-75 row">
                    {
                    
                    
                    infosData.map(info => <InfoCard info={info}></InfoCard>)

                    }
                </div>
            </section>
        </div>
    );
};

export default BusinessInfo;