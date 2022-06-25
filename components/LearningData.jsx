import { useQuery } from "@apollo/client";
import { BiErrorCircle, BiSad } from "react-icons/bi";

import { GET_LEARNINGS } from "../services/learningsqueries";
import Learning from "../skeletons/Learning";
import LearningsCard from "./LearningsCard";

const LearningData = () => {
  const { loading, error, data } = useQuery(GET_LEARNINGS);

  if (loading)
    return (
      <div className="lg:px-10 mt-4 flex flex-col gap-4">
        <Learning />
        <Learning />
        <Learning />
      </div>
    );
  if (error)
    return (
      <div className="mt-[15vh] px-10 w-fit">
        <div className="flex justify-center my-4">
          <BiErrorCircle size={60} className="text-red-600" />
        </div>
        <p className="text-center text-lg text-red-600 font-bold">
          Oops Something Went Wrong, check your network and reload the page!
        </p>
      </div>
    );

  if (data.allLearnings.length === 0)
    return (
      <div className="mt-8 px-10 w-fit">
        <div className="flex justify-center my-4">
          <BiSad size={60} className="text-[#e29f72]" />
        </div>
        <p className="flex items-center text-lg text-[#0284c7] font-bold text-center lg:text-left">
          Currently no Learned resources available!
        </p>
      </div>
    );
  return (
    <>
      {!loading &&
        !error &&
        data.allLearnings.map((learning) => {
          return (
            <div className="mt-4" key={learning.id}>
              <LearningsCard learning={learning} />
            </div>
          );
        })}
    </>
  );
};

export default LearningData;
