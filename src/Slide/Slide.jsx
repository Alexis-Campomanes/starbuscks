import React from 'react';
import './Slide.scss';
import Carousel from 'react-bootstrap/Carousel';
import slide from '../Assets/1.png';
import slide1 from '../Assets/2.png';
import slide2 from '../Assets/3.png';
import slide3 from '../Assets/4.png';
import slide4 from '../Assets/5.png';
import slide5 from '../Assets/6.png';
import slide6 from '../Assets/7.png'



const Slide = () => {
    return (
      <div className='slide'>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={slide}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={slide1}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slide2}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={slide3}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={slide4}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={slide5}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={slide6}
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
     
    );
}

export default Slide;
