import React, { useEffect } from 'react';
import gsap from 'gsap';
import "./projects.css";

import browserTab from "/browserTab.svg"
import proj1 from "/projects/portfolio.png"
import proj2 from "/projects/baasskyy.png"
import proj3 from "/projects/spotify.png"
import proj4 from "/projects/harryPotter.png"

function Projects() {


    useEffect(() => {

        const textEffect = () => {
            const words = document.querySelectorAll("#projects div");
            gsap.fromTo(words,
                {
                    opacity:0,
                    y: 150,
                },
                {
                    opacity:1,
                    stagger: 0.16,
                    y: 0,
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
            { threshold: 0.2 } // 10% of the element should be in view
        );

        const aboutElement = document.querySelector("#projects");
        if (aboutElement) {
            observer.observe(aboutElement);
        }

        // for custom cursor: 
        const cursor = document.querySelector('.custom-cursor');
        const projectParaRef = document.querySelector('.project-para-cursor');
        const projects = document.querySelectorAll('.project');

        const handleMouseEnter = (project) => {
            if (cursor) {
                gsap.to(cursor, {
                    width: '10rem',
                    height: '10rem',
                    ease: 'power2.out',
                    mixBlendMode: "normal",
                    background: "black",
                    duration: 0.3,
                });
            }
            if (projectParaRef) {
                projectParaRef.style.visibility = "visible";
            }
        };

        const handleMouseLeave = () => {
            if (cursor) {
                gsap.to(cursor, {
                    width: '20px',
                    height: '20px',
                    ease: 'power2.out',
                    mixBlendMode: "difference",
                    background: "#ffffff",
                    duration: 0.3,
                });
            }
            if (projectParaRef) {
                projectParaRef.style.visibility = "hidden";
            }
        };

        projects.forEach(project => {
            project.addEventListener('mouseenter', () => handleMouseEnter(project));
            project.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            if (aboutElement) {
                observer.unobserve(aboutElement);
            }
            projects.forEach(project => {
                project.removeEventListener('mouseenter', () => handleMouseEnter(project));
                project.removeEventListener('mouseleave', handleMouseLeave);
                if (projectParaRef) {
                    projectParaRef.style.visibility = "hidden";
                }
            });
        };
    }, []);


    return (
        <div id="projects">
            <h1>PROJECTS</h1>
            <div>
                <div className="project">
                    <img className='bg' src={browserTab} alt="" />
                    <img className='element' src={proj1} alt="" />
                </div>
                <div className="project">
                    <img className='bg' src={browserTab} alt="" />
                    <img className='element' src={proj2} alt="" />
                </div>
            </div>
            <div>
                <div className="project">
                    <img className='bg' src={browserTab} alt="" />
                    <img className='element' src={proj3} alt="" />
                </div>
                <div className="project">
                    <img className='bg' src={browserTab} alt="" />
                    <img className='element' src={proj4} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Projects;
