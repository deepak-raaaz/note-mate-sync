import {
    Button,
    Dropdown,
    DropdownSection,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
  } from "@nextui-org/react";
  
  import {
    AddNoteBulkIcon,
    CopyDocumentBulkIcon,
    EditDocumentBulkIcon,
    DeleteDocumentBulkIcon,
  } from "@nextui-org/shared-icons";
  
  import clsx from "clsx";
  import { useSelector } from "react-redux";
  import { MdAddCircle } from "react-icons/md";
import { BiSolidBookAdd } from "react-icons/bi";
import { FaBookReader } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { HiDocumentDuplicate } from "react-icons/hi";
import { RiQuestionAnswerFill } from "react-icons/ri";
  
  const iconClasses =
    "text-2xl text-default-500 pointer-events-none flex-shrink-0";
  
  export const AddPopup = () => {
    return (
      <Dropdown className="shadow-xl dark:bg-slate-900" placement="bottom">
        <DropdownTrigger>
          <Button aria-label="Take a photo" className="bg-transparent font-semibold text-slate-700 dark:text-slate-300" startContent={<MdAddCircle className="" size={25} />}>
            Add
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          closeOnSelect
          aria-label="Actions"
          color="default"
          variant="flat"
        >
          <DropdownSection title="Add a new">
            <DropdownItem
              key="new"
              description="Share your class notes"
              startContent={<BiSolidBookAdd className={iconClasses} />}
            >
              <div className="flex  items-center">
                <span className="text-base">Textbook note</span>
                <div className="bg-[#ff8f0e28] rounded-full text-[#D97706] text-tiny py-1 mx-2 px-3 font-medium">
                  +20
                </div>
              </div>
              
            </DropdownItem>
            <DropdownItem
              key="copy"
              description="Share your study guide"
              startContent={<FaBookReader className={iconClasses} />}
            >
             <div className="flex  items-center">
                <span className="text-base">Study guide</span>
                <div className="bg-[#ff8f0e28] rounded-full text-[#D97706] text-tiny py-1 mx-2 px-3 font-medium">
                  +20
                </div>
              </div>
            </DropdownItem>
            <DropdownItem
              key="edit"
              description="Share a past exam paper"
              startContent={<IoDocumentText className={iconClasses} />}
            >
              <div className="flex  items-center">
                <span className="text-base">Past exam</span>
                <div className="bg-[#ff8f0e28] rounded-full text-[#D97706] text-tiny py-1 mx-2 px-3 font-medium">
                  +20
                </div>
              </div>
            </DropdownItem>
            <DropdownItem
              key="edit"
              description="Share a syllabus guide"
              startContent={<HiDocumentDuplicate className={iconClasses} />}
            >
              <div className="flex  items-center">
                <span className="text-base">Syllabus</span>
                <div className="bg-[#ff8f0e28] rounded-full text-[#D97706] text-tiny py-1 mx-2 px-3 font-medium">
                  +20
                </div>
              </div>
            </DropdownItem>
            <DropdownItem
              key="edit"
              showDivider
              description="Answer questions from the student"
              startContent={<RiQuestionAnswerFill className={iconClasses} />}
            >
              <div className="flex  items-center">
                <span className="text-base">Answer</span>
                <div className="bg-[#ff8f0e28] rounded-full text-[#D97706] text-tiny py-1 mx-2 px-3 font-medium">
                  +20
                </div>
              </div>
            </DropdownItem>
            <DropdownItem
              key="edit"
              startContent={<EditDocumentBulkIcon className={iconClasses} />}
            >
              <span className="text-tiny">Earn a share of revenue generated <br/> by your contributions. <span className="text-[#0098e5]">Learn how it works</span> </span>
            </DropdownItem>
          </DropdownSection>
          
        </DropdownMenu>
      </Dropdown>
    );
  };
  