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
                projectParaRef.style.visibility = "visible"; // Use visibility instead of display
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
                projectParaRef.style.visibility = "hidden"; // Hide it instead of display:none
            }
        };
    
        projects.forEach(project => {
            project.addEventListener('mouseenter', () => handleMouseEnter(project));
            project.addEventListener('mouseleave', handleMouseLeave);
        });
    
        // Cleanup the event listeners
        return () => {
            projects.forEach(project => {
                project.removeEventListener('mouseenter', () => handleMouseEnter(project));
                project.removeEventListener('mouseleave', handleMouseLeave);
                if (projectParaRef) {
                    projectParaRef.style.visibility = "hidden"; // Ensure it's hidden on cleanup
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
