import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";
import SplashScreen from "./Components/SplashScreen/SplashScreen";
import Footer from "./Components/Footer/Footer";
import { useScrollContext } from "./context/ScrollContext";

function App() {
    const [showSplash, setShowSplash] = useState(true);
    const { footerRef } = useScrollContext();

    if (showSplash) {
        return <SplashScreen onFinish={() => setShowSplash(false)} />;
    }

    return (
        <>
            <NavBar />
            <main>
                <Outlet />
            </main>
            <div ref={footerRef} id="footer">
                <Footer />
            </div>
        </>
    );
}

export default App;
