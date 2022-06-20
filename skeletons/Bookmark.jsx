const Bookmark = () => {
  return (
    <div className="max-w-[475px] bg-slate-200 dark:bg-[#3d454f] border-l-4 border-slate-300 dark:border-l-4 dark:border-gray-500 animate-pulse">
      <div className="px-3 py-4">
        <div className="h-4 max-w-[150px] bg-slate-300 dark:bg-[#2d333b] rounded-full"></div>
        <div className="h-3 max-w-[400px] bg-slate-300 dark:bg-[#2d333b] mt-2 rounded-full"></div>
        <div className="flex gap-2 ml-4 mt-5">
          <div className="h-4 w-[50px] bg-slate-300 dark:bg-[#2d333b] rounded-full"></div>
          <div className="h-4 w-5 bg-slate-300 dark:bg-[#2d333b] rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
