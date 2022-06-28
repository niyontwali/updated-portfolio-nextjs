import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { BiErrorCircle, BiSad } from "react-icons/bi";
import Loader from "../../components/Loader";
import { GET_LEARNING } from "../../services/learningsqueries";
import LearningsPost from "../../components/LearningsPost";
import Head from "next/head";

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
        <Loader />
      </div>
    );
  if (error)
    return (
      <div className="pt-[8vh] px-10 flex justify-center items-center min-h-screen ">
        <div className="flex">
          <BiErrorCircle size={60} className="text-red-600" />
        </div>
        <p className=" text-lg text-red-600 font-bold ">
          Oops Something Went Wrong, check your network and reload the page!
        </p>
      </div>
    );

  return (
    <>
      <Head>
        <title>John | My Learning - {id}</title>
        <meta name="description" content="my learning page" />
        <link rel="icon" href="/titleLogo.jpg" />
      </Head>
      <div className="min-h-screen">
        {!loading && !error && <LearningsPost learning={data.oneLearning} />}
      </div>
    </>
  );
};

export default LearningDetail;
