import './SiteBorder.css';
import NavBox from './NavBox';
import Sidebar from './Sidebar';
import { useRef, useEffect, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import CursorComponent from './CursorComponent';
import Projects from '../components/Projects/Projects';
import Experience from '../components/Experience/Experience';
import Contact from '../components/Contact/Contact';

function SiteBorder() {
  const scrollRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [locomotiveScrollInstance, setLocomotiveScrollInstance] = useState(null); // State to hold the locomotive scroll instance

  // this checks if the device is touch-screen, if it is touch, locomotive-scroll turns off, custom cursor disappears, and overflow-y becomes scroll.
  useEffect(() => {
    const checkDeviceType = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    checkDeviceType();

    let scroll;
    let cursor = document.querySelector(".custom-cursor");
    let cursorTxt = document.querySelector(".project-para-cursor");
    let scrollx = document.querySelector(".site-border");

    if (!isTouchDevice) {
      scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });
      setLocomotiveScrollInstance(scroll); // Save the instance in state
    } else {
      cursor.style.display = "none";
      cursorTxt.style.display = "none";
      scrollx.style.overflowY = "scroll";
    }

    return () => {
      if (scroll) scroll.destroy();
    };
  }, [isTouchDevice]);

  return (
    <>
      <CursorComponent />
      <div className="outer-frame">
        <Sidebar />
        <NavBox locoScroll={locomotiveScrollInstance} />
        <div className="left">
          <div className="nav-small-screen">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="site-border">
            <div className="scroller-page" ref={scrollRef}>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SiteBorder;
