import React from 'react';
import img from '../../imges/Banner/third.png'

const AboutUS = () => {
    return (
        <div className="d-flex container mb-5 mt-3">
            <div className="text-start">
                <h1>About Our Hospital</h1>
                <p>
                    Hospital-based services Managed care Medical and other services provided, to a nonadmitted Pt, by a hospital
                     or other qualified facility–eg, mental health clinic, rural health clinic, mobile X-ray unit, free-standing 
                     dialysis unit Examples Physical therapy, diagnostic X-ray, lab tests. See Ambulatory services.
                    Hospitals are important to treat minor and serious diseases, illnesses and disorders of the body 
                    function of varying types and severity. Hospitals also help promote health, give information on prevention 
                    of illnesses and as well offer curative services.
                </p>
            </div>
            <div>
                <img className="h-75 mb-5" src={img}alt="" />
            </div>
        </div>
    );
};

export default AboutUS;