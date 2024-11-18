import React, { useState, useEffect } from 'react';
import './About.css';
import { gsap } from 'gsap';

function About() {

    useEffect(() => {
        const textEffect = () => {
            const words = document.querySelectorAll("#about p p p");
            gsap.fromTo(words,
                {
                    y: "100%",
                    // stagger: 0.04,
                },
                {
                    y: 0,
                    stagger: 0.03,
                    ease: "sine.out",

                }
            );
        };

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    textEffect();
                }
            },
            { threshold: 0.5 } // 10% of the element should be in view
        );

        const aboutElement = document.querySelector("#about");
        if (aboutElement) {
            observer.observe(aboutElement);
        }
        return () => {
            if (aboutElement) {
                observer.unobserve(aboutElement);
            }
        };
    }, []);

    return (
        <>
            <div id="about">
                <p>
                    {`I'm Rishu, an undergrad specializing in full stack web development. I create functional, user-focused applications with a knack for designing clean, intuitive interfaces.`.split(' ').map((word, index) => (
                        <p className='wordBox'><p className='word' key={index}>{word} </p></p>
                    ))}
                </p>
                <a
                    data-scroll
                    data-scroll-speed="0.5"
                    data-hover
                    data-hover-bounds
                    href="#"
                >
                    Get CV
                    <div data-hover-bounds></div>
                </a>
                <a
                    data-scroll
                    data-scroll-speed="0.5"
                    data-hover
                    data-hover-bounds
                    href="#"
                >
                    Hire me
                    <div data-hover-bounds></div>
                </a>
            </div>
            <div className="s-width-btn">
                <a href="#">Get CV</a>
                <a href="#">Hire me</a>
            </div>
        </>
    );
}

export default About;
