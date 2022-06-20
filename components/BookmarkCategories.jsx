import Link from "next/link";

const BookmarkCategories = () => {
  return (
    <div className="text-lg space-y-4">
      <Link href={`/bookmarks/web`}>
        <li>
          <span className="border-2 border-transparent hover:border-4 border-b-[#8fcae8]">
            Web Development
          </span>
        </li>
      </Link>
      <Link href={`/bookmark/2`}>
        <li>
          <span className="border-2 border-transparent hover:border-4 border-b-[#8fcae8]">
            Mobile Development
          </span>
        </li>
      </Link>
      <Link href={`/bookmark/1`}>
        <li>
          <span className="border-2 border-transparent hover:border-4 border-b-[#8fcae8]">
            Development Experience (DX)
          </span>
        </li>
      </Link>
      <Link href={`/bookmark/1`}>
        <li>
          <span className="border-2 border-transparent hover:border-4 border-b-[#8fcae8]">
            User Interface (UI)
          </span>
        </li>
      </Link>
      <Link href={`/bookmark/1`}>
        <li>
          <span className="border-2 border-transparent hover:border-4 border-b-[#8fcae8]">
            User Experience (UX)
          </span>
        </li>
      </Link>
      <Link href={`/bookmark/1`}>
        <li>
          <span className="border-2 border-transparent hover:border-4 border-b-[#8fcae8]">
            Technical Education
          </span>
        </li>
      </Link>
    </div>
  );
};

export default BookmarkCategories;
