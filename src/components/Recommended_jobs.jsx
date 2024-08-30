/* eslint-disable react/prop-types */
import google from "./assets/google.png";
import microsoft from "./assets/microsoft.png";
import waliif from "./assets/waliif.jpg";
import gilando from "./assets/gilando.jpg";
import { GrAnnounce } from "react-icons/gr";
import { HiOutlineHeart } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { LiaDotCircle } from "react-icons/lia";

const Recommended_jobs = () => {
  // eslint-disable-next-line react/prop-types
  const Categories = ({ image, title, opening }) => {
    return (
      <div
        className="bg-white shadow-lg rounded-lg p-6 flex 
      justify-between items-center lg:text-2xl transition-transform transform hover:scale-105"
      >
        <span className="flex items-center gap-x-4">
          <img src={image} alt={title} className="w-10 h-10 object-cover" />
          <p className="font-semibold text-gray-700">{title}</p>
        </span>
        <p className="text-gray-600 font-medium">{opening} Openings</p>
      </div>
    );
  };
  const Recommended = ({
    time,
    type,
    title,
    amount,
    country,
    job,
    // eslint-disable-next-line no-unused-vars
    bgColor,
    color,
  }) => {
    return (
      <div
        className="w-full rounded-[10px] shadow  "
        style={{ borderLeft: `6px solid ${color}` }}
      >
        <div className="bg-white w-full p-8 rounded-t-[10px]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-x-2">
              <button className="text-gray-500 hover:text-blue-500 ">
                <GrAnnounce className="gap-x-4 h-12 w-12" />
              </button>
              <div className="text-gray-700">
                <p className="font-semibold">Type: {type}</p>
                <p className="text-sm">Experience: {time} Years</p>
              </div>
            </div>
            <button className="text-red-500 hover:text-red-600">
              <HiOutlineHeart className="w-10 h-12" />
            </button>
          </div>

          <div className="mb-4">
            <p className="text-xl font-bold text-gray-800">{title}</p>
            <p className="text-gray-600">Salary: ${amount} / year</p>
          </div>
        </div>

        <div className="bg-gray-50 p-4 flex justify-between items-center">
          <div className="flex items-center gap-x-4 text-gray-600">
            <span className="flex items-center gap-x-1">
              <IoLocationOutline />
              <p>{country}</p> |
            </span>
            <span className="flex items-center gap-x-1">
              <LiaDotCircle />
              <p>{job}</p>
            </span>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
            Apply Now
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto py-8 px-6">
        <div className="md:flex items-center justify-between">
          <h2 className="xl:text-5xl lg:text-3xl text-2xl font-semibold">
            Recommended Jobs
          </h2>
          <span className="md:flex gap-x-4">
            <button
              className="bg-blue-600 text-white font-semibold py-2
             px-4 rounded-full hover:bg-blue-700 transition-colors"
            >
              Latest Jobs
            </button>
            <button
              className="bg-gray-200 text-gray-800 font-semibold
             py-2 px-4 rounded-full hover:bg-gray-300 transition-colors"
            >
              Premium Jobs
            </button>
          </span>
        </div>
        <p className="text-2xl mt-4 font-light">
          Explore Suggested job searches
        </p>
        <div className="xl:flex mt-16 gap-x-8">
          <div className="xl:w-2/5">
            <div className="bg-white rounded-[10px] py-8 pl-6 mb-4">
              <h2 className="text-4xl font-semibold">Job Categories</h2>
            </div>
            <div className="flex flex-col gap-y-2">
              <Categories image={google} opening={3} title="Technology" />
              <Categories image={microsoft} opening={1} title="Business" />
              <Categories image={waliif} opening={2} title="Education" />
              <Categories image={gilando} opening={4} title="Biomedical" />
            </div>
          </div>
          <div className="xl:w-3/5 flex flex-col gap-y-5 xl:mt-0 mt-6">
            <Recommended
              amount={100000 - 300000}
              bgColor="#f4f4ff"
              color="#740639"
              country="Ethiopia"
              job="Full stackdeveloper"
              time={4}
              title="Full Stack Developer"
              type="Full Time"
            />
            <Recommended
              amount={100000 - 200000}
              bgColor="#f4f4ff"
              color="#2BA153"
              country="Ethiopia"
              job="Accountant"
              time={0}
              title="Accountant"
              type="Full Time"
            />
            <Recommended
              amount={100000}
              bgColor="#664545"
              color="#1A10A7"
              country="Ethiopia"
              job="Full stackdeveloper"
              time={3}
              title="IT Officer"
              type="Permanent"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommended_jobs;
