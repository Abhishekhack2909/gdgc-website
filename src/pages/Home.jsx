import React from 'react'
import HeroText from '../Components/HeroText/HeroText.jsx'
import JoinUsButton from '../Components/HeroText/JoinUsButton.jsx'
import EventsSectionContainer from '../Components/EventsSection/EventsSectionContainer.jsx'
import AboutUs from '@/Components/AboutUs/AboutUs.jsx'

function Home() {
    return (
        <>
            <HeroSection />
            <EventsSectionContainer />
            <AboutUs />
        </>
    );
}

export default Home;
