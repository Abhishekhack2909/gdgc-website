// Event Management Domain Data
import {
    PartyPopper,
    FileText,
    Clipboard,
    Calendar,
    Ticket,
} from "lucide-react";

const eventsDomain = {
    id: "eventManagementTeam",
    name: "Event Management",
    shortName: "Events",
    icon: PartyPopper,
    color: "#4285F4",
    description:
        "Plan, organize, and execute memorable events that bring the community together.",
    skills: [
        "Event Planning",
        "Project Management",
        "Venue Coordination",
        "Budget Management",
        "Vendor Relations",
        "Time Management",
        "Problem Solving",
        "Team Coordination",
    ],
    tools: [
        { name: "Google Sheets", icon: FileText },
        { name: "Notion", icon: FileText },
        { name: "Trello", icon: Clipboard },
        { name: "Eventbrite", icon: Ticket },
        { name: "Google Calendar", icon: Calendar },
    ],
    projects: [
        {
            id: 1,
            title: "DevFest 2025",
            description:
                "Annual flagship event featuring tech talks, workshops, and networking.",
            image: "https://placehold.co/400x400",
            technologies: ["Event Management", "Workshops", "Networking"],
            githubUrl: null,
            liveUrl: "https://devfest.gdgc.dev",
            featured: true,
        },
        {
            id: 2,
            title: "Weekly Tech Talks",
            description:
                "Regular knowledge-sharing sessions within the community.",
            image: "https://placehold.co/400x400",
            technologies: ["Workshops", "Learning", "Community"],
            githubUrl: null,
            liveUrl: null,
            featured: false,
        },
    ],
    blogs: [
        {
            id: 1,
            title: "How to Plan a Successful Tech Event",
            excerpt:
                "A comprehensive guide to organizing tech events from start to finish.",
            author: "Sanjay Patel",
            authorAvatar: "https://placehold.co/128x128",
            date: "2025-11-15",
            readTime: "8 min read",
            url: "/blogs/event-planning-guide",
            tags: ["Events", "Planning", "Community"],
        },
    ],
    articles: [
        {
            id: 1,
            title: "Event Planning Checklist",
            description:
                "Comprehensive checklist for planning successful community events.",
            url: "https://gdgc.dev/resources/event-checklist",
            type: "Resource",
        },
    ],
    team: {
        lead: {
            name: "Shlok Rajesh Dhanokar",
            role: "Event Management Co-Lead",
            avatar: "/Domainimages/N-TechDomainimages/Eventteamimages/professional shlok - Shlok Rajesh Dhanokar 23bai10289.png",
            bio: "Expert in organizing large-scale tech events and community gatherings.",
            linkedin: "https://www.linkedin.com/in/shlokdhanokar/",
            github: "https://github.com/shlokdhanokar",
            email: "",
        },
        coLead: {
            name: "Pragati Rai",
            role: "Events Co-Lead",
            avatar: "/Domainimages/N-TechDomainimages/Eventteamimages/PRAGATI RAI 24BCY10123.jpg",
            bio: "Events coordinator focusing on logistics and partnerships.",
            linkedin: "",
            github: "",
            email: "",
        },
        members: [
            {
                name: "Nandini Lodha",
                role: "Core Member",
                avatar: "/Domainimages/N-TechDomainimages/Eventteamimages/NANDINI LODHA 24BCE11092.jpeg",
                linkedin:
                    "https://www.linkedin.com/in/nandini-lodha-505185249/",
                github: "https://github.com/nandinicodess",
            },
            {
                name: "Abhijeet Patil",
                role: "Core Member",
                avatar: "/Domainimages/N-TechDomainimages/Eventteamimages/ABHIJEET BALAJI PATIL 24BCE10110.jpg",
                linkedin:
                    "https://www.linkedin.com/in/abhijeet-patil-247677330",
                github: "https://github.com/PATIL-ABHIJEET",
            },
            {
                name: "Ananya Rajesh Pandey",
                role: "Core Member",
                avatar: "/Domainimages/N-TechDomainimages/Eventteamimages/ANANYA RAJESH PANDEY 24BCE10461.jpeg",
                linkedin: "https://www.linkedin.com/in/ananyapandey333",
                github: "",
            },
            {
                name: "Aaryan Nampoothiri A",
                role: "Core Member",
                avatar: "/Domainimages/N-TechDomainimages/Eventteamimages/AARYAN NAMPOOTHIRI A 24MEI10080.jpg",
                linkedin: "https://www.linkedin.com/in/aaryannampoothiri",
                github: "",
            },
            {
                name: "Anisha Vishwakarma",
                role: "Core Member",
                avatar: "/Domainimages/N-TechDomainimages/Eventteamimages/ANISHA VISHWAKARMA 24BAI10755.jpg",
                linkedin:
                    "https://www.linkedin.com/in/anisha-vishwakarma-20b074244",
                github: "",
            },
            {
                name: "Srashti Tomar",
                role: "Core Member",
                avatar: "/Domainimages/N-TechDomainimages/Eventteamimages/SRASHTI TOMAR 25BAI11169.jpeg",
                linkedin: "",
                github: "",
            },
            {
                name: "Yaduveer Singh Chundawat",
                role: "Core Member",
                avatar: "/Domainimages/N-TechDomainimages/Eventteamimages/YADUVEER SINGH CHUNDAWAT 24BCE11191.png",
                linkedin:
                    "https://www.linkedin.com/in/yaduveer-singh-chundawat-547855328",
                github: "",
            },
        ],
    },
};

export default eventsDomain;
