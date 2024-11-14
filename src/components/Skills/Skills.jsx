import React from 'react'
import "./Skills.css"
function Skills() {
    return (
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
                    <h3>Fronted</h3>
                    <p>Html / CSS</p>
                    <p>javaScript</p>
                    <p>React</p>
                    <p>Tailwind CSS</p>
                    <p>Bootstrap</p>
                </div>
                <div id="tools_tech" data-scroll data-scroll-speed="-1.2">
                    <h3>Tools & Tech</h3>
                    <p>Git</p>
                    <p>Github</p>
                    <p>Vs Code</p>
                    <p>Linux</p>
                    <p>Hoppscotch</p>
                </div>
                <div id="datbase" data-scroll data-scroll-speed="1.5">
                    <h3>Database</h3>
                    <p>SQL</p>
                    <p>Mongo DB</p>
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
            <div className="content" data-scroll data-scroll-speed="-3">
                <h1>SKILLS</h1>
                <p>
                    I am skilled in MERN stack development, leveraging MongoDB, Express.js, React, and Node.js to build robust, scalable web applications. I also have experience in RESTful API design and front-end development, ensuring seamless user experiences. Additionally, I'm proficient in Git for version control, enhancing collaboration and project management.
                </p>
            </div>


        </div>
    )
}

export default Skills