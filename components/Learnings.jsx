/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { BsBook } from "react-icons/bs";
import LearningCard from "./LearningCard";

const Learnings = () => {
  return (
    <div className="w-full lg:min-h-screen flex flex-col lg:flex-row px-4 sm:px-8 md:px-48">
      <div className="lg:w-1/2 pt-24 lg:pt-[30vh] lg:fixed lg:right-10">
        <div className="max-w-[500px] mx-auto">
          <div className="flex flex-col justify-center items-center">
            <BsBook size={60} className="rotate-12 text-[#2d98a8]" />
            <h3 className="tracking-wide text-xl lg:text-3xl text-center">
              Welcome to my Learning Store Board
            </h3>
          </div>
          <div className="mt-12">
            <p className="bg-[#92deea] dark:bg-[#2f3336] p-4 border-l-4 border-black font-[500] tracking-wide text-lg rounded">
              This is where I share with the public a summary of what I learned.
              I would encourage you to read everything line by line and try to
              code a long. This will help you acquire all the knowledge within
              the summary.
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 mt-32">
        <div className="flex flex-wrap gap-6">
          {/* Card */}
          <LearningCard />
          <LearningCard />
          <LearningCard />
          <LearningCard />
          <LearningCard />
          <LearningCard />
          <LearningCard />
          <LearningCard />
          <LearningCard />
        </div>
      </div>
    </div>
  );
};

export default Learnings;
