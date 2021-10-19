import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const {name,img,details,id}=props.service;
    return (
        <div>
            <div className="col">
            <div className="card service">
            <img  src={img} className="w-100 h-50" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{details}</p>
                <Link to={`/singleService/${id}`}>
                <button className="btn btn-primary">Go Service</button>
               </Link>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Service;