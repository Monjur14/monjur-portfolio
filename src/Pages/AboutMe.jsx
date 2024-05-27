import TextRevealByWord from '../Components/TextRevealByWord';
const AboutMe = () => {

  return (
    <div className='h-[220vh] w-full bg-[#000] pt-16 xxl:pt-24' >
      <div className="main-title z-50 relative" > {/* Assign the ref to the parent div */}
        <div className="sec-title">
          <span>About Me</span>
          <img src="dots.png" alt="" />
          <h1>About Me</h1>
        </div>
      </div>
      <div className='-mt-72 hidden lg:block'>
        <TextRevealByWord text="The journey begins with a passion to be a software engineer. Now, I'm a selectively skilled frontend web developer, dedicated to producing high-quality, impactful digital experiences. With a keen focus on innovation and creativity. Let's collaborate to bring your digital vision to life with passion and precision." />
      </div>
      <div className='-mt-72 block lg:hidden'>
        <TextRevealByWord text="The journey begins with a passion to be a software engineer. Now, I'm a selectively skilled frontend web developer. With a keen focus on innovation and creativity. I specialize in crafting immersive websites that captivate and engage users." />
      </div>
    </div>
  )
}

export default AboutMe;
