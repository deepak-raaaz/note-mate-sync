import { Avatar } from "@mui/material";
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import React, { FC } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import CommentReply from "./CommentReply";
import CommentReplyForm from "../Client/comment/CommentReplyForm";

type Props = {
  commentUser:{_id:string,name:string,avatar?:string};
  commentId:string;
  comment:string;
  reply: boolean;
  setReply: (reply: boolean) => void;
  replyto: string;
  setReplyto: (replyto: string) => void;
  openReply: boolean;
  setOpenReply: (openReply: boolean) => void;
};

const CommentCard: FC<Props> = ({
  openReply,
  setOpenReply,
  reply,
  setReply,
  replyto,
  setReplyto,
  commentId,
  comment,
  commentUser,
}) => {
  return (
    <div className="  rounded-lg overflow-hidden space-y-0">
      <div className="flex items-center justify-between space-x-4 ">
        <div className="flex  ">
          <Avatar
            alt="Remy Sharp"
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            className="mt-2"
          />
          <div className="ms-3 ">
            <div className="flex justify-between w-full">
              <div className="flex space-x-2 items-center">
                <h5 className="font-medium dark:text-slate-200">
                  {commentUser.name}
                </h5>
                <span className="text-[14px] dark:text-slate-400">
                  3 day ago
                </span>
              </div>

              <Dropdown placement="bottom-end" className="dark:bg-slate-900">
                <DropdownTrigger>
                  <Button isIconOnly className="bg-transparent rounded-full">
                    <IoIosMore size={25} className="dark:text-slate-200" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Action event example"
                  onAction={(key) => alert(key)}
                >
                  <DropdownItem key="Copy link">Copy link</DropdownItem>
                  <DropdownItem key="Report">Report</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            <p className="text-[14px] dark:text-slate-400 !-mt-2">
              {comment}
            </p>
            <div className="flex space-x-2 items-center">
              <span className="text-tiny dark:text-slate-400">3 day ago</span>
              <Button
                // onClick={() => {
                //   setLike(!like);
                // }}
                startContent={
                  <FaThumbsUp
                    // className={`${like ? "text-red-600" : "text-slate-400"}`}
                    size={15}
                  />
                }
                className="bg-transparent text-slate-600 text-tiny dark:text-slate-300 !px-0"
              >
                12.2k
              </Button>
              <Button
                onClick={() => {
                  setReply(true);
                  setReplyto(commentUser.name);
                }}
                className="bg-transparent text-slate-600 text-tiny dark:text-slate-300 px-2 min-w-4"
              >
                Reply
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* {commentReplies.length !== 0 &&
        commentReplies.map((commentReply) => (
          <CommentReply
          // key={commentReply._id}
            openReply={openReply}
            setOpenReply={setOpenReply}
            replyto={replyto}
            setReplyto={setReplyto}
            reply={reply}
            setReply={setReply}
          />
        ))
      } */}
    </div>
  );
};

export default CommentCard;
