import React from "react";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";

function NavBar() {
    return (
        <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 border-b border-border">
            {/* Desktop Navigation - visible on lg screens and above */}
            <DesktopNavBar />

            {/* Mobile Navigation - visible on screens smaller than lg */}
            <MobileNavBar />
        </header>
    );
}

export default NavBar;
