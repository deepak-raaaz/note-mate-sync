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

import { User } from "@nextui-org/react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import AvatarDefault from "../../../../public/assets/images/user-avatar.png";
import { FaUser } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { IoBookSharp } from "react-icons/io5";
import { IoMdHelpCircle } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { Progress } from "@nextui-org/react";

const iconClasses =
  "text-2xl text-default-500 pointer-events-none flex-shrink-0";

export const ProfileBadges = () => {
  const { user } = useSelector((state: any) => state.auth);

  return (
    <Dropdown className="shadow-xl dark:bg-slate-900" placement="bottom">
      <DropdownTrigger>
        <User
          name=""
          description=""
          avatarProps={{
            src:
              user.avatar === undefined
                ? AvatarDefault.src
                : user.avatar.url || user.avatar,
          }}
          className="text-black dark:text-white  font-[600] cursor-pointer"
        />
      </DropdownTrigger>
      <DropdownMenu
        closeOnSelect
        aria-label="Actions"
        color="default"
        variant="flat"
      >
        <DropdownSection>
          <DropdownItem key="new" description={user.email} showDivider>
            {user.name}
          </DropdownItem>
          <DropdownItem showDivider key="copy">
            <Progress
              label="Level 1"
              size="sm"
              value={20}
              maxValue={100}
              valueLabel={`20/100 Points`}
              showValueLabel={true}
              className="max-w-md"
            />
          </DropdownItem>
          <DropdownItem
            key="copy"
            startContent={<FaUser className={iconClasses} size={20} />}
          >
            My Profile
          </DropdownItem>
          <DropdownItem
            key="edit"
            showDivider
            startContent={<IoSettingsSharp className={iconClasses} size={20} />}
          >
            Settings
          </DropdownItem>
          <DropdownItem
            key="edit"
            startContent={<IoBookSharp className={iconClasses} size={20} />}
          >
            Guide & Tutorials
          </DropdownItem>
          <DropdownItem
            key="edit"
            showDivider
            startContent={<IoMdHelpCircle className={iconClasses} size={20} />}
          >
            Help Center
          </DropdownItem>
        </DropdownSection>
        <DropdownSection>
          <DropdownItem
            key="logout"
            startContent={<IoLogOut className={iconClasses} size={20} />}
          >
            Log out
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};
