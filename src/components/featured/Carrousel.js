import React from 'react';

import Slider from 'react-slick'

// IMAGE IMPORT
import SLIDER_ONE from '../../resources/images/slide_one.jpg'
import SLIDER_TWO from '../../resources/images/slide_two.jpg'
import SLIDER_THREE from '../../resources/images/slide_three.jpg'

const Carrousel = () => {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500
    }

    return (
        <div
            className="carrousel_wrapper"
            style={{
                height:`${window.innerHeight}px`,
                overflow: 'hidden'
            }}
        >

            <Slider {...settings}>
                <div>
                    <div 
                        className="carrousel_image"
                        style={{
                            background: `url(${SLIDER_ONE})`,
                            height:`${window.innerHeight}px`
                        }}
                        >
                    </div>
                </div>
                <div>
                    <div 
                        className="carrousel_image"
                        style={{
                            background: `url(${SLIDER_TWO})`,
                            height:`${window.innerHeight}px`
                        }}
                        >
                    </div>
                </div>
                <div>
                    <div 
                        className="carrousel_image"
                        style={{
                            background: `url(${SLIDER_THREE})`,
                            height:`${window.innerHeight}px`,
                        }}
                        >
                    </div>
                </div>
            </Slider>
            
        </div>
    );
};

export default Carrousel;