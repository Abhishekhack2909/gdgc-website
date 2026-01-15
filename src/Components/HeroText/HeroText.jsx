import React from 'react'
import './HeroText.css'

import { Link } from 'react-router-dom'
import '@/shadcn/styles/neobrutalism.css'
import { Button } from '@/shadcn/ui/button.jsx'
import { ExternalLink, MapPin } from 'lucide-react'

export default function HeroText() {
  return (
    <section className="hero" aria-label="Site hero">
      <div className="hero__inner">
        <h1 className="hero__heading">
          <span className="hero__we">we are</span>{' '}
          <span className="hero__gdgc">gdgc</span>
          <span className="hero__dot" aria-hidden="true"></span>
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
        <span className="hero__location-icon mt-1" aria-hidden="true">
          <MapPin size={25} color="#4285F4" strokeWidth={2} />
        </span>

        <span className="hero__location-text">
          <span 
          className="hero__location-name sm:text-lg! text-sm!"
          >
            VIT Bhopal, India
          </span>
          <span 
          className="hero__location-coords sm:text-lg! text-sm!"
          >
            23°04′37″N 76°51′04″E
            </span>
        </span>
      </a>

      <div className="hero__cta">
        <Button className="hero__cta-button w-20 lg:w-45 h-11 px-8">
          <ExternalLink color="white" />
          <Link to="/join" className="hidden lg:inline text-xl ml-2">Join Us 🚀</Link>
          <Link to="/join" className="inline lg:hidden text-sm">Join</Link>
        </Button>
      </div>

      {/* Bottom-right brand (logo + stacked text) */}
      <div className="hero__brand" aria-hidden="true">
        <img src="/GDG Logo.svg" alt="GDG logo" className="hero__brand-logo" />
        <div className="hero__brand-text">
          <div className="hero__brand-line1">GDGC</div>
          <div className="hero__brand-line2">VIT BHOPAL</div>
        </div>
      </div>
    </section>
  )
}
