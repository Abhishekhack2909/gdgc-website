import React from "react";
import { useNavigate } from "react-router-dom";

export default function WhoWeAre() {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/about");
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* Who We Are Section - Desktop */}
      <div className="hidden md:block px-8 lg:px-16 pt-0 pb-8 bg-white">
        {/* Title Section */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-4">
            {/* Yellow Diagonal Bars */}
            <div className="flex gap-0.5">
              <div className="w-6 h-16 bg-[#FBBC04] transform -skew-x-12 border border-[#555]"></div>
              <div className="w-6 h-16 bg-[#FBBC04] transform -skew-x-12 border border-[#555]"></div>
            </div>
            
            {/* Who We Are Text */}
            <h1 className="text-4xl font-bold tracking-wide">Who We Are</h1>
            
            {/* Three Overlapping Yellow Circles */}
            <div className="flex items-center -space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#FBBC04] border border-[#555]"></div>
              <div className="w-10 h-10 rounded-full bg-[#FBBC04] border border-[#555]"></div>
              <div className="w-10 h-10 rounded-full bg-[#FBBC04] border border-[#555]"></div>
            </div>
            
            {/* Arrow */}
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-800 text-sm leading-relaxed mb-4 text-center max-w-4xl mx-auto">
          We are a vibrant community of passionate developers, designers, and tech enthusiasts at VIT Bhopal University. 
          United by our love for Google technologies and innovation, we create, learn, and grow together through workshops, 
          hackathons, and collaborative projects that make a real impact.
        </p>
      </div>

      {/* Bento Grid Section - Desktop */}
      <div className="hidden md:block px-8 lg:px-16 py-12 bg-white">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto">
          {/* Large team photo - left side - taller to show full team */}
          <div className="col-span-5 rounded-2xl overflow-hidden shadow-lg border-2 border-black h-[650px]">
            <img src="/gdgc-team-formal.jpg" alt="GDG Team Formal" className="w-full h-full object-cover object-center" />
          </div>
          
          <div className="col-span-7 flex flex-col gap-4">
            {/* Top right - Google Olympics banner - wider aspect ratio */}
            <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-black h-[200px]">
              <img src="/google-olympics-banner.jpg" alt="Google Olympics" className="w-full h-full object-cover object-center" />
            </div>
            
            {/* Middle row - Team selfie and flag */}
            <div className="grid grid-cols-7 gap-4">
              {/* Team selfie - wider for group photo */}
              <div className="col-span-4 rounded-2xl overflow-hidden shadow-lg border-2 border-black h-[210px]">
                <img src="/gdgc-team-selfie.jpg" alt="Team Selfie" className="w-full h-full object-cover object-center" />
              </div>
              
              {/* Google Olympics flag */}
              <div className="col-span-3 rounded-2xl overflow-hidden shadow-lg border-2 border-black h-[210px]">
                <img src="/google-olympics-flag.jpg" alt="Google Olympics Flag" className="w-full h-full object-cover object-center" />
              </div>
            </div>
            
            {/* Bottom right - Team casual photo - wider for group */}
            <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-black h-[220px]">
              <img src="/gdgc-team-casual.jpg" alt="Team Casual" className="w-full h-full object-cover object-center" />
            </div>
          </div>
        </div>

        {/* Learn More Button */}
        <div className="flex justify-center mt-6">
          <button 
            onClick={handleLearnMore}
            className="bg-[#4285F4] text-black px-8 py-3 rounded-full text-base font-semibold border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all duration-150"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Who We Are Section - Mobile */}
      <div className="md:hidden px-4 py-6 bg-white">
        {/* Title Section */}
        <div className="flex items-center gap-3 mb-4">
          {/* Yellow Diagonal Bars */}
          <div className="flex gap-0.5">
            <div className="w-3 h-8 bg-[#FBBC04] transform -skew-x-12 border border-[#555]"></div>
            <div className="w-3 h-8 bg-[#FBBC04] transform -skew-x-12 border border-[#555]"></div>
          </div>
          
          {/* Who We Are Text */}
          <h1 className="text-xl font-bold">Who We Are</h1>
          
          {/* Three Overlapping Yellow Circles */}
          <div className="flex items-center -space-x-2">
            <div className="w-5 h-5 rounded-full bg-[#FBBC04] border border-[#555]"></div>
            <div className="w-5 h-5 rounded-full bg-[#FBBC04] border border-[#555]"></div>
            <div className="w-5 h-5 rounded-full bg-[#FBBC04] border border-[#555]"></div>
          </div>
          
          {/* Arrow */}
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-xs leading-relaxed mb-4">
          We are a vibrant community of passionate developers, designers, and tech enthusiasts at VIT Bhopal University. 
          United by our love for Google technologies and innovation, we create, learn, and grow together.
        </p>
      </div>

      {/* Bento Grid Section - Mobile */}
      <div className="md:hidden px-4 py-6 bg-white">
        <div className="flex flex-col gap-3">
          {/* Large team photo - taller for full team */}
          <div className="rounded-xl overflow-hidden border-2 border-black h-[280px]">
            <img src="/gdgc-team-formal.jpg" alt="GDG Team Formal" className="w-full h-full object-cover object-center" />
          </div>
          
          {/* Google Olympics banner */}
          <div className="rounded-xl overflow-hidden border-2 border-black h-[140px]">
            <img src="/google-olympics-banner.jpg" alt="Google Olympics" className="w-full h-full object-cover object-center" />
          </div>
          
          {/* Team selfie and flag - side by side */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl overflow-hidden border-2 border-black h-[140px]">
              <img src="/gdgc-team-selfie.jpg" alt="Team Selfie" className="w-full h-full object-cover object-center" />
            </div>
            <div className="rounded-xl overflow-hidden border-2 border-black h-[140px]">
              <img src="/google-olympics-flag.jpg" alt="Google Olympics Flag" className="w-full h-full object-cover object-center" />
            </div>
          </div>
          
          {/* Team casual photo */}
          <div className="rounded-xl overflow-hidden border-2 border-black h-[160px]">
            <img src="/gdgc-team-casual.jpg" alt="Team Casual" className="w-full h-full object-cover object-center" />
          </div>
        </div>

        {/* Learn More Button */}
        <div className="flex justify-center mt-4">
          <button 
            onClick={handleLearnMore}
            className="bg-[#4285F4] text-black px-6 py-2.5 rounded-full text-sm font-semibold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-150"
          >
            Learn More
          </button>
        </div>
      </div>
    </>
  );
}
