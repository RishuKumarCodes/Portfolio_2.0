// About.jsx
import React from 'react';
import "./About.css";

function About() {
    return (
        <>
            <div id="about">
                <p>
                    I'm Rishu, an undergrad specializing in full stack web development. I create functional, user-focused applications with a knack for designing clean, intuitive interfaces.
                </p>
                <a
                    data-scroll data-scroll-speed="0.5"
                    data-hover
                    data-hover-bounds
                    href="#"
                >
                    Get CV
                    <div data-hover-bounds></div>

                </a>
                <a
                    data-scroll data-scroll-speed="0.5"
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
