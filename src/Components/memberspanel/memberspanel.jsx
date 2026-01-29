import { useState, useEffect, useRef } from "react";
import { Github, Linkedin } from "lucide-react";
import "./memberspanel.css";

const ScrollLinkedSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const profileRefs = useRef([]);
  const containerRef = useRef(null);
  const activeIndexRef = useRef(0);
  const transitionTimeoutRef = useRef(null);

  const teamData = [
    {
      name: "Anubhavi Jaiswal",
      role: "GDG Organizer",
      image: "/Panel_member1.jpeg",
      github: "#",
      linkedin: "#",
      vision: "As the Organizer of GDGC VIT Bhopal, it has been rewarding to build a vibrant technical community rooted in curiosity and collaboration. Through workshops, hackathons, and hands-on initiatives, we’ve empowered students to connect theory with real-world technology and grow as developers and leaders."
    },
    {
      name: "Akshay Kumar Mishra",
      role: "Technical Lead",
      image: "/Panel-member2.jpeg",
      github: "#",
      linkedin: "#",
      vision: "Being the Tech Lead at GDGC VIT Bhopal has been an incredibly rewarding experience. The community fosters innovation, collaboration, and continuous learning, giving students real opportunities to grow as developers and leaders. It’s inspiring to work with passionate peers and build impactful solutions together."
    },
    {
      name: "Gagan Bhardwaj",
      role: "Technical Co-lead",
      image: "/Panel_member3.jpeg",
      github: "#",
      linkedin: "#",
      vision: "Had an amazing 2 years with GDGC, starting as a Web Team Member and growing into the role of Tech Co-Lead. Learned, shared, and collaborated with some truly like-minded people. Super grateful for the community, the growth, and the experiences. Excited to see what’s ahead! 🚀✨"
    },
    {
      name: "Priyansh Chaudhary",
      role: "Non-Technical Lead",
      image: "/Panel_member4.jpeg",
      github: "#",
      linkedin: "#",
      vision: "Being the Non-Tech Lead at GDG on Campus is about driving our vision forward with precision and accountability . It’s a thrill to lead such a talented team, pushing boundaries and reaching new heights together while keeping the vibes high. 🏎️"
    },
    {
      name: "Devanshi Sharma",
      role: "Non-Technical Co-lead",
      image: "/Panel_member5.jpeg",
      github: "#",
      linkedin: "#",
      vision: "I started my journey in this club as an Event Team Member and today proudly serve as the Non-Tech Co-Lead. Being academically driven, slightly introverted, and highly ambitious, I believe in growing through consistency, dedication, and meaningful contribution"
    }
  ];

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const scrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      const scrollCenter = scrollTop + containerHeight / 2;

      let newActiveIndex = 0;
      let minDistance = Infinity;

      profileRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          const cardCenter =
            rect.top -
            containerRect.top +
            rect.height / 2 +
            scrollTop;
          const distance = Math.abs(cardCenter - scrollCenter);

          if (distance < minDistance) {
            minDistance = distance;
            newActiveIndex = index;
          }
        }
      });

      if (newActiveIndex !== activeIndexRef.current) {
        setActiveIndex(newActiveIndex);
        setIsTransitioning(true);
        if (transitionTimeoutRef.current) {
          clearTimeout(transitionTimeoutRef.current);
        }
        transitionTimeoutRef.current = setTimeout(() => {
          setIsTransitioning(false);
        }, 200);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="scroll-linked-section">
      <div className="left-panel">
        <div className="vision-card">
          <h2 className="vision-title">Our Vision</h2>
          <div className="vision-content">
            <div
              className={`vision-text ${isTransitioning ? "transitioning-out" : "transitioning-in"}`}
              key={activeIndex}
            >
              <p>{teamData[activeIndex].vision}</p>
              <div className="vision-author">
                <span className="author-name">
                  {teamData[activeIndex].name}
                </span>
                <span className="author-role">
                  {teamData[activeIndex].role}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right-panel">
        <div className="profiles-container" ref={containerRef}>
          <div className="scroll-spacer-top"></div>
          {teamData.map((member, index) => (
            <div
              key={index}
              ref={(el) => (profileRefs.current[index] = el)}
              className={`profile-card ${index === activeIndex ? "active" : ""} ${isTransitioning && index === activeIndex
                  ? "transitioning-in"
                  : ""
                } ${isTransitioning && index !== activeIndex
                  ? "transitioning-out"
                  : ""
                }`}
            >
              <div className="profile-info">
                <h3 className="profile-name">{member.name}</h3>
                <p className="profile-role">{member.role}</p>
                <div className="social-icons">
                  <a
                    href={member.github}
                    className="social-icon"
                    aria-label="GitHub"
                  >
                    <Github />
                  </a>
                  <a
                    href={member.linkedin}
                    className="social-icon"
                    aria-label="LinkedIn"
                  >
                    <Linkedin />
                  </a>
                </div>
              </div>
              <div className="profile-image-container">
                <img
                  src={member.image}
                  alt={member.name}
                  className="profile-image"
                />
              </div>
            </div>
          ))}
          <div className="scroll-spacer-bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default ScrollLinkedSection;