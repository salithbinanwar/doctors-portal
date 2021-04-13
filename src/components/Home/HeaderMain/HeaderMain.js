import React from 'react';
import chair from '../../../images/chair.png';
const HeaderMain = () => {
    return (
        <main style={{height:"600px"}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1>your new smaile <br/> start here</h1>
                <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel earum molestias unde id ipsa! Deleniti eveniet est facilis consequuntur soluta error, ipsam, temporibus explicabo magni debitis, quod cupiditate recusandae? Asperiores, a vero sapiente exercitationem soluta corrupti necessitatibus. Inventore, eum quaerat dolore molestiae aliquam corrupti aperiam velit amet distinctio facilis fugit?</p>
                <button className="btn btn-primary">get appoinment</button>
            </div>
            <div className="col-md-6">
            <img src={chair} className="img-fluid" alt="pic of chair"/>
            </div>
        </main>
    );
};

export default HeaderMain;