import Link from "next/link";
import { BsBlockquoteRight } from "react-icons/bs";

const LearningsCard = ({ learning }) => {
  return (
    <>
      <div className="bg-[#f4f4f5] border-2 border-gray-300 dark:border-gray-800 py-2 dark:bg-[#2d333b] max-w-[550px] rounded-md shadow-md hover:shadow-lg">
        <div className="px-3 py-2">
          <div className="flex lg:flex-row flex-col lg:justify-between justify-start lg:items-center gap-2 lg:gap-0 text-sm font-[500]">
            <p className="text-lg font-bold">{learning.title}</p>
            <p className="bg-gray-300 dark:bg-gray-800 px-2 py-1 rounded-full">
              {learning.date}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <BsBlockquoteRight className="text-xl" />
            <p className="py-4">{learning.excerpt}</p>
          </div>
          <Link href={`/myLearnings/${learning.id}`}>
            <a className="font-bold text-[#0284c7] dark:text-gray-300 flex items-center hover:bg-gray-300 hover:scale-110 ease-in-out duration-100 dark:hover:bg-gray-900 py-1 px-4 w-fit rounded-xl bg-slate-300 dark:bg-gray-800">
              Read More
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LearningsCard;
