import { Button } from "@nextui-org/react";
import React, { FC } from "react";
import { FaInfoCircle } from "react-icons/fa";

type Props = {};

const WelcomeSection: FC<Props> = () => {
  return (
    <>
      <div className="my-4">
        <h3 className="text-slate-800 dark:text-slate-200 font-semibold text-xl ">
          Welcome to NoteMate 🙌
        </h3>
        <p className="text-slate-600 dark:text-slate-300">
          This is your home, the starting point to discover the best study
          material.
        </p>
      </div>
      <div className="my-4 py-2 px-3 bg-slate-200 dark:bg-slate-900 dark:border-slate-800 border bottom-1 border-slate-300 flex items-center justify-between rounded-lg space-x-4">
        <div className="flex items-center space-x-4">
          <div className="h-12 w-12 bg-[#4F46E5] flex justify-center items-center rounded-lg overflow-hidden">
            <FaInfoCircle size={30} className="text-white " />
          </div>
          <p className="text-slate-800 dark:text-slate-400">
            Complete your profile for exclusive benefits and tailored
            recommendations!
          </p>
        </div>
        <Button variant="solid" className="!bg-[#4F46E5] text-white">
          Complete Profile
        </Button>
      </div>
    </>
  );
};

export default WelcomeSection;
