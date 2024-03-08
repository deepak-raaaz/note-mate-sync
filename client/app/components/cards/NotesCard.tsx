import {
  Avatar,
  Button,
  AvatarGroup,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
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

const NotesCard = (props: Props) => {
  const [like, setLike] = React.useState(false);

  return (
    <div className="p-3 bg-white dark:bg-slate-900 rounded-lg overflow-hidden space-y-3">
      <div className="flex items-center justify-between space-x-4 ">
        <div className="flex items-center">
          <Avatar
            showFallback
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            size="md"
          />
          <div className="ms-2">
            <h5 className="font-medium dark:text-slate-200">Deepak kumar</h5>
            <span className="text-[14px] dark:text-slate-400">3 day ago</span>
          </div>
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

      <div className="flex space-x-4 ">
        <div className="bg-slate-200 dark:bg-slate-800 dark:border-slate-800 border-4 border-slate-200 rounded-xl w-full relative">
          <Image
            alt="notes"
            src={ThumbnailImage}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="!relative rounded-xl overflow-hidden aspect-10/4 w-full"
          />
          <div className="bg-slate-200 dark:bg-slate-800 absolute bottom-0 w-full px-3 py-2">
            <h5 className="line-clamp-1 dark:text-slate-300">
              Lorem ipsum dolor sit amet.pdf
            </h5>
            <span className="text-sm dark:text-slate-400">
              5 pages • 225 Kb
            </span>
          </div>
        </div>

        <div className="space-y-2 flex flex-col">
          <Button
            isIconOnly
            aria-label="Like"
            className="bg-slate-200 dark:bg-slate-800 dark:text-slate-300 text-slate-600 rounded-lg"
          >
            <FaRepeat size={20} />
          </Button>
          <Button
            isIconOnly
            aria-label="Like"
            className="bg-slate-200 dark:bg-slate-800 dark:text-slate-300 text-slate-600 rounded-lg"
          >
            <IoIosShareAlt size={20} />
          </Button>
          <Button
            isIconOnly
            aria-label="Like"
            className="bg-slate-200 dark:bg-slate-800 dark:text-slate-300 text-slate-600 rounded-lg"
          >
            <MdBookmarkAdd size={20} />
          </Button>
        </div>
      </div>

      <p className="line-clamp-3 dark:text-slate-200">
        Lorem ipsum dolor sit amet, consectet adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus
      </p>

      <div className="flex space-x-2 justify-between items-center">
        <div className="flex space-x-2 items-center">
          <Button
            onClick={()=> {setLike(!like)}}
            startContent={<IoHeart className={`${like ? 'text-red-600' : 'text-slate-400'}`} size={20} />}
            className="bg-slate-200 text-slate-600  dark:bg-slate-800 dark:text-slate-300 rounded-full"
          >
            12.2k
          </Button>
          <Button
            startContent={
              <AiOutlineComment
                className="text-slate-600 dark:text-slate-300"
                size={20}
              />
            }
            className="bg-slate-200 text-slate-600 rounded-full dark:bg-slate-800 dark:text-slate-300 "
          >
            986
          </Button>
        </div>

        <div>
          <span className="text-tiny dark:text-slate-300">Downloads</span>
          <AvatarGroup
            max={3}
            total={10}
            renderCount={(count) => (
              <p className="text-tiny text-foreground font-medium ms-2 ">
                {count}+
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
      </div>
    </div>
  );
};

export default NotesCard;
