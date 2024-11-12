import React, { useRef, useEffect } from 'react';
import './hero.css';
import BottomLeftBox from './BottomLeftBox';
import HighlightStrip from './HighlightStrip';
import gsap from 'gsap';


import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Hero() {
    const textRef = useRef(null);
    const textRef1 = useRef(null);
    const imgBorder = useRef(null);
    const img = useRef(null);

    useEffect(() => {
        function heroImgAnimate() {
            gsap.from(imgBorder.current, {
                scale: 0.9,
                duration: 1.1,
                overflow: "hidden",
                borderRadius: "var(--border-radius)",
                y: -60,
                ease: "power4.Out",
            });

            gsap.from(img.current, {
                scale: 1.4,
                y: 60,
                duration: 1.1,
                ease: "power4.Out",
            });
            gsap.from(img.current, {
                opacity: 0,
                duration: 1,
                ease: "power4.Out",
            });
        }
        heroImgAnimate();

        function textAnimate() {
            gsap.set(textRef1.current, { opacity: 0 });
            gsap.fromTo(
                textRef.current.querySelectorAll("span"),
                {
                    opacity: 0,
                    y: 200,
                    rotation: 22,
                    scale: 0.7,
                    duration: 2,
                },
                {
                    y: 0,
                    delay: 0.3,
                    opacity: 1,
                    scale: 1,
                    rotation: 0,
                    stagger: 0.04,
                    duration: 0.1,
                    ease: "elastic.out(1,0.3)",
                }
            );

            let tl = gsap.timeline();
            tl.fromTo(
                textRef1.current,
                {
                    opacity: 0,
                    rotation: 0,
                },
                {
                    opacity: 1,
                    rotation: 20,
                    duration: 0.2,
                    ease: "power2.out"
                })
                .to(
                    textRef1.current,
                    {
                        rotation: -20,
                        duration: 0.5,
                        ease: "power2.out"
                    })
                .to(
                    textRef1.current,
                    {
                        rotation: 0,
                        duration: 0.5,
                        ease: "power2.out",
                    });
        }
        textAnimate();
    }, []);

    return (
        <div className="hero-section">
            <div className="image-section" ref={imgBorder}>
                {/* <img src="./src/assets/hero-bg.jpg" alt="" ref={img} /> */}
                <div className="img"  ref={img} >
                <img className='img_1' data-scroll data-scroll-speed="2" src="./src/assets/heroSection-bg.jpg"/>
                <img className='img_2' data-scroll data-scroll-speed="4" src="./src/assets/heroSection-subject.png" alt="" />
                </div>

                <div className="text"  data-scroll data-scroll-speed="-0.8">
                    <p ref={textRef1}>Hey,</p>
                    <h1 ref={textRef}>
                        {Array.from("I'm Rishu").map((char, index) => (
                            <span key={index}>
                                {char === ' ' ? <span>&nbsp;</span> : char}
                            </span>
                        ))}
                    </h1>

                </div>
            </div>
            <BottomLeftBox />
            <HighlightStrip />
        </div>
    );
}

export default Hero;
