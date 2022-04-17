import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Images/banner/banner1.jpg'
import banner2 from '../../../Images/banner/banner2.jpg'
import banner3 from '../../../Images/banner/banner3.jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Good Trainer is Important</h3>
                    <p>An excellent personal trainer believes that every client has</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Health Is wealth</h3>
                    <p>Food Habit is more important than exercise</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Regular exercise</h3>
                    <p>
                        Regular physical activity can improve your muscle strength and boost your endurance. 
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;