import React from "react";
import TitleWithViewBtn from "../header/TitleWithViewBtn";
import NotesCard from "../../cards/NotesCard";

type Props = {};

const TopNotes = (props: Props) => {
  const list = [1, 2, 3];


  return (
    <div>
      <TitleWithViewBtn title="Top documents for you" url="#" />
      <div className="grid grid-cols-12 gap-6 my-4">
        {list.map((items) => (
          <div className="col-span-4 max-1300px:col-span-6 max-900px:col-span-12">
            <NotesCard />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopNotes;
