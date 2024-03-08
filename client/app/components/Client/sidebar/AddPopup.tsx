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
          <DropdownSection title="Notifications">
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
  