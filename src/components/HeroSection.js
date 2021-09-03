import React from 'react';
import '../App.css';
import './HeroSection.css';
import Video from './video/hype.mp4';

function HeroSection() {
    return (
        <div className='hero-container'>
           <video src={Video} type='video/mp4' autoPlay loop muted />
            <h1>THE CORE 3</h1>
            <p>
                Charlie Morton, Max Fried, and Ian Anderson have been the 
                most consistent arms in the Atlanta Braves rotation this season.
                Explore the app to learn more about each member of the 'CORE 3'
                and gain an understanding for how they each have been successful so far this season.
            </p>
        </div>
    );
}

export default HeroSection;
