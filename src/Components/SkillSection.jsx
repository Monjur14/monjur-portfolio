import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SkillSection = () => {
  const mainRef = useRef(null);
  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const th1Ref = useRef(null);
  const bh1Ref = useRef(null);

  useEffect(() => {
    const mainElement = mainRef.current;
    const topElement = topRef.current;
    const bottomElement = bottomRef.current;
    const th1Element = th1Ref.current;
    const bh1Element = bh1Ref.current;

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainElement,
        start: '50% 50%',
        end: '100% 59%',
        scrub: 2,
        pin: true,
        // markers: true // Uncomment for debugging
      }
    });

    tl.to(topElement, { top: '-50%' }, 'a')
      .to(bottomElement, { top: '50%' }, 'a')
      .to(th1Element, { bottom: '-45%' }, 'a')
      .to(bh1Element, { top: '-55%' }, 'a');

    // Cleanup function
    return () => {
      if (tl) tl.kill(); // Kill the timeline
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Kill all scroll triggers
    };
  }, []);

  return (
    <div id="main" ref={mainRef}>
      <div className="top" ref={topRef}>
        <h1 className="th1" ref={th1Ref}>SKILLS</h1>
      </div>
      <div className="bottom" ref={bottomRef}>
        <h1 className="bh1" ref={bh1Ref}>SKILLS</h1>
      </div>
    </div>
  );
};

export default SkillSection;
