import Link from "next/link";

const BookmarkCategories = () => {
  return (
    <div className="text-lg space-y-4">
      <Link href="/bookmarks/web">
        <li>
          <span className="border-2 border-transparent hover:border-4 border-b-[#8fcae8]">
            Web Development
          </span>
        </li>
      </Link>
      <Link href="/bookmarks/mobile">
        <li>
          <span className="border-2 border-transparent hover:border-4 border-b-[#8fcae8]">
            Mobile Development
          </span>
        </li>
      </Link>
      <Link href={`/bookmarks/dx`}>
        <li>
          <span className="border-2 border-transparent hover:border-4 border-b-[#8fcae8]">
            Developer Experience (DX)
          </span>
        </li>
      </Link>
      <Link href="/bookmarks/ui">
        <li>
          <span className="border-2 border-transparent hover:border-4 border-b-[#8fcae8]">
            User Interface (UI)
          </span>
        </li>
      </Link>
      <Link href="/bookmarks/ux">
        <li>
          <span className="border-2 border-transparent hover:border-4 border-b-[#8fcae8]">
            User Experience (UX)
          </span>
        </li>
      </Link>
      <Link href="/bookmarks/technical">
        <li>
          <span className="border-2 border-transparent hover:border-4 border-b-[#8fcae8]">
            Non-Technical Skills(NTS)
          </span>
        </li>
      </Link>
    </div>
  );
};

export default BookmarkCategories;
