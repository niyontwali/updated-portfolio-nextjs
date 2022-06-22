/* eslint-disable react/no-children-prop */
import ReactMarkdown from "react-markdown";
import MDComponents from "./MDComponents";

const LearningsPost = ({ learning }) => {
  console.log("Data", learning);
  return (
    <article className="pt-28 px-6 lg:px-40 prose dark:prose-invert  sm:prose-lg lg:prose-lg max-w-[1300px] ">
      <h2 className="border-b-2 border-gray-400">{learning.date}</h2>
      <ReactMarkdown children={learning.content} components={MDComponents} />
    </article>
  );
};

export default LearningsPost;
