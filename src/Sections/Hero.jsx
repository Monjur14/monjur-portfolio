/* eslint-disable react/no-unescaped-entities */
import SphereAnimation from "../Components/sphereAnimation"

/* eslint-disable no-mixed-spaces-and-tabs */
const Hero = () => {
  return (
    <div className="w-full bg-black">
      <header className="contain">
        <nav className="flex justify-between items-center py-4 md:py-5">
            <img src="download1.svg" alt="" className="w-[130px] lg:w-36"/>
            <ul className="text-white hidden xmd:flex gap-6 text-lg font-semibold">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Skills</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0">
            <div className="basis-1/2">
                <div className=" border-white -space-y-[6.18rem] lg:-space-y-[5rem] -mt-7 lg:-mt-3">
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
                  <div className="-mt-9 lg:-mt-5 text-pretty text-sm sm:text-base">
                    <p className="hidden md:inline hero_p">Passionate Frontend Developer</p><p className="inline hero_p"> specializing in React.js.</p><p className="inline hero_p"> I transform ideas into interactive and visually stunning web experiences.</p><p className="hidden md:inline hero_p"> Your Vision, My Code - Let's Build Something Extraordinary Together</p>
                  </div>
                </div>
            </div>
            <div className="basis-1/2 mb-10">
                <div className="w-full lg:w-[30rem] mx-auto">
                    <SphereAnimation/>
                </div>
            </div>
        </div>
      </header>
    </div>
  )
}

export default Hero
