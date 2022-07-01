const ProgSkillsList = ({ programming }) => {
  return (
    <div className="p-2">
      <div className="bg-gray-200 shadow-sm hover:shadow-md dark:bg-gray-700 rounded-full h-14 lg:h-20 w-14 lg:w-20 flex mx-auto items-center">
        <programming.icon size={30} color={programming.iconColor} className={`mx-auto  hover:scale-125 ease-in-out duration-150`} />
      </div>
      <p className="text-center font-[500]">{programming.skillName}</p>
    </div>
  );
};

export default ProgSkillsList;
