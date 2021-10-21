import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
const SingleService = () => {
    const { serviceId } = useParams();
    const [singleService,setSingleService]=useState([]);
    useEffect(()=>{
        fetch("/services.json")
        .then(res => res.json())
        .then (data=>setSingleService(data));
    },[])
    const result=singleService.find((singleService) => singleService.id === serviceId);
    const {name,img,details} = result || {};
    console.log(result);
    return (
        <div>
            <h3>This service {serviceId}</h3>
            <div className="row row-cols-1 row-cols-md-3 g-4 container ms-lg-5 mt-3 mb-3">
            <div className="col">
            <div className="card">
            <img  src={img} className="w-100 h-50" alt=""/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{details}</p>
            </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default SingleService;