import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);


const Skills = () => {
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
            // markers: true,
            start: '50% 50%',
            end: '100% 50%',
            scrub: 2,
            pin: true
        }
    })
    tl.to(topElement, { top: '-50%' }, 'a')
      .to(bottomElement, { top: '50%' }, 'a')
      .to(th1Element, { top: '65%' }, 'a')
      .to(bh1Element, { top: '-65%' }, 'a');

    return () => {
        if (tl) tl.kill(); // Kill the timeline
        ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Kill all scroll triggers
      };
  }, [])

  return (
    <div className="main overflow-hidden" ref={mainRef}>
      <div className="top" ref={topRef}>
        <h1 ref={th1Ref} className='ITCFont'>SKILLS</h1>
      </div>
      <div className="bottom" ref={bottomRef}>
        <h1 ref={bh1Ref} className='ITCFont'>SKILLS</h1>
      </div>
    </div>
  )
}

export default Skills
