import React from 'react';
import { Carousel } from 'react-bootstrap';
import Fast from '../../imges/Banner/fast.png'
import Second from '../../imges/Banner/second.jpg'
import Third from '../../imges/Banner/third.png'
const Banner = () => {
    const title="Noakhali Hospital"
    const details="Nokhali Hospital Ltd was borne out of a vision to provide a complete and one-stop healthcare solution to the people of Bangladesh."
    return (
        <div>
          <Carousel>
            <Carousel.Item interval={3000}>
                <img
                className="d-block w-100"
                src={Fast}
                alt=""/>
                <Carousel.Caption>
                <h3>{title}</h3>
                <p>{details}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <img
                className="d-block w-100"
                src={Second} alt=""/>
                <Carousel.Caption>
                <h3>{title}</h3>
                <p>{details}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Third} alt=""/>
                <Carousel.Caption>
                <h3>{title}</h3>
                <p>{details}</p>
                </Carousel.Caption>
             </Carousel.Item>
           </Carousel>
        </div>
    );
};

export default Banner;