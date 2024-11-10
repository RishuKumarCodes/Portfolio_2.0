import './SiteBorder.css'
import NavBox from './NavBox'
import Sidebar from './Sidebar'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Skills from '../components/Skills/Skills'
import CursorComponent from './CursorComponent'

function SiteBorder() {
  return (
    <>
    <CursorComponent/>
      <div className='outer-frame'>
        <Sidebar />
        <div className='left'>
          <div className="nav-small-screen">
            <a href="#">About</a>
            <a href="#">projects</a>
            <a href="#">Contact</a>
          </div>
          <div className="site-border">
            <NavBox />
            <Hero />
            <About />
            <Skills />
            <hr />
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
          </div>
        </div>
      </div>
    </>
  )
}

export default SiteBorder
