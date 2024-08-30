import { HiSearch } from "react-icons/hi";
import { IoLocateOutline, IoLocationOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="bg-gray-50 pt-24">
      <div className="flex flex-col items-center justify-center min-h-[60vh] py-16 px-6">
        <h1
          className="xl:text-7xl lg:text-5xl sm:text-3xl text-2xl 
              xl:leading-none lg:leading-normal font-bold text-center"
        >
          Find Your {""}
          <span className="bg-blue-600 text-white whitespace-pre px-2 ">
            Dream Job
          </span>{" "}
          in <br /> Addis Ababa
        </h1>
        <p className="text-2xl lg:w-1/2 text-clip leading-10 my-8">
          When you searching for a job, there are a few things you can do to ge
          the most out of your search
        </p>
        <div
          className="flex items-center bg-white border-2 border-solid border-blue-400 
              rounded-full h-16 lg:w-2/5 w-full  py-2 relative mt-4"
        >
          <input
            type="text"
            placeholder="job title or keyword"
            className="bg-transparent h-full w-full border-none outline-none 
                      absolute px-20 xl:text-2xl text-base"
          />
          <button
            className="bg-blue-500 rounded-full flex justify-center items-center text-white w-12 h-12
                  absolute left-2 border-none "
          >
            <HiSearch className="text-2xl items-center" />
          </button>
          <button
            className="flex items-center bg-gray-100 absolute right-2 
                   rounded-full lg:px-4 px-2 h-[90%] xl:text-xl text-sm font-normal gap-x-2 border-none "
          >
            <IoLocationOutline className="text-black lg:text-2xl" /> Any
            Location
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
