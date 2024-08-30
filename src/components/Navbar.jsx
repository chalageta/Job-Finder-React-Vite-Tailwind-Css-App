import { useState } from "react";
import { MdClose } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const showDropdown = () => {
    setDropdown(!dropdown);
  };
  return (
    <nav className=" fixed w-full h-24  flex flex-col justify-center items-center border-b border-gray-200 bg-white  top-0 z-50 ">
      <div className="mx-auto container lg:p-6">
        <div className="lg:w-full w-11/12 mx-auto h-full flex justify-between items-center">
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center gap-y-4">
              <span className="flex items-center lg:text-5xl text-3xl">
                <img src="./hope.jpg" alt="logo" className="w-30 h-20" />
                <button
                  className="rounded-full items-center text-white
                               bg-blue-600 lg:text-5xl outline-none border-none text-3xl p-3 py-2 "
                >
                  Hope
                </button>
                <p className="font-semibold leading-tight">Job</p>
              </span>
            </div>
          </div>
          <ul className="flex flex-1 justify-center items-center xl: gap-12 gap-x-4 max-lg:hidden">
            <a
              href="#"
              className="leading-normal no-underline text-black 
                      font-bold text-lg hover:text-blue-600"
            >
              Find Jobs
            </a>
            <a
              href="#"
              className="leading-normal no-underline text-black 
                      font-bold text-lg hover:text-blue-600"
            >
              Peoples
            </a>
            <a
              href="#"
              className="leading-normal no-underline text-black 
                      font-bold text-lg hover:text-blue-600"
            >
              Hiring Sites
            </a>
            <a
              href="#"
              className="leading-normal no-underline text-black 
                      font-bold text-lg hover:text-blue-600"
            >
              Resume
            </a>
          </ul>
          <div className="flex max-lg:hidden gap-x-4 ">
            <button
              className="rounded-full text-lg border-none
                       bg-gray-50 text-black font-bold px-8 py-3 hover:btn"
            >
              Sign Up
            </button>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800
                       focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2
                        dark:bg-blue-600 dark:hover:bg-blue-700
                        focus:outline-none dark:focus:ring-blue-800"
            >
              Login
            </button>
          </div>
          {dropdown ? (
            <div
              className="lg:hidden text-[22px] cursor-pointer text-black"
              onClick={showDropdown}
            >
              {" "}
              <MdClose />{" "}
            </div>
          ) : (
            <div
              className="lg:hidden text-[22px] cursor-pointer text-black"
              onClick={showDropdown}
            >
              {" "}
              <HiMenuAlt3 />
            </div>
          )}
        </div>
        {dropdown ? (
          <div
            onClick={showDropdown}
            className="lg:hidden w-full h-screen
                   fixed top-24 bg-black ease-in-out duration-100"
          >
            <div className="w-full h-[320px] flex flex-col items-baseline pt-8 gap-4">
              <ul className="text-center p-0 flex flex-col justify-center w-full gap-y-8">
                <a
                  href="#"
                  className="leading-normal no-underline text-white 
                      font-bold text-lg hover:text-blue-600"
                >
                  Find Jobs
                </a>
                <a
                  href="#"
                  className="leading-normal no-underline text-white 
                      font-bold text-lg hover:text-blue-600"
                >
                  Peoples
                </a>
                <a
                  href="#"
                  className="leading-normal no-underline text-white 
                      font-bold text-lg hover:text-blue-600"
                >
                  Hiring Sites
                </a>
                <a
                  href="#"
                  className="leading-normal no-underline text-white 
                      font-bold text-lg hover:text-blue-600"
                >
                  Resume
                </a>
              </ul>
              <div className="flex flex-col justify-center w-full gap-y-8 mt-4">
                <button
                  className="rounded-full text-lg border-none
                       bg-gray-50 text-black font-bold px-8 py-3 hover:btn"
                >
                  Sign Up
                </button>
                <button
                  className="text-white bg-blue-700 hover:bg-blue-800
                       focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-sm px-8 py-3
                        dark:bg-blue-600 dark:hover:bg-blue-700
                        focus:outline-none dark:focus:ring-blue-800"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
