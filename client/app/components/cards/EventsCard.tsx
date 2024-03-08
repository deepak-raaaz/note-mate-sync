import {
  Avatar,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import React from "react";
import { IoIosMore } from "react-icons/io";
import { FaRepeat } from "react-icons/fa6";
import { IoIosShareAlt } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoHeart } from "react-icons/io5";
import { AiOutlineComment } from "react-icons/ai";
import Image from "next/image";
import ThumbnailImage from "../../../public/assets/images/event-thumbnail2.png";

type Props = {};

const EventsCard = (props: Props) => {
  const [like, setLike] = React.useState(false);
  return (
    <div className="p-3 bg-white dark:bg-slate-900 rounded-lg overflow-hidden space-y-3">
      <div className="flex items-center justify-between space-x-4 ">
        <div className="flex items-center">
          <Avatar
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            size="md"
          />
          <div className="ms-2">
            <h5 className="font-medium dark:text-slate-200">Samarpan HIT</h5>
            <span className="text-[14px] dark:text-slate-400">
              shared a event • 2 day ago
            </span>
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

      <div className="flex space-x-4 relative ">
        <Image
          alt="notes"
          src={ThumbnailImage}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="!relative rounded-xl overflow-hidden aspect-video w-full"
        />
        <div className="flex justify-center items-center flex-col bg-slate-100 dark:bg-slate-800 shadow-lg absolute -bottom-6 py-2 px-4 rounded-lg">
          <span className="font-semibold text-lg dark:text-white">25</span>
          <span className="text-tiny font-semibold text-[#4F46E5] dark:text-white">
            June
          </span>
        </div>
      </div>

      <h3 className="font-semibold text-lg dark:text-slate-200 !mt-10">
        Artificial Intelligence
      </h3>
      <span className="f text-sm text-slate-500 dark:text-slate-400">
        21 May 2024 at 04:00 PM
      </span>
      <p className="line-clamp-2  dark:text-slate-200 !mt-1">
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
          <Button
            endContent={
              <IoIosArrowForward className="text-[#4F46E5]" size={20} />
            }
            className="bg-transparent text-[#4F46E5] font-medium rounded-full  "
          >
            learn more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
