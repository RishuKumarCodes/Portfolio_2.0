import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import "./HighlightStrip.css"

function HighlightStrip() {

  const boxAnimate = useRef(null);

  useEffect(() => {
    if (boxAnimate.current) {
      gsap.from(boxAnimate.current, {
        y: "80%",
        duration: 1,
        ease: "back.inOut(1)",
      });
    }
  }, []);

  return (
    <div className='highlight-strip' ref={boxAnimate}>
        <div className="round-edge-top-left-3 round-edge"></div>
        <p> asdf asdf asdf asdf asdf asdf asdf asdf asdf </p>
    </div>
  )
}

export default HighlightStrip