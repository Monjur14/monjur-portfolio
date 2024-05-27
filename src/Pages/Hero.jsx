/* eslint-disable react/no-unescaped-entities */
import SphereAnimation from "../Components/sphereAnimation"
import { Divide as Hamburger } from 'hamburger-react'


/* eslint-disable no-mixed-spaces-and-tabs */
const Hero = () => {
  
  return (
    <div className="w-full min-h-screen bg relative">

      {/* <div className="absolute w-4/12 h-full bg-transparent -right-0 z-30 ">

      </div> */}
      <div className="inset-1 absolute bg-gd"></div>
      <header className="contain head__bg">
        <nav className="flex justify-between items-center py-4 md:py-5">
            <img src="download1.svg" alt="" className="w-[130px] xsm:w-[140px] lg:w-36 xxl:w-40"/>
            <ul className="text-white hidden  gap-6 text-lg font-semibold">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Skills</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <span>
              <Hamburger size={40} color="#ccc"/>
            </span>
        </nav>
        <div className="flex flex-col xmd:flex-row items-center h-[85vh] gap-10 lg:gap-0 mt-0 xmd:mt-5">
            <div className="basis-1/2">
              
                <div className=" border-white -space-y-[6.5rem] xsm:-space-y-[5.83rem] md:-space-y-[4.4rem] xmd:-space-y-[4.8rem] lg:-space-y-[5.1rem] xxl:-space-y-[4.2rem] -mt-7 xsm:-mt-2 lg:-mt-3 xxl:-mt-28">
                    <svg className="svg1">
		                <text x="0px" y="50%" dy=".35em" className="text1">Hi, I am</text>
	                </svg>
                    <svg className="svg2">
		                <text x="0px" y="50%" dy=".35em" className="text2">Monjur Hossen</text>
	                </svg>
                    <svg className="svg3">
		                <text x="0px" y="50%" dy=".35em" className="text3">Frontend Web</text>
	                </svg>
                    <svg className="svg4">
		                <text x="0px" y="50%" dy=".35em" className="text4">Developer</text>
	                </svg>
                  
                </div>
                <div className=" border-white text-lowWhite pr-0 lg:pr-10">
                  <div className="-mt-9 md:-mt-5 xxl:mt-0 text-pretty font-semibold">
                    <p className="hidden md:inline hero_p">Passionate Frontend Developer</p><p className="inline hero_p text-sm xsm:text-base"> specializing in React.js.</p><p className="inline hero_p text-sm xsm:text-base"> I transform ideas into interactive and visually stunning web experiences.</p><p className="hidden md:inline hero_p"> Your Vision, My Code - Let's Build Something Extraordinary Together</p>
                  </div>
                </div>
                <div className="z-10 flex items-center border">
      
    </div>

            </div>
            <div className="basis-1/2 mb-10 flex justify-center items-center">
                <div className="w-screen lg:w-full xxl:w-[95%] border">
                    <SphereAnimation/>
                </div>
            </div>
        </div>
      </header>
    </div>
  )
}

export default Hero
