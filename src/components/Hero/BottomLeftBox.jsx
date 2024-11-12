import React, { useRef, useEffect } from 'react';
import "./BottomLeftBox.css";
import gsap from 'gsap';

export default function BottomLeftBox() {
    const boxAnimate = useRef(null);

    useEffect(() => {
        if (boxAnimate.current) {
            gsap.from(boxAnimate.current, {
                y: "80%",
                duration: 1,
                ease: "power1.inOut",
            });
        }
    }, []);

    return (
        <div className="info" ref={boxAnimate}>
            <div className="round-edge-top-left-1 round-edge"></div>
            <div className="round-edge-top-left-2 round-edge"></div>
        </div>
    );
}
