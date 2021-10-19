import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch("./services.json")
        .then(res => res.json())
        .then (data=>setServices(data));
    },[])
    return (
        <div id="services">
        
            <h2 className="mt-5">Our Services</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 container ms-lg-5 mt-3">
            {
                services.map(service=><Service
                key={service.id}
                service={service}
                services={services}
                ></Service>)
            }
            </div>
            
        </div>
    );
};

export default Services;