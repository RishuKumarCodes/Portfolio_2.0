import React from 'react'
import "./SmallWidthContact.css"
import "./mountain.css"

import L1 from '/mountainLayers/layer_1.svg'
import L2 from '/mountainLayers/layer_2.svg'
import L3 from '/mountainLayers/layer_3.svg'
import L4 from '/mountainLayers/layer_4.svg'
import L5 from '/mountainLayers/layer_5.svg'

import linkedin from "/socialMedia/linkedin.svg"
import twitter from "/socialMedia/twitter.svg"
import leetcode from "/socialMedia/leetcode.svg"
import github from "/socialMedia/github.svg"

function SmallWidthContact() {
    return (
        <>
            <div className="mountain" data-scroll>
                <img id='fifth' src={L5} data-scroll data-scroll-speed="-3.25" />
                <img id='fourth' src={L4} data-scroll data-scroll-speed="-2.4" />
                <img id='third' src={L3} data-scroll data-scroll-speed="-1.6" />
                <img id='sec' src={L2} data-scroll data-scroll-speed="-1.2" />
                <img id='first' src={L1} data-scroll data-scroll-speed="0" />
            </div>
            <div id='SmallWidthContact'>
                <h1>LET'S WORK TOGATHER...</h1>

                <div className="mail-no">
                    <p className="phone">8789752730</p>
                    <a href="mailto:rishukumar9233@gmail.com" target="_blank" rel="noopener noreferrer" className="email">
                        rishukumar9233@gmail.com
                    </a>
                </div>

                <div className="socials">
                    <a target='_blank' href="https://www.linkedin.com/in/rishukumarcodes/"><img src={linkedin} alt="linkedin" /></a>
                    <a target='_blank' href="https://x.com/Rishu_kumar878"><img src={twitter} alt="twitter" /></a>
                    <a target='_blank' href="https://leetcode.com/u/rishukumarcodes/"><img src={leetcode} alt="leetcode" /></a>
                    <a target='_blank' href="https://github.com/RishuKumarCodes"><img src={github} alt="github" /></a>
                </div>

                <form action="">
                    <input type="text" placeholder="Your name" />
                    <input type="email" placeholder="Your email" />
                    <input type="text" placeholder="Name of your organisation" />
                    <input type="text" placeholder="What services are you looking for?" />
                    <textarea type="text" placeholder="Your message" />
                    <button>submit</button>
                </form>
                <p className='copyright'>&copy; 2024 Rishu-Kumar</p>
            </div>

        </>
    )
}

export default SmallWidthContact