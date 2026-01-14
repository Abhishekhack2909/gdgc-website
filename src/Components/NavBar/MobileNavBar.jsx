import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "lucide-react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/shadcn/ui/accordion";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/shadcn/ui/collapsible";

const navItems = [
    {
        title: "Home",
        href: "/",
        subItems: null,
    },
    {
        title: "Tech Domain",
        href: "/teams/tech",
        subItems: [
            { title: "Web Development Team", href: "/teams/tech/webDTeam" },
            { title: "Android Dev Team", href: "/teams/tech/androidTeam" },
            { title: "Machine Learning Team", href: "/teams/tech/mlTeam" },
            { title: "BlockChain Team", href: "/teams/tech/blockChainTeam" },
            { title: "Women Techmakers", href: "/teams/tech/womenTechmakers" },
        ],
    },
    {
        title: "Non-Tech Domain",
        href: "/teams/nonTech",
        subItems: [
            {
                title: "Event Management Team",
                href: "/teams/nonTech/eventManagementTeam",
            },
            {
                title: "Social Media & Marketing Team",
                href: "/teams/nonTech/socialMediaMarketingTeam",
            },
            {
                title: "Design & Content Team",
                href: "/teams/nonTech/designContentTeam",
            },
        ],
    },
    {
        title: "Events",
        href: "/events",
        subItems: null,
    },
    {
        title: "Contact",
        href: "/contact",
        subItems: null,
    },
];

function MobileNavLink({ to, children, onNavigate }) {
    return (
        <Link
            to={to}
            onClick={onNavigate}
            className="flex items-center justify-between py-3 px-3 text-base font-medium text-foreground border-b border-border"
        >
            {children}
        </Link>
    );
}

function MobileSubLink({ to, children, onNavigate }) {
    return (
        <Link
            to={to}
            onClick={onNavigate}
            className="block py-2 px-6 text-sm text-muted-foreground"
        >
            {children}
        </Link>
    );
}

function MobileNavBar() {
    const [open, setOpen] = useState(false);

    const closeMenu = () => setOpen(false);

    return (
        <div className="lg:hidden">
            <Collapsible
                open={open}
                onOpenChange={setOpen}
                className="relative"
            >
                {/* Navbar */}
                <nav className="flex items-center justify-between px-4 py-3 bg-background">
                    <Link
                        to="/"
                        className="flex items-center gap-2"
                        onClick={closeMenu}
                    >
                        <img
                            src="/GDG Logo.svg"
                            alt="GDG Logo"
                            className="h-8 w-auto"
                        />
                        <div className="text-base font-bold">GDG VIT</div>
                    </Link>

                    <CollapsibleTrigger asChild>
                        <button
                            type="button"
                            className="flex items-center justify-center size-9 rounded-md border-2 border-black bg-background"
                            aria-label={open ? "Close menu" : "Open menu"}
                        >
                            {open ? (
                                <XIcon className="size-5" />
                            ) : (
                                <MenuIcon className="size-5" />
                            )}
                        </button>
                    </CollapsibleTrigger>
                </nav>

                {/* Dropdown Panel (slides from under navbar) */}
                <CollapsibleContent className="absolute left-0 right-0 top-full z-50 bg-background border-2 border-black border-t-0 border-l-0 border-r-0 shadow-md">
                    <div className="px-3">
                        <MobileNavLink to="/" onNavigate={closeMenu}>
                            Home
                        </MobileNavLink>

                        <Accordion type="single" collapsible>
                            <AccordionItem value="tech">
                                <AccordionTrigger className="px-3 py-3 text-base">
                                    Tech Domain
                                </AccordionTrigger>
                                <AccordionContent className="pb-2">
                                    {navItems
                                        .find((x) => x.title === "Tech Domain")
                                        ?.subItems?.map((sub) => (
                                            <MobileSubLink
                                                key={sub.title}
                                                to={sub.href}
                                                onNavigate={closeMenu}
                                            >
                                                {sub.title}
                                            </MobileSubLink>
                                        ))}
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="nontech">
                                <AccordionTrigger className="px-3 py-3 text-base">
                                    Non-Tech Domain
                                </AccordionTrigger>
                                <AccordionContent className="pb-2">
                                    {navItems
                                        .find(
                                            (x) => x.title === "Non-Tech Domain"
                                        )
                                        ?.subItems?.map((sub) => (
                                            <MobileSubLink
                                                key={sub.title}
                                                to={sub.href}
                                                onNavigate={closeMenu}
                                            >
                                                {sub.title}
                                            </MobileSubLink>
                                        ))}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <MobileNavLink to="/events" onNavigate={closeMenu}>
                            Events
                        </MobileNavLink>
                        <MobileNavLink to="/contact" onNavigate={closeMenu}>
                            Contact
                        </MobileNavLink>
                    </div>

                    <div className="p-4 border-t border-border">
                        <Link
                            to="/join"
                            onClick={closeMenu}
                            className="block w-full rounded-md bg-blue-500 px-4 py-3 text-center font-semibold text-white"
                        >
                            Join Us
                        </Link>
                    </div>
                </CollapsibleContent>
            </Collapsible>
        </div>
    );
}

export default MobileNavBar;
