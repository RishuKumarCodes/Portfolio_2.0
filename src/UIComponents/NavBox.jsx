import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './NavBox.css';

function NavBox({ locoScroll }) {
    const textRef = useRef(null);

    useEffect(() => {
        gsap.from(textRef.current, {
            rotateX: 90,
            delay: 0.4,
            duration: 1,
            transformOrigin: 'top',
        });
    }, []);

    // Function to handle smooth scrolling using Locomotive Scroll
    const scrollToSection = (id) => {
        if (locoScroll) {
            locoScroll.scrollTo(id); // Scroll to the target section using the passed Locomotive Scroll instance
        }
    };

    return (
        <div className="nav-container" ref={textRef}>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('#about'); }}>About</a>
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('#projects'); }}>Work</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}>Contact</a>
        </div>
    );
}

export default NavBox;