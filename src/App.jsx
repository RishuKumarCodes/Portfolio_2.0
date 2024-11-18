import { useRef, useEffect, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import SiteBorder from './UIComponents/SiteBorder';
import LoadingScreen from './UIComponents/LoadingScren';

import Hero from './PageSections/Hero/Hero';
import About from './PageSections/About/About';
import Skills from './PageSections/Skills/Skills';
import Projects from './PageSections/Projects/Projects';
import Experience from './PageSections/Experience/Experience';
import Contact from './PageSections/Contact/Contact';
import SmallWidthContact from './PageSections/Contact/SmallWidthContact';

function App() {
    const scrollRef = useRef(null);
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const [loading, setLoading] = useState(true);
    const [locomotiveScrollInstance, setLocomotiveScrollInstance] = useState(null);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 500);

    useEffect(() => {
        const checkDeviceType = () => {
            setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
        };

        checkDeviceType();

        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 500);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (!loading) {
            const scroll = new LocomotiveScroll({
                el: scrollRef.current,
                smooth: true,
            });

            setLocomotiveScrollInstance(scroll); 

            let cursor = document.querySelector(".custom-cursor");
            let cursorTxt = document.querySelector(".project-para-cursor");
            let scrollx = document.querySelector(".site-border");

            if (!isTouchDevice) {
                // Nothing for non-touch devices
            } else {
                setTimeout(() => {
                    if (cursor) cursor.style.display = "none";
                    if (cursorTxt) cursorTxt.style.display = "none";
                    if (scrollx) scrollx.style.overflowY = "scroll";
                }, 0);
            }

            if (scroll) {
                scroll.on('scroll', () => {
                    ScrollTrigger.update();
                });
            }

            return () => {
                if (scroll) scroll.destroy();
            };
        }
    }, [loading, isTouchDevice]);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2300);
    }, []);

    return (
        <>
            {loading ? <LoadingScreen /> : (
                <>
                    <SiteBorder locoScroll={locomotiveScrollInstance} />
                    <div className="scroller-page" ref={scrollRef}>
                        <Hero />
                        <About />
                        <Skills />
                        <Projects />
                        {isSmallScreen ? <SmallWidthContact /> : <Contact />}
                    </div>
                </>
            )}
        </>
    );
}

export default App;
