import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel  from 'react-bootstrap/Carousel';
import './opCarousel.css'
import data from '../../data/components-mock.json'

function OpeningCarousel() {
  return (
    <div className='carouselteste' style={{display: 'block', marginTop:70, marginBottom:100}}>
      <Carousel>
        {data.carousel.map((item, index) => (
                        <Carousel.Item interval={3000}>
                          <img
                            className='imgCarousel'
                            src={item.image.url}
                            alt={item.image.alt}
                          />
                        </Carousel.Item>
                  ))}
      </Carousel>
    </div>
  );
}

export default OpeningCarousel