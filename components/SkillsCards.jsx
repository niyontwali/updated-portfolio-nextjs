/* eslint-disable react/no-unescaped-entities */
import {programmingSkills, technicalSkills} from "../skills";
import ProgSkillsList from "./ProgSkillsList";
import TechSkillsList from "./TechSkillsList";

const SkillsCards = () => {
  return (
    <>
      <div className="py-20 w-full px-6 md:px-14 lg:px-48">
        <div className="containter mt-10 lg:mt-14 flex justify-center flex-col items-center">
          <h3 className="text-xl tracking-wider text-center py-2 px-12 bg-gray-200 dark:bg-gray-700 rounded-t-full w-fit">
            Programming & Design Skills
          </h3>
          <p className="my-10 tracking-wider text-lg text-gray-600 dark:text-gray-300 text-center max-w-[600px] mx-auto">
            I am an <strong>inquisitive developer</strong> who embrace and adapt
            quickly to new responsibilities, am enthusiastic to gain new
            knowledge, skills, and techniques. I am able to level up on any
            skill in case it's one of the project requierements.
          </p>
          <div className="flex gap-2 flex-wrap justify-center">
            {programmingSkills.map((skill) => (
              <div key={skill.id} className="p-2">
                <ProgSkillsList programming={skill} />
              </div>
            ))}
          </div>
        </div>
        <div className="containter mt-10">
          <h3 className="text-xl mx-auto py-2 px-12 mb-8 bg-gray-200 dark:bg-gray-700 rounded-t-full w-fit">Technical Skills</h3>
          <div className="max-w-[700px] mx-auto">
            {technicalSkills.map((skill) => (
              <div key={skill.id}>
                <TechSkillsList technical={skill} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsCards;
