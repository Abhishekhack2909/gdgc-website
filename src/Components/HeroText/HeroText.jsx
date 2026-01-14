import React from 'react'
import './HeroText.css'

export default function HeroText() {
  return (
    <section className="hero" aria-label="Site hero">
      <div className="hero__inner">
        <h1 className="hero__heading">
          <span className="hero__we">we are</span>{' '}
          <span className="hero__gdgc">gdgc</span>
        </h1>
        <p className="hero__sub">VIT BHOPAL</p>
      </div>

      {/* Bottom-left location (clickable, opens Google Maps) */}
      <a
        className="hero__location"
        href="https://www.google.com/maps/search/?api=1&query=23.076944,76.851111"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open VIT Bhopal in Google Maps"
      >
        <span className="hero__location-icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="var(--hero-blue)"/>
            <circle cx="12" cy="9" r="2.3" fill="#fff" />
          </svg>
        </span>

        <span className="hero__location-text">
          <span className="hero__location-name">VIT Bhopal, India</span>
          <span className="hero__location-coords">23°04′37″N 76°51′04″E</span>
        </span>
      </a>
    </section>
  )
}
