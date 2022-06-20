import { CgWebsite } from "react-icons/cg";

import BookmarkCategories from "./BookmarkCategories";
import BookmarkGrid from "./BookmarkGrid";

const BookmarkDetails = () => {
  return (
    <div className="h-screen">
      <div className="h-screen flex">
        <div className="w-2/6 pt-[32vh] pl-24 flex flex-col gap-4 fixed font-[500]">
          <div className="flex flex-col justify-start w-fit gap-6 ">
            <BookmarkCategories />
          </div>
        </div>
        <div className="h-full w-4/6 pt-32 absolute right-0 shadow-lg px-10">
          <div className="px-10">
            <h3 className="flex text-3xl tracking-wide font-bold items-center gap-3">
              Web Development <CgWebsite />
            </h3>
            <p className="max-w-[500px] text-lg font-[500] py-3">
              These are bookmarked resources related to web development. I do believe
              that they can help you advance your skills too.
            </p>
          </div>
          <BookmarkGrid />
        </div>
      </div>
    </div>
  );
};

export default BookmarkDetails;
