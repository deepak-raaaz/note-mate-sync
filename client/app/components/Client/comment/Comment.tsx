import React, { FC, useState } from "react";
import CommentCard from "../../cards/CommentCard";
import CommentReplyForm from "./CommentReplyForm";
import { Button } from "@nextui-org/react";
import { IoMdClose } from "react-icons/io";

type Props = {
  id: string;
};

const Comment: FC<Props> = ({ id }) => {
  const [openReply, setOpenReply] = useState(false); //
  const [reply, setReply] = useState(false);
  const [replyto, setReplyto] = useState("");
  const commentData = [
    {
      _id: "65f5712dbd42e0b83754da89",
      user: {
        _id: "65eccd1bc123a0ca24845c27",
        name: "deepak kumar",
      },
      post: "65ee04a36de3e82b9466e5be",
      likes: [],
      comment: "my second comment 1",
      commentReplies: [
        {
          _id: "65f57155bd42e0b83754da9b",
          user: {
            _id: "65eccd1bc123a0ca24845c27",
            name: "deepak kumar",
          },
          commentId: "65f5712dbd42e0b83754da89",
          likes: [],
          comment: "my comment reply 01",
          createdAt: "2024-03-16T10:15:49.288Z",
          updatedAt: "2024-03-16T10:15:49.288Z",
          __v: 0,
        },
        {
          _id: "65f57158bd42e0b83754da9f",
          user: {
            _id: "65eccd1bc123a0ca24845c27",
            name: "deepak kumar",
          },
          commentId: "65f5712dbd42e0b83754da89",
          likes: [],
          comment: "my comment reply 02",
          createdAt: "2024-03-16T10:15:52.647Z",
          updatedAt: "2024-03-16T10:15:52.647Z",
          __v: 0,
        },
      ],
      createdAt: "2024-03-16T10:15:09.267Z",
      updatedAt: "2024-03-16T10:15:52.650Z",
      __v: 2,
    },
    {
      _id: "65f57131bd42e0b83754da8d",
      user: {
        _id: "65eccd1bc123a0ca24845c27",
        name: "deepak kumar",
      },
      post: "65ee04a36de3e82b9466e5be",
      likes: [],
      comment: "my second comment 2",
      commentReplies: [],
      createdAt: "2024-03-16T10:15:13.690Z",
      updatedAt: "2024-03-16T10:15:13.690Z",
      __v: 0,
    },
    {
      _id: "65f57134bd42e0b83754da91",
      user: {
        _id: "65eccd1bc123a0ca24845c27",
        name: "deepak kumar",
      },
      post: "65ee04a36de3e82b9466e5be",
      likes: [],
      comment: "my second comment 3",
      commentReplies: [],
      createdAt: "2024-03-16T10:15:16.602Z",
      updatedAt: "2024-03-16T10:15:16.602Z",
      __v: 0,
    },
    {
      _id: "65f57137bd42e0b83754da95",
      user: {
        _id: "65eccd1bc123a0ca24845c27",
        name: "deepak kumar",
      },
      post: "65ee04a36de3e82b9466e5be",
      likes: [],
      comment: "my second comment 4",
      commentReplies: [],
      createdAt: "2024-03-16T10:15:19.386Z",
      updatedAt: "2024-03-16T10:15:19.386Z",
      __v: 0,
    },
  ];

  return (
    <>
      <div className="overflow-auto">
        {commentData.map((comment) => (
          <CommentCard
            commentUser={comment.user}
            key={comment._id}
            commentId={comment._id}
            comment={comment.comment}
            openReply={openReply}
            setOpenReply={setOpenReply}
            reply={reply}
            setReply={setReply}
            replyto={replyto}
            setReplyto={setReplyto}
          />
        ))}
        {/* <CommentCard
          openReply={openReply}
          setOpenReply={setOpenReply}
          reply={reply}
          setReply={setReply}
          replyto={replyto}
          setReplyto={setReplyto}
        />
        <CommentCard
          openReply={openReply}
          setOpenReply={setOpenReply}
          reply={reply}
          setReply={setReply}
          replyto={replyto}
          setReplyto={setReplyto}
        /> */}

        {/* replying to -  card  */}
        <div
          className={`${
            reply ? "flex" : "hidden"
          } bg-slate-100 px-6 py-2 justify-between items-center border-t-2 dark:bg-slate-700 dark:border-slate-600 `}
        >
          <span className="dark:text-slate-200">Replying to {replyto}</span>
          <Button
            isIconOnly
            aria-label="Like"
            className="bg-transparent"
            onClick={() => {
              setReply(false);
              setReplyto("");
            }}
          >
            <IoMdClose />
          </Button>{" "}
        </div>

        <CommentReplyForm placeholder="Your comment..." />
      </div>
    </>
  );
};

export default Comment;
