import React, { FC } from "react";

type Props = {
  id: string;
};

const Comment: FC<Props> = ({ id }) => {
  return (
    <>
      <div className="overflow-auto">
        <div>Comment {id}</div>
        <p>Lorem ipsum dolor sit amet </p>
      </div>
    </>
  );
};

export default Comment;
