import React from 'react'
import HeroText from '../Components/HeroText/HeroText.jsx'
import JoinUsButton from '../Components/HeroText/JoinUsButton.jsx'

function Home() {
  return (
    <>
      <HeroText />
      <JoinUsButton />
      {/* The building illustration and other elements are rendered elsewhere; the HeroText sits above them visually. */}
    </>
  )
}

export default Home