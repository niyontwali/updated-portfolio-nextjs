import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { BiErrorCircle, BiSad } from "react-icons/bi";
import Loader from "../../components/Loader";
import { GET_LEARNING } from "../../services/learningsqueries";
import LearningsPost from "../../components/LearningsPost";

const LearningDetail = () => {
  const router = useRouter();
  let { id } = router.query;
  id = parseInt(id);

  const { loading, error, data } = useQuery(GET_LEARNING, {
    variables: { id },
  });

  if (loading)
    return (
      <div className="h-screen">
        <Loader/>
      </div>
    );
  if (error)
    return (
      <div className="mt-8 px-10 w-fit">
        <div className="flex justify-center my-4">
          <BiErrorCircle size={60} className="text-red-600" />
        </div>
        <p className="flex items-center text-lg text-red-600 font-bold">
          Oops Something Went Wrong, check your network and reload the page!
        </p>
      </div>
    );

  return (
    <div className="min-h-screen">
      {!loading && !error && <LearningsPost learning={data.oneLearning} />}
    </div>
  );
};

export default LearningDetail;
