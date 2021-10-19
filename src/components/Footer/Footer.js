import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook,faTwitter,faInstagram,faYoutube} from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    return (
        <div className="bg-dark pt-3 pb-3">
            <div className="text-white">
                <h2>Noakhali Hospital Ltd</h2>
                <p>Contact Us</p>
               <div>
                <p>
                <span> <FontAwesomeIcon icon={faFacebook}/> </span>
                <span> <FontAwesomeIcon icon={faTwitter}/> </span>
                <span> <FontAwesomeIcon icon={faInstagram}/> </span>
                <span> <FontAwesomeIcon icon={faYoutube}/> </span>
                </p>
               </div>
            </div>
        </div>
    );
};

export default Footer;