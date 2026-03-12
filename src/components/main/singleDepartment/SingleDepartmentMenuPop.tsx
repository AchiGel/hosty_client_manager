import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { EllipsisVerticalIcon } from "../../assets";
import PencilIcon from "../../assets/PencilIcon";
import DeleteIcon from "../../assets/DeleteIcon";

const SingleDepartmentMenuPop = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="w-7 h-7 rounded-md flex items-center justify-center cursor-pointer hover:text-gray-900 hover:bg-gray-100">
          <EllipsisVerticalIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          side="bottom"
          align="end"
          className="min-w-32 overflow-hidden border border-gray-200 rounded-md p-1
          bg-white shadow-md z-50
          data-[state=open]:animate-in
          data-[state=closed]:animate-out
          data-[state=closed]:fade-out-0
          data-[state=open]:fade-in-0
          data-[state=closed]:zoom-out-95
          data-[state=open]:zoom-in-95
          data-[side=bottom]:slide-in-from-top-2
          data-[side=left]:slide-in-from-right-2
          data-[side=right]:slide-in-from-left-2
          data-[side=top]:slide-in-from-bottom-2"
        >
          <DropdownMenu.Item className="menu-item">
            <PencilIcon />
            Edit
          </DropdownMenu.Item>

          <DropdownMenu.Item className="menu-item text-red-600">
            <DeleteIcon />
            Delete
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default SingleDepartmentMenuPop;
