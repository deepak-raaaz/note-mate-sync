import { Avatar, Button, AvatarGroup } from "@nextui-org/react";
import React from "react";
import { IoIosMore } from "react-icons/io";
import { FaRepeat } from "react-icons/fa6";
import { IoIosShareAlt } from "react-icons/io";
import { MdBookmarkAdd } from "react-icons/md";
import { IoHeart } from "react-icons/io5";
import { AiOutlineComment } from "react-icons/ai";
import Image from "next/image";
import ThumbnailImage from "../../../public/assets/images/thumbnail-pdf.png";

type Props = {};

const PeopleCard = (props: Props) => {
  return (
    <div className="p-3 bg-white dark:bg-slate-900 rounded-lg overflow-hidden space-y-3">
      <div className="flex items-center justify-between space-x-4 ">
        <div className="flex items-center">
          <Avatar
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            size="lg"
            radius="sm"
          />
          <div className="ms-4">
            <h5 className="font-medium dark:text-slate-200">Deepak kumar</h5>
            <span className="text-[14px] dark:text-slate-400">Haldia Institute of Technology</span>
          </div>
        </div>
        <Button
            className="bg-transparent text-[#4F46E5] font-medium rounded-md border-2 border-[#4F46E5] hover:bg-[#4F46E5] hover:text-white "
          >
            Follow
          </Button>
      </div>
    </div>
  );
};

export default PeopleCard;
