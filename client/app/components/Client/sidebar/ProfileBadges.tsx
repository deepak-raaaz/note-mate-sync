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

import {User} from "@nextui-org/react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import AvatarDefault from "../../../../public/assets/images/user-avatar.png";

const iconClasses =
  "text-2xl text-default-500 pointer-events-none flex-shrink-0";



  
export const ProfileBadges = () => {
  const { user } = useSelector((state: any) => state.auth);

  return (
    <Dropdown className="shadow-xl" placement="bottom">
      <DropdownTrigger>
      <User  
      name={user.name || 'Name'}
      description={user.email}
      avatarProps={{
        src:  user.avatar === undefined ? AvatarDefault.src  : user.avatar.url || user.avatar
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
        <DropdownSection title="Profiles">
          <DropdownItem
            key="new"
            description="Create a new file"
            shortcut="⌘N"
            startContent={<AddNoteBulkIcon className={iconClasses} />}
          >
            New file
          </DropdownItem>
          <DropdownItem
            key="copy"
            description="Copy the file link"
            shortcut="⌘C"
            startContent={<CopyDocumentBulkIcon className={iconClasses} />}
          >
            Copy link
          </DropdownItem>
          <DropdownItem
            key="edit"
            description="Allows you to edit the file"
            shortcut="⌘⇧E"
            startContent={<EditDocumentBulkIcon className={iconClasses} />}
          >
            Edit file
          </DropdownItem>
        </DropdownSection>
        <DropdownSection title="Danger zone">
          <DropdownItem
            key="delete"
            className="text-danger"
            color="danger"
            description="Permanently delete the file"
            shortcut="⌘⇧D"
            startContent={
              <DeleteDocumentBulkIcon
                className={clsx(iconClasses, "!text-danger")}
              />
            }
          >
            Delete file
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};
