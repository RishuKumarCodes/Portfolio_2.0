import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import "./NavBox.css";

function NavBox() {
    const textRef = useRef(null);

    useEffect(() => {
        gsap.from(textRef.current, {
            rotateX: 90,
            delay:0.4,
            duration: 1,
            transformOrigin: "top",
        });
    }, []);

    return (
        <div className="nav-container" ref={textRef}>
            <a href="#about">About</a>
            <a href="#projects">Work</a>
            <a href="#contact">Contact</a>
        </div>
    );
}

export default NavBox;
