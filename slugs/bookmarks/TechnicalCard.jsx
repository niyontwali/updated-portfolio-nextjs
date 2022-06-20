import {BiLinkExternal} from 'react-icons/bi';

const TechnicalCard = ({ bookmark }) => {
  return (
    <>
      <div className="border-l-4 border-[#0284c7] bg-slate-300 dark:bg-[#2d333b] max-w-[500px]">
        <div className="px-3 py-2">
          <h3 className="text-md tracking-wide font-bold">{bookmark.title}</h3>
          <p className="pb-2">{bookmark.description}</p>
          <a href={bookmark.link} target="_blank" rel="noreferrer" className="font-bold text-[#0284c7] flex items-center gap-2 hover:bg-slate-500 hover:text-gray-200 py-1 px-4 w-fit rounded-xl">
            Link <BiLinkExternal />
          </a>
        </div>
      </div>
    </>
  );
};

export default TechnicalCard;
