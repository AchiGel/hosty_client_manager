import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { EllipsisVerticalIcon } from "../../assets";
import { useState } from "react";
import AppModal from "../../ui/AppModal";
import StaffAssignShiftModal from "./StaffAssignShiftModal";

const StaffMenuPop = () => {
  const [openAssign, setOpenAssign] = useState(false);

  return (
    <>
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
            className="min-w-32 overflow-hidden border border-gray-200 rounded-md p-1 bg-white shadow-md z-50"
          >
            <DropdownMenu.Item
              className="menu-item"
              onSelect={() => {
                setOpenAssign(true);
              }}
            >
              Assign Shift
            </DropdownMenu.Item>

            <DropdownMenu.Item className="menu-item">
              Remove Shift
            </DropdownMenu.Item>

            <DropdownMenu.Item className="menu-item">
              Move Department
            </DropdownMenu.Item>

            <DropdownMenu.Item className="menu-item text-red-600">
              Deactivate
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>

      <AppModal
        open={openAssign}
        onOpenChange={setOpenAssign}
        title="Assign Shift"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-clock w-5 h-5 text-[#c5a667]"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        }
      >
        <StaffAssignShiftModal />
      </AppModal>
    </>
  );
};

export default StaffMenuPop;
