import React from "react";
import NotesCard from "../../cards/NotesCard";
import TitleWithViewBtn from "../header/TitleWithViewBtn";

type Props = {};

const RecentlyViewed = (props: Props) => {
  const list = [1, 2, 3];
  return (
    <div>
      <TitleWithViewBtn title="Recently viewed" url="##" />
      <div className="grid grid-cols-12 gap-6 my-4 ">
        {list.map((items) => (
          <div className="col-span-4 max-1300px:col-span-6 max-900px:col-span-12">
            <NotesCard />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;
