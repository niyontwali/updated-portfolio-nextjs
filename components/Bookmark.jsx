/* eslint-disable react/no-unescaped-entities */
import { BsFillBookmarkStarFill } from "react-icons/bs";
import BookmarkCategories from "./BookmarkCategories";

const Bookmark = () => {
  return (
    <div className="w-full lg:min-h-screen">
      <div className="m-auto px-4 sm:px-8 md:px-52 pt-24 lg:pt-28 w-full">
        <div className="flex items-center space-x-3">
          <h2 className="tracking-wide">Bookmarks</h2>
          <BsFillBookmarkStarFill size={30} className="rotate-45" />
        </div>
        <div className="max-w-[600px] mt-12">
          <p className="bg-[#9ac8e1] dark:bg-[#2f3336] p-4 border-l-4 border-black font-[500] tracking-wide text-lg rounded">
            This is one of my favorite section on my porfolio. This is where I
            record all the materials/resources I've come across. The fact is
            that all these resources are used extensively by different
            developers out here. Hopefully you will find them helpful as well.
          </p>
        </div>
        <div className="mt-10">
          <div className="flex flex-col justify-start items-start gap-3 font-[500] lg:mb-10">
            <BookmarkCategories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
