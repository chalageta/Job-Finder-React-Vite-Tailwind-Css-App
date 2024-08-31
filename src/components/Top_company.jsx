import google from "./assets/google.png";
import microsoft from "./assets/microsoft.png";
import waliif from "./assets/waliif.jpg";
import gilando from "./assets/gilando.jpg";

import { HiOutlineHeart, HiStar } from "react-icons/hi";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const response = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Top_company = () => {
  const Jobs = ({ type, title, img, bgColor, color }) => {
    return (
      <div className="shadow lg:w-[95%] mt-12">
        <div className="bg-gray-50  rounded-t-md px-6 py-8 flex flex-col items-center">
          <span className="flex items-center justify-between w-full">
            <button
              className="flex items-center bg-transparent rounded-full text-lg 
             font-semibold text-black px-8 py-2 outline-none  hover:bg-gray-100 transition-colors
             duration-300"
              style={{ border: `solid 3px ${color}` }}
            >
              {type}
              <HiOutlineHeart className="ml-2 text-red-500" />
            </button>
          </span>
          <img
            src={img}
            alt={title}
            className="w-28 h-28 object-cover rounded-full mt-4 shadow-md"
          />
        </div>
        <div
          className="bg-gray-50 p-6 rounded-b-md"
          style={{ backgroundColor: `${bgColor}` }}
        >
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">Addis Ababa, Gulale</p>
          <div className="pb-4">
            {" "}
            {[
              ...Array(5).map((_, index) => {
                return (
                  <HiStar key={index} className="text-yellow-300 text-2xl" />
                );
              }),
            ]}
          </div>
          <div className="flex justify-between items-center border-t pt-4">
            <p className="text-gray-700 font-semibold">Salary</p>
            <p className="text-blue-600 font-bold">ETB 35000</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-6  py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-800 mb-6 md:mb-0">
            Top Company Registered
          </h2>
          <div className="flex gap-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300">
              Browse Jobs
            </button>
            <button className="bg-transparent border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300">
              See all companies
            </button>
          </div>
        </div>
        <p className="mt-4 text-gray-600 text-center text-2xl md:text-left">
          Know your worth and find the job that qualifies your life.
        </p>

        <div>
          <Carousel
            responsive={response}
            infinite={true}
            autoPlay={true}
            swipeable={true}
            draggable={false}
            autoPlaySpeed={3000}
            ssr={true}
            keyBoardControl={true}
            showDots={true}
            arrows={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <Jobs
              bgColor="#f4f4ff"
              color="#1D5831"
              img={google}
              title="Web Design"
              type="Internship"
            />
            <Jobs
              bgColor="#079E35"
              color="#1F0775"
              img={waliif}
              title="Project Manager"
              type="Permanent"
            />

            <Jobs
              bgColor="#740151"
              color="#4b4e4c"
              img={waliif}
              title="Product Design"
              type="Internship"
            />
            <Jobs
              bgColor="#3E3ED6"
              color="#4b4e4c"
              img={gilando}
              title="Product Design"
              type="Internship"
            />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Top_company;
