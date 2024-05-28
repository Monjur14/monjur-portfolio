import BoxReveal from '../Components/BoxReveal'
import planet from '../assets/planet.png'
const WhatIDo = () => {
  return (
    <div className='min-h-[120vh] w-full bg-[#000]'>
      <div className='contain'>
      <div className="main-title">
            <div className="sec-title">
              <span>What I Do</span>
              <img src="dots.png" alt="" />
              <h1>What I Do</h1>
            </div>
            <p>This is my project showcase</p>
          </div>
          <div className='h-full w-full flex items-center ITCFont'>
            <div className='basis-1/2  w-full h-full'>
            <BoxReveal boxColor={"#EC5938"} duration={0.5}>
        <p className="text-[3.3rem] font-semibold text-lowWhite">
        Frontend Web Development<span className="text-[#EC5938]">.</span>
        </p>
      </BoxReveal>
            <BoxReveal boxColor={"#EC5938"} duration={0.5}>
        <p className="text-[3.3rem] font-semibold text-lowWhite">
        MERN Stack Development<span className="text-[#EC5938]">.</span>
        </p>
      </BoxReveal>
            <BoxReveal boxColor={"#EC5938"} duration={0.5}>
        <p className="text-[3.3rem] font-semibold text-lowWhite">
        WordPress Development<span className="text-[#EC5938]">.</span>
        </p>
      </BoxReveal>
            <BoxReveal boxColor={"#EC5938"} duration={0.5}>
        <p className="text-[3.3rem] font-semibold text-lowWhite">
        Motion Graphics Design<span className="text-[#EC5938]">.</span>
        </p>
      </BoxReveal>
            <BoxReveal boxColor={"#EC5938"} duration={0.5}>
        <p className="text-[3.3rem] font-semibold text-lowWhite">
        3D Visualization<span className="text-[#EC5938]">.</span>
        </p>
      </BoxReveal>
            </div>
            <div className='basis-1/2  w-full h-full'>
               <img src={planet} alt="" className='w-full'/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default WhatIDo
