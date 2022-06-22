/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import moment from "moment";

const Dashboard = ({ name = "John Niyontwali" }) => {
  return (
    <div className="pt-16">
      <div className="mx-3 sm:mx-4 md:mx-16 pt-4">
        <div className="grid grid-cols-none lg:grid-cols-12">
          {/* First Grid */}
          <div className="lg:col-span-4 lg:min-h-screen">
            <div className="pt-10 lg:pt-[18vh] px-6 flex flex-col gap-6 dark:text-gray-300 lg:fixed uppercase text-sm font-bold tracking-wide lg:ml-20">
              <Link href="/dashboard/manage/blog">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-200 dark:bg-[#2d333b] px-2 py-1 rounded hover:bg-gray-300 lg:hover:scale-105 lg:ease-in-out lg:duration-150"
                >
                  Dashboard
                </a>
              </Link>
              <Link href="/dashboard/manage/blog">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-200 dark:bg-[#2d333b] px-2 py-1 rounded hover:bg-gray-300 lg:hover:scale-105 lg:ease-in-out lg:duration-150"
                >
                  Manage Blog
                </a>
              </Link>
              <Link href="/dashboard/manage/blog">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-200 dark:bg-[#2d333b] px-2 py-1 rounded hover:bg-gray-300 lg:hover:scale-105 lg:ease-in-out lg:duration-150"
                >
                  Manage Projects
                </a>
              </Link>
              <Link href="/dashboard/manage/blog">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-200 dark:bg-[#2d333b] px-2 py-1 rounded hover:bg-gray-300 lg:hover:scale-105 lg:ease-in-out lg:duration-150"
                >
                  Manage Skills
                </a>
              </Link>
              <Link href="/dashboard/manage/blog">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-200 dark:bg-[#2d333b] px-2 py-1 rounded hover:bg-gray-300 lg:hover:scale-105 lg:ease-in-out lg:duration-150"
                >
                  Manage Bookmarks
                </a>
              </Link>
              <Link href="/dashboard/manage/blog">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-200 dark:bg-[#2d333b] px-2 py-1 rounded hover:bg-gray-300 lg:hover:scale-105 lg:ease-in-out lg:duration-150"
                >
                  Manage Learnings
                </a>
              </Link>
              <Link href="/dashboard/manage/blog">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-200 dark:bg-[#2d333b] px-2 py-1 rounded hover:bg-gray-300 lg:hover:scale-105 lg:ease-in-out lg:duration-150"
                >
                  My Schedules
                </a>
              </Link>
            </div>
          </div>
          {/* Second Grid */}
          <div className="lg:col-span-8 bg-[#f1f3f6] hover:shadow-md hover:shadow-gray-200 dark:bg-[#2d333b] my-14 lg:h-[70vh] rounded-full lg:rotate-12">
            <div className="lg:-rotate-12">
              <div className="text-center py-16">
                <h2>Welcome!!</h2>
                <p className="text-md font-[500]">{name}</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-[500]">Today's Date</p>
                <p className="bg-[#dbe2e5] dark:bg-gray-600 w-fit mx-auto px-2 rounded-lg">
                  {moment().format("MMM DD, YYYY")}
                </p>
              </div>
              <div className="flex justify-center mt-14">
                <div>
                  <p className="text-center mb-6 text-lg font-bold">
                    Today's Quote
                  </p>
                  <div className="border-l-4 border-[#b7d5e3] bg-[#dbe2e5] shadow dark:bg-[#454b54] w-fit">
                    <div className="px-3 py-2">
                      <p className="pb-2 font-[500]">
                        He who laughs laster loughs better
                      </p>
                      <p className="italic">~ John Niyontwali</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
