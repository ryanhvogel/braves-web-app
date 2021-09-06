import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';

function Home () {
    window.scrollTo(0,0);
    return (
        <>
        <HeroSection />
        <Cards />
        </>
    )
}

export default Home;