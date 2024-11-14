import React from 'react'
import "./Sidebar.css"

import linkedin from  "/socialMedia/linkedin.svg"
import twitter from  "/socialMedia/twitter.svg"
import leetcode from  "/socialMedia/leetcode.svg"
import github from  "/socialMedia/github.svg"

function Sidebar() {
    return (
        <div className='sidebar-container'>
            <div className="sidebar">
                <div className="Get-cv-btn">
                    <a href="#">Get CV</a>
                </div>
                <br />
                <div className='big-height'>
                    <a target='_blank' href="https://www.linkedin.com/in/rishukumarcodes/">Linkedin</a>
                    <a target='_blank' href="https://x.com/Rishu_kumar878">Twitter</a>
                    <hr />
                    <a target='_blank' href="https://leetcode.com/u/rishukumarcodes/">leetcode</a>
                    <a target='_blank' href="https://github.com/RishuKumarCodes">Github</a>
                </div>
                <div className='small-height'>
                    <a target='_blank' href="https://www.linkedin.com/in/rishukumarcodes/"><img src={linkedin} alt="" /></a>
                    <a target='_blank' href="https://x.com/Rishu_kumar878"><img src={twitter} alt="" /></a>
                    <hr />
                    <a target='_blank' href="https://leetcode.com/u/rishukumarcodes/"><img src={leetcode} alt="" /></a>
                    <a target='_blank' href="https://github.com/RishuKumarCodes"><img src={github} alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar