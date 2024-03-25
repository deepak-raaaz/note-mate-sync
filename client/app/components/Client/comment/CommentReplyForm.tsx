import { Avatar } from "@nextui-org/react";
import React, { FC } from "react";

type Props = {
  placeholder: string;
};

const CommentReplyForm: FC<Props> = ({ placeholder }) => {
  return (
    <form className="mt-2">
      <label className="sr-only">Your comment</label>
      <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-slate-700">
        <div>
          <Avatar
            alt="Remy Sharp"
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            className=""
          />
        </div>
        <textarea
          id="chat"
          rows={1}
          className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
        ></textarea>
        <button
          type="submit"
          className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
        >
          <svg
            className="w-5 h-5 rotate-90 rtl:-rotate-90"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 20"
          >
            <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
          </svg>
          <span className="sr-only">Send message</span>
        </button>
      </div>
    </form>
  );
};

export default CommentReplyForm;
