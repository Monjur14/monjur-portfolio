/* eslint-disable no-mixed-spaces-and-tabs */
const Hero = () => {
  return (
    <div className="w-full h-screen bg-black">
      <header className="contain">
        <nav className="flex justify-between items-center py-5">
            <img src="logo.svg" alt="" className="w-[130px] lg:w-36"/>
            <ul className="text-white hidden xmd:flex gap-6 text-lg font-semibold">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Skills</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
        <div className="flex flex-col lg:flex-row">
            <div className="basis-1/2">
                <div className=" border-white -space-y-[6rem] lg:-space-y-[5rem]">
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
            </div>
            <div className="basis-1/2">

            </div>
        </div>
      </header>
    </div>
  )
}

export default Hero
