import React from 'react'
import "./Sidebar.css"
function Sidebar() {
    return (
        <div className='sidebar-container'>
            <div className="sidebar">
                <div className="Get-cv-btn">
                    <a href="">Get CV</a>
                </div>
                <br />
                <div className='big-height'>
                    <a href="#">Linkedin</a>
                    <a href="#">Twitter</a>
                    <hr />
                    <a href="#">leetcode</a>
                    <a href="#">Github</a>
                </div>
                <div className='small-height'>
                    <a href="#"><img src="src\assets/socialMedia/linkedin.svg" alt="" /></a>
                    <a href="#"><img src="src\assets/socialMedia/twitter.svg" alt="" /></a>
                    <hr />
                    <a href="#"><img src="src\assets/socialMedia/github.svg" alt="" /></a>
                    <a href="#"><img src="src\assets/socialMedia/leetcode.svg" alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar