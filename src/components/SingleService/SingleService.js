import React from 'react';
import { useParams } from 'react-router';
const SingleService = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h3>This service {serviceId}</h3>
        </div>
    );
};

export default SingleService;