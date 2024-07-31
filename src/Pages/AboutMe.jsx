import TextRevealByWord from '../Components/TextRevealByWord';
const AboutMe = () => {

  return (
    <div className='h-[210vh] xsm:h-[220vh] w-full bg-[#000] -mt-14  md:pt-16 xxl:pt-24' >
      <div className="main-title z-50 relative pt-28" >
        <div className="sec-title">
          <span>About Me</span>
          <img src="dots.png" alt="" />
          <h1>About Me</h1>
        </div>
      </div>
      <div className='-mt-52 hidden lg:block ITCFont'>
        <TextRevealByWord text="The journey begins with a Passion to be a Software Engineer. Now, I'm a selectively skilled Frontend Web Developer, dedicated to producing high-quality, impactful digital experiences. With a keen focus on Innovation and Creativity. Let's collaborate to bring your digital vision to life with Passion and Precision." />
      </div>
      <div className='-mt-32 block lg:hidden ITCFont'>
        <TextRevealByWord text="The journey begins with a Passion to be a Software Engineer. Now, I'm a selectively skilled Frontend Web Developer. With a keen focus on Innovation and Creativity. I specialize in crafting immersive websites that captivate and engage users." />
      </div>
    </div>
  )
}

export default AboutMe;
