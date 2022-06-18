const LearningCard = () => {
  return (
    <>
      <div className="text-gray-900 dark:text-gray-300 p-4 bg-gray-100 dark:bg-[#2d333b] max-w-[230px] m-2 rounded-lg shadow-gray-400 dark:shadow-gray-900 shadow-md cursor-pointer hover:scale-105 ease-in-out duration-300">
        <h3 className="text-xl font-bold">React JS</h3>
        <p className="font-[500]">
          {new Date().getDate()}/{new Date().getMonth() + 1}/
          {new Date().getFullYear()}
        </p>
        <p>This is a Javascript library for making great UI </p>
      </div>
    </>
  );
};

export default LearningCard;
