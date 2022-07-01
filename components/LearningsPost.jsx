/* eslint-disable react/no-children-prop */
import ReactMarkdown from "react-markdown";
import MDComponents from "./MDComponents";

const LearningsPost = ({ learning }) => {
  return (
    <article className="pt-28 px-6 lg:px-40 prose dark:prose-invert  sm:prose-lg lg:prose-lg max-w-[1300px] ">
      <p className="font-bold text-4xl">{learning.title}</p>
      <p className="border-b-2 border-gray-400">{learning.date}</p>
      <ReactMarkdown children={learning.content} components={MDComponents} />
    </article>
  );
};

export default LearningsPost;
