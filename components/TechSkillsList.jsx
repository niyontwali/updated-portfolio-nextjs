const TechSkillsList = ({ technical }) => {
  return (
    <div className="grid py-2 px-4 grid-cols-12 items-center">
      <div className="col-span-1 flex justify-center">
        <div className="h-2 w-2 bg-[#285b75] rotate-45"></div>
      </div>
      <div className="col-span-11">
        <p>{technical.skillName}</p>
      </div>
    </div>
  );
};

export default TechSkillsList;
