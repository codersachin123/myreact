import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = () => {
    const images = [
        '/Airpod1.jpg',
        '/Airpod3.jpg',
        '/Apple1.jpg',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [animationClass, setAnimationClass] = useState('');

    const handlePrev = () => {
        setAnimationClass('slide-out-to-right');
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
            setAnimationClass('slide-in-from-left');
        }, 500);
    };

    const handleNext = () => {
        setAnimationClass('slide-out-to-left');
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
            setAnimationClass('slide-in-from-right');
        }, 500);
    };


    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="carousel">
            <button className="carousel-btn prev" onClick={handlePrev}>
                &#8249;
            </button>
            <div className={`carousel-image-container ${animationClass}`}>
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carousel-image" />
            </div>
            <button className="carousel-btn next" onClick={handleNext}>
                &#8250;
            </button>
            <div className="carousel-indicators">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => {
                            setAnimationClass(index > currentIndex ? 'slide-in-from-right' : 'slide-in-from-left');
                            setCurrentIndex(index);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
