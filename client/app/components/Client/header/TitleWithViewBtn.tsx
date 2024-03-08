import Link from "next/link";
import React, { FC } from "react";

type Props = {
  title: string;
  url: string;
  view_text?: string;
};

const TitleWithViewBtn: FC<Props> = ({ title, url }) => {
  return (
    <div className="flex justify-between items-center mb-4 mt-8">
      <h3 className="text-slate-800 dark:text-slate-200 font-medium text-xl">
        {title}
      </h3>
      <div>
        {url == "##" ? (
          <></>
        ) : (
          <Link href={url} className="text-blue-500 font-medium">
            view all
          </Link>
        )}
      </div>
    </div>
  );
};

export default TitleWithViewBtn;
