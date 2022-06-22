/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-children-prop */
import { useState, useEffect, useRef } from "react";
import { useDebounce } from "use-debounce";
import { FaPen, FaEye } from "react-icons/fa";
import { BiCloudUpload, BiTrash } from "react-icons/bi";
import ReactMarkdown from "react-markdown";
import { useMutation } from "@apollo/client";
import { ADD_LEARNING } from "../services/learningsmutations";
import { GET_LEARNINGS } from "../services/learningsqueries";

import MDComponents from "./MDComponents";

const tabs = [
  { text: "Write", icon: FaPen },
  { text: "Preview", icon: FaEye },
];

const Editor = ({
  initialData = null,
  showDeleteButton = false,
  showPublishButton = false,
  disabled = false,
  debouncedDelay = 500,
  onChange = () => null,
  onPublish = () => null,
  onDelete = () => null,
}) => {
  const [title, setTitle] = useState(initialData?.title ?? "");
  const [excerpt, setExcerpt] = useState(initialData?.title ?? "");
  const [date, setDate] = useState(initialData?.title ?? "");
  const [content, setContent] = useState(initialData?.content ?? "");
  const [category, setCategory] = useState(initialData?.content ?? "");
  const [activeTab, setActiveTab] = useState(0);

  const [debouncedTitle] = useDebounce(title, debouncedDelay);
  const [debouncedContent] = useDebounce(content, debouncedDelay);

  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    onChange(debouncedTitle, debouncedContent);
  }, [debouncedTitle, debouncedContent]);

  // Mutation
  const [addLearning] = useMutation(ADD_LEARNING, {
    variables: { title, excerpt, content, category, date },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      title === "" ||
      excerpt === "" ||
      content === "" ||
      category === "" ||
      date === ""
    ) {
      return alert("Please fill in all fields");
    }
    addLearning(title, excerpt, content, category, date);
    setTitle("");
    setExcerpt("");
    setContent("");
    setCategory("");
    setDate("");
  };

  return (
    <div className="pt-[20vh] px-4 lg:px-[300px] w-full mx-w-screen-lg mx-auto">
      {/* Blog post title */}
      <textarea
        cols="30"
        rows="1"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Learning Title"
        disabled={disabled}
        className="w-full text-lg font-bold leading-snug px-8 py-3 bg-gray-300 dark:bg-[#2d333b] rounded-lg outline-none appearance-none resize-none disabled:cursor-not-allowed"
      ></textarea>
      <div className="flex lg:flex-row flex-col gap-4">
        <textarea
          cols="30"
          rows="1"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          placeholder="Learning Excerpt"
          disabled={disabled}
          className="w-full text-md font-bold leading-snug px-8 py-2 bg-gray-300 dark:bg-[#2d333b] rounded-lg outline-none appearance-none mt-3 resize-none disabled:cursor-not-allowed"
        ></textarea>
        <textarea
          cols="30"
          rows="1"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Learnt date"
          disabled={disabled}
          className="w-full text-md font-bold leading-snug px-8 py-2 bg-gray-300 dark:bg-[#2d333b] rounded-lg outline-none appearance-none mt-3 resize-none disabled:cursor-not-allowed"
        ></textarea>
        <textarea
          cols="30"
          rows="1"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
          disabled={disabled}
          className="w-full text-md font-bold leading-snug px-8 py-2 bg-gray-300 dark:bg-[#2d333b] rounded-lg outline-none appearance-none mt-3 resize-none disabled:cursor-not-allowed"
        ></textarea>
      </div>

      {/* Actions */}
      <div className="mt-6 flex justify-center sm:justify-between items-center px-4 py-2 space-x-6 rounded bg-gray-300 dark:bg-[#2d333b] border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-100 sticky top-0">
        {/* Write & Preview tab */}
        <div className="flex items-center space-x-4">
          {tabs.map(({ text, icon: Icon }, i) => (
            <button
              key={text}
              onClick={() => setActiveTab(i)}
              disabled={disabled}
              className={`flex items-center space-x-1 rounded-md focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition-colors ${
                activeTab === i
                  ? "text-[#0284c7] font-[500] cursor-default select-none disabled:hover:text-blue-600"
                  : "hover:text-blue disabled:hover:text-current"
              }`}
            >
              <Icon className="w-5 h-4 flex-shrink-0" />
              <span className="hidden sm:inline-block">{text}</span>
            </button>
          ))}
        </div>
        {/* Publish & delete actions */}
        <div className="flex items-center space-x-4">
          <button
            onClick={handleSubmit}
            disabled={disabled}
            className="flex items-center space-x-1 transition-colors rounded-md focus:outline-none hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:text-current"
          >
            <BiCloudUpload className="w-6 h-6 flex-shrink-0" />
            <span className="hidden sm:inline-block">Publish</span>
          </button>
        </div>
      </div>
      {/* Blog post content */}
      <div className="py-6">
        {activeTab === 0 ? (
          <textarea
            value={content}
            cols="30"
            rows="12"
            onChange={(e) => setContent(e.target.value)}
            placeholder="Your learning is written here"
            disabled={disabled}
            className="w-full resize-none focus:outline-none text-md leading-sug disabled:cursor-not-allowed px-8 py-4 bg-gray-200 rounded-lg dark:bg-[#2d333b]"
          />
        ) : (
          <article className="min-h-[50vh] prose dark:prose-dark sm:prose-lg lg:prose-xl max-w-none">
            {content ? (
              <ReactMarkdown children={content} components={MDComponents} />
            ) : (
              <p className="text-gray-900 dark:text-gray-300">
                Nothing to preview yet....
              </p>
            )}
          </article>
        )}
      </div>
    </div>
  );
};

export default Editor;
