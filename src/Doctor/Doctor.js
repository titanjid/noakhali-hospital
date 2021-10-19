import React, { useEffect, useState } from 'react';
import SingleDoctor from '../components/SingleDoctor/SingleDoctor';

const Doctor = () => {
    const [doctors,setdoctors]=useState([]);
    useEffect(()=>{
        fetch("./doctor.json")
        .then(res => res.json())
        .then(data =>setdoctors(data));
    },[])
    return (
        <div>
            <h2 className="mt-4">Our Doctors</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 container">
                {
                    doctors.map(doctor=><SingleDoctor
                    key={doctor.id}
                    doctor={doctor}
                    >
                    </SingleDoctor>)
                }
            </div>
            
        </div>
    );
};

export default Doctor;