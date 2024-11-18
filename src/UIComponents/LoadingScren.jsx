import React, { useEffect } from 'react';
import './LoadingScreen.css';
import { gsap } from 'gsap';
import { Timeline } from 'gsap/gsap-core';

const LoadingScreen = () => {
    useEffect(() => {
        // Animate the text letters coming from below
        const letters1 = document.querySelectorAll('.letter1');
        const letters2 = document.querySelectorAll('.letter2');
        const line1 = document.querySelectorAll('.line1');
        const line2 = document.querySelectorAll('.line2');
        const loadingContainer = document.querySelectorAll('.loadingContainer');
        
        let tl = gsap.timeline({});
        tl.from(line1, {
            width:0,
            stagger: 0.2,
            duration: 1,
            ease: 'power3.out'
        });
        
        tl.from(letters1, {
            y: "100%",
            delay:-1,
            stagger: 0.02,
            duration: 0.3,
            ease: 'power3.out'
        });
        tl.from(line2, {
            width:0,
            stagger: 0.2,
            duration: 1,
            ease: 'power3.out'
        });
        tl.from(letters2, {
            y:  "-100%",
            delay:-1,
            stagger: 0.02,
            // delay:0.4,
            duration: 0.3,
            ease: 'power3.out'
        });
        tl.to(loadingContainer, {
            opacity:0,
            y:100,
            duration:0.3
        })
    }, []);

    return (
        <div className="loadingContainer">
            <div className="line1">
                {'Driven by code,'.split('').map((letter, index) => (
                    <p key={index} className="letter1">
                        {letter === ' ' ? '\u00A0' : letter}
                    </p>
                ))}
            </div>
            <div className="line2">
                {'inspired by creativity.'.split('').map((letter, index) => (
                    <p key={index} className="letter2">
                        {letter === ' ' ? '\u00A0' : letter}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default LoadingScreen;
