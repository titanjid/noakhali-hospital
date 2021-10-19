import React from 'react';
import './singleDoctor.css'

const SingleDoctor = (props) => {
    const {name,img,phone,MainChamber,Degree}=props.doctor;
    return (
        <div>
            <div className="col">
                <div className="card single-doctor">
                <img src={img} className="w-100 h-50" alt="..."/>
                <div className="card-body">
                    <h2 className="card-title">Name:{name}</h2>
                    <h5 className="card-text">Phone:{phone}</h5>
                    <h5 className="card-text">Degree:{Degree}</h5>
                    <h5 className="card-text">MainChamber:{MainChamber}</h5>
                </div>
                </div>
            </div>
        </div>
    );
};

export default SingleDoctor;