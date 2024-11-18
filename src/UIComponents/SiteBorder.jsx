import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './SiteBorder.css';
import NavBox from './NavBox';
import Sidebar from './Sidebar';
import CursorComponent from './CursorComponent';
import Hamburger from './Hamburger';

function SiteBorder({ locoScroll }) {
  const sidebarCorner1 = useRef(null);
  const sidebarCorner2 = useRef(null);

  useEffect(() => {
    gsap.from(sidebarCorner1.current, {
      x: -50,
      delay: 0.8,
      duration: 0.6,
    });
    gsap.from(sidebarCorner2.current, {
      x: -50,
      delay: 0.8,
      duration: 0.6,
    });
  }, []);

  return (
    <>
      <CursorComponent />
      <div className='siteborder'>
        <NavBox locoScroll={locoScroll} />
        <Sidebar />
        <Hamburger />
        <div className="top-space sp"></div>
        <div className="bottom-space sp"></div>
        <div className="right-space sp"></div>
        <div className="corners">
          <div className="t-1" ref={sidebarCorner1}></div>
          <div className="t-2"></div>
          <div className="b-1" ref={sidebarCorner2}></div>
          <div className="b-2"></div>
        </div>
      </div>
    </>
  );
}

export default SiteBorder;
