import React, { useEffect } from 'react';
import './Skills.css';
import './techStack.css';
import { gsap } from 'gsap';

function Skills() {
    useEffect(() => {
        const textEffect = () => {
            const words = document.querySelectorAll(".content p p p");
            gsap.fromTo(".content h1",
                {
                    top: "200%",
                    opacity: 0,
                },
                {
                    top: 0,
                    opacity: 1,
                    duration: 0.2,
                    delay:0.3
                }
            );
            gsap.fromTo(words,
                {
                    top: "100%",
                    // stagger: 0.04,
                },
                {
                    top: 0,
                    stagger: 0.02,
                    delay:0.3,
                    ease: "power2.out",
                }
            );
            gsap.fromTo(".tech-stack ",
                {
                    opacity: 0,
                }, {
                    opacity: 1,
                    delay: 0.5,
                    duration:1.5
            })
            gsap.fromTo(".tech-stack ",
                {
                    y:"10%"
                }, {
                    y:0,
                    delay: 0.5,
                    duration:0.5
            })
        };

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    textEffect();
                }
            },
            { threshold: 0 } // 10% of the element should be in view
        );

        const aboutElement = document.querySelector("#skills");
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
            <div id="skills">
                <div className="tech-stack" data-scroll>
                    <div id="backend" data-scroll data-scroll-speed="2">
                        <h3>Backend</h3>
                        <p>JavaScript</p>
                        <p>Node.js</p>
                        <p>Express.js</p>
                        <p>RESTful APIs</p>
                    </div>
                    <div id="frontend" data-scroll data-scroll-speed="0">
                        <h3>Frontend</h3>
                        <p>HTML / CSS</p>
                        <p>JavaScript</p>
                        <p>React</p>
                        <p>Tailwind CSS</p>
                        <p>Bootstrap</p>
                    </div>
                    <div id="tools_tech" data-scroll data-scroll-speed="-1.2">
                        <h3>Tools & Tech</h3>
                        <p>Git</p>
                        <p>GitHub</p>
                        <p>VS Code</p>
                        <p>Linux</p>
                        <p>Hoppscotch</p>
                    </div>
                    <div id="database" data-scroll data-scroll-speed="1.5">
                        <h3>Database</h3>
                        <p>SQL</p>
                        <p>MongoDB</p>
                    </div>
                    <div id="languages" data-scroll data-scroll-speed="1.5">
                        <h3>Languages</h3>
                        <p>C / C++</p>
                        <p>Java</p>
                        <p>JavaScript</p>
                        <p>SQL</p>
                    </div>
                    <div id="ui-ux" data-scroll data-scroll-speed="2.3">
                        <h3>UI/UX</h3>
                        <p>Photoshop</p>
                        <p>Illustrator</p>
                        <p>Figma basics</p>
                        <p>Canva</p>
                    </div>
                    <div id="problem-solving" data-scroll data-scroll-speed="0">
                        <h3>Problem-solving</h3>
                        <p>Data Structures</p>
                        <p>Algorithms</p>
                        <p>LeetCode</p>
                    </div>
                </div>
                <div className="content" data-scroll data-scroll-speed="-2">
                    <div className="heading">
                        <h1>SKILLS</h1>
                    </div>
                    <p>
                        {`I am skilled in MERN stack development, building robust, scalable web applications. I also have experience in RESTful API design and front-end development, ensuring seamless user experiences. Additionally, I'm proficient in Git for version control, enhancing collaboration and project management.`.split(' ').map((word, index) => (
                            <p className='wordBox'><p className='word' key={index}>{word} </p></p>
                        ))}
                    </p>
                </div>
            </div>

            <div className="tech-stack-small-width">
                <div>
                    <h3>Backend</h3>
                    <p>JavaScript</p>
                    <p>Node.js</p>
                    <p>Express.js</p>
                    <p>RESTful APIs</p>
                </div>
                <div>
                    <h3>Frontend</h3>
                    <p>HTML / CSS</p>
                    <p>JavaScript</p>
                    <p>React</p>
                    <p>Tailwind CSS</p>
                    <p>Bootstrap</p>
                </div>
                <div>
                    <h3>Problem-solving</h3>
                    <p>Data Structures</p>
                    <p>Algorithms</p>
                    <p>LeetCode</p>
                </div>
                <div>
                    <h3>Database</h3>
                    <p>SQL</p>
                    <p>MongoDB</p>
                </div>
                <div>
                    <h3>Tools & Tech</h3>
                    <p>Git</p>
                    <p>GitHub</p>
                    <p>VS Code</p>
                    <p>Linux</p>
                    <p>Hoppscotch</p>
                </div>
                <div>
                    <h3>Languages</h3>
                    <p>C / C++</p>
                    <p>Java</p>
                    <p>JavaScript</p>
                    <p>SQL</p>
                </div>
                <div>
                    <h3>UI/UX</h3>
                    <p>Photoshop</p>
                    <p>Illustrator</p>
                    <p>Figma basics</p>
                    <p>Canva</p>
                </div>
            </div>
        </>
    );
}

export default Skills;
