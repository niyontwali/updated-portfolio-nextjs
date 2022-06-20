import BookmarkCategories from "./BookmarkCategories";

const BookmarkDetails = ({ title, description, icon, bookmarkData }) => {
  return (
    <div>
      <div className="min-h-screen">
        <div className="grid grid-rows-1 lg:grid-cols-12">
          {/* Grid One */}
          <div className="pt-10 pb-4 order-2 lg:order-1 lg:pt-[32vh] px-10 lg:px-0 lg:pl-24 flex flex-col gap-4 font-[500] lg:col-span-4">
            <div className="lg:fixed flex flex-col justify-start w-fit gap-6">
              <BookmarkCategories />
            </div>
          </div>
          {/* Grid Two */}
          <div className="min-h-screen order-1 lg:order-2 lg:col-span-8 lg:px-24 pt-24 lg:pt-32 pb-10 lg:right-0 border-l-2 shadow-lg border-slate-300">
            <div className="px-10">
              <h3 className="flex text-3xl tracking-wide font-bold items-center gap-3">
                {title} {icon}
              </h3>
              <p className="max-w-[500px] text-lg font-[500] py-3">
                {description}
              </p>
            </div>
            {bookmarkData}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookmarkDetails;
