import React from 'react';
import img from '../../imges/Banner/third.png'

const AboutUS = () => {
    return (
        <div className="d-lg-flex container mb-5  mt-3">
            <div className="text-start me-3">
                <h1>About Our Hospital</h1>
                <p>
                    Hospital-based services Managed care Medical and other services provided<br />
                    to a nonadmitted Pt,by a hospital or other qualified facility–eg, mental<br />
                    health clinic, rural health clinic, mobile  X-ray unit , free standing<br /> 
                    dialysis unit Examples Physical therapy, diagnostic X-ray , lab tests.<br /> 
                    See Ambulatory services.Hospitals are important to treat minor and serious <br />
                    diseases, illnesses and disorders of the body function of varying typesand <br />
                    severity.Hospitals also help promote health give information on prevention<br />
                    of illnesses and as well offer curative services.
                </p>
            </div>
            <div>
                <img className="h-75 mb-5 w-100" src={img}alt="" />
            </div>
        </div>
    );
};

export default AboutUS;