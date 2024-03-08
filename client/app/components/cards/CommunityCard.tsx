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

const CommunityCard = (props: Props) => {
  const [like, setLike] = React.useState(false);
  return (
    <div className="p-3 bg-white dark:bg-slate-900 rounded-lg overflow-hidden space-y-3">
      <div className="flex items-center justify-between space-x-4 ">
        <div className="flex items-center">
          <Avatar
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            size="md"
          />
        </div>
        <AvatarGroup
          max={4}
          total={10}
          renderCount={(count) => (
            <p className="text-tiny  font-medium ms-2 text-[#64748B] dark:text-slate-300 ">
              {count}+ members
            </p>
          )}
          className="avatar-tiny"
        >
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
        </AvatarGroup>
      </div>

      <h3 className="font-semibold text-lg dark:text-slate-200">Artificial Intelligence</h3>

      <p className="line-clamp-2 text-slate-600 dark:text-slate-200 !mt-1">
        Lorem ipsum dolor sit amet, consectet adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus
      </p>

      <div className="flex space-x-2 justify-between items-center">
        <div className="flex space-x-2 items-center">
          <Button
           onClick={()=> {setLike(!like)}}
            isIconOnly
            aria-label="Like"
            className="bg-slate-200 dark:bg-slate-800 dark:text-slate-300 text-slate-600 rounded-lg"
          >
            <IoHeart className={`${like ? 'text-red-600' : 'text-slate-400'}`} size={20} />
          </Button>
        </div>

        <div className="space-x-3">
          <Button
            
            className="bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-300 font-semibold rounded-lg"
          >
            View
          </Button>
          <Button
            
            className="bg-[#4F46E5] text-white font-semibold rounded-lg"
          >
            Join
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;
