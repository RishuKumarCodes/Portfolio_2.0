import React, { useRef, useEffect } from 'react';
import './hero.css';
import BottomLeftBox from './BottomLeftBox';
import HighlightStrip from './HighlightStrip';
import gsap from 'gsap';


import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Hero() {
    const textRef = useRef(null);
    const textRef1 = useRef(null);

    useEffect(() => {
        gsap.set(textRef1.current, { opacity: 0 });

        gsap.fromTo(
            textRef.current.querySelectorAll("span"),
            {
                opacity: 0,
                y: 200,
                rotation: 22,
                scale: 0.7,
                duration: 2,
            },
            {
                y: 0,
                delay: 0.3,
                opacity: 1,
                scale: 1,
                rotation: 0,
                stagger: 0.04,
                duration: 0.1,
                ease: "elastic.out(1,0.3)",
            }
        );


        let tl = gsap.timeline();
        tl.fromTo(
            textRef1.current,
            {
                opacity: 0,
                rotation: 0,
            },
            {
                opacity: 1,
                rotation: 20,
                duration: 0.2,
                ease: "power2.out"
            })
            .to(
                textRef1.current,
                {
                    rotation: -20,
                    duration: 0.5,
                    ease: "power2.out"
                })
            .to(
                textRef1.current,
                {
                    rotation: 0,
                    duration: 0.5,
                    ease: "power2.out",
                });

    }, []);

    return (
        <div className="hero-section">
            <div className="image-section">
                <img src="./src/assets/hero-bg.jpg" alt="" />
                <div className="text">
                    <p ref={textRef1}>Hey,</p>
                    <h1 ref={textRef}>
                        {Array.from("I'm Rishu").map((char, index) => (
                            <span key={index}>
                                {char === ' ' ? <span>&nbsp;</span> : char}
                            </span>
                        ))}
                    </h1>

                </div>
            </div>
            <BottomLeftBox />
            <HighlightStrip />
        </div>
    );
}

export default Hero;
