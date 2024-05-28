import { cn } from "../../Utils"
import AnimatedShinyText from "../Components/AnimatedShinyText"

const Test = () => {
  return (
    <div className="h-screen w-full">
      <h1>This is test component</h1>
      <h1 className="text-[3rem] fnt">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore laborum unde temporibus consequatur. Quod iure animi quam velit illo numquam assumenda optio quidem! Culpa vel ab illum fugiat maiores non accusamus mollitia ea, dolores assumenda facere! Voluptatem ea porro praesentium. Quas optio assumenda incidunt tempore odit maxime explicabo doloribus sunt!</h1>
      <div
        className={cn(
          "group rounded-full border border-black text-[#ccc] bg-neutral-100 text-base transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 ",
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300">
          <span>✨ Introducing Magic UI</span>
        </AnimatedShinyText>
      </div>
    </div>
  )
}

export default Test
