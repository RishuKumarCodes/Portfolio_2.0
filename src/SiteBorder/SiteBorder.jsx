import { useState } from 'react'
import './SiteBorder.css'
import NavBox from './NavBox'
function SiteBorder() {
  const [count, setCount] = useState(0)

  return (
    <div className='outer-frame'>
      <div className='sidebar-container'>
        <div className="sidebar">
          <a href="#">Linkedin</a>
          <a href="#">Twitter</a>
          <a href="#">leetcode</a>
        </div>
      </div>
      <div className='left'>
        <div class="nav-small-screen">
          <a href="#">About</a>
          <a href="#">projects</a>
          <a href="#">Contact</a>
        </div>
        <div className="site-border">
          <NavBox />
        </div>
      </div>
    </div>
  )
}

export default SiteBorder
