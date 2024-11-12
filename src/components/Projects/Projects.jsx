import React, { useEffect } from 'react';
import gsap from 'gsap';
import "./projects.css";

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
        <div className="projects">
            <h1>PROJECTS</h1>
            <div>
                <div className="project">
                    <img className='bg' src="src/assets/browserTab.svg" alt="" />
                    <img className='element' src="src/assets/projects/portfolio.png" alt="" />
                </div>
                <div className="project">
                    <img className='bg' src="src/assets/browserTab.svg" alt="" />
                    <img className='element' src="src/assets/projects/baasskyy.png" alt="" />
                </div>
            </div>
            <div>
                <div className="project">
                    <img className='bg' src="src/assets/browserTab.svg" alt="" />
                    <img className='element' src="src/assets/projects/spotify.png" alt="" />
                </div>
                <div className="project">
                    <img className='bg' src="src/assets/browserTab.svg" alt="" />
                    <img className='element' src="src/assets/projects/harryPotter.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Projects;
