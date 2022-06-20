import { useQuery } from "@apollo/client";
import { BiErrorCircle } from "react-icons/bi";
import { GET_BOOKMARKS_BY_CATEGORY } from "../services/bookmarksqueries";
import BookmarkBlock from "./BookmarkBlock";

import Bookmark from "../skeletons/Bookmark";

const BookmarkGrid = () => {
  
   const { loading, error, data } = useQuery(GET_BOOKMARKS_BY_CATEGORY, {
    variables: { category: "web" },
  });

  if (loading)
    return (
      <div className="px-10 mt-4 flex flex-col gap-4">
        <Bookmark />
        <Bookmark />
        <Bookmark />
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
    <div className="px-10">
      {!loading &&
        !error &&
        data.allBookmarks.map((bookmark) => {
          return (
            <div className="mt-4" key={bookmark.id}>
              <BookmarkBlock bookmark={bookmark} />
            </div>
          );
        })}
    </div>
  );
};

export default BookmarkGrid;
