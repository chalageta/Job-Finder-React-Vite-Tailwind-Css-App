import { HiSearch } from "react-icons/hi"
import { IoLocateOutline } from "react-icons/io5"

const Hero = () => {
  return (
      <div className="bg-gray-50 pt-24">
          <div className="flex flex-col items-center justify-center min-h-[60vh] py-16 px-6">
              <h1 className="xl:text-7xl lg:text-5xl sm:text-3xl text-2xl 
              xl:leading-none lg:leading-normal font-bold text-center">Find Your {""}
                  <span className="bg-blue-600 text-white whitespace-pre px-2 ">Dream Job</span> in <br /> Addis Ababa</h1>
              <p className="text-2xl lg:w-1/2 text-clip leading-10 my-8">When you searching  for a job, there are a few things you can do 
                  to ge the most out of your search
              </p>
              <div className="flex items-center border-2 border-solid border-blue-600 
              rounded-full h-16 lg:w-2/5 w-full  py-2">
                  <input type="text" placeholder="job title or keyword" />
                  <button>
                      <HiSearch />
                  </button>
                  <button>
                      <IoLocateOutline /> Any Location

                  </button>
              </div>
          </div>
    </div>
  )
}

export default Hero