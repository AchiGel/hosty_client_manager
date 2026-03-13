import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon } from "../../assets";
import CheckIcon from "../../assets/CheckIcon";
import { ROOM_CATEGORIES } from "../../../constants/roomCategories";
import type { Dispatch, SetStateAction } from "react";

type RoomsTableTypeRowProps = {
  isEditing: boolean;
  editedRoomType: string;
  setEditedRoomType: Dispatch<SetStateAction<string>>;
  roomType: string;
};

const RoomsTableTypeRow = ({
  isEditing,
  editedRoomType,
  setEditedRoomType,
  roomType,
}: RoomsTableTypeRowProps) => {
  return (
    <>
      {isEditing ? (
        <Select.Root value={editedRoomType} onValueChange={setEditedRoomType}>
          <Select.Trigger className="cursor-pointer flex h-10 items-center justify-between rounded-md border border-[#dcdfe5] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a65e] focus:ring-offset-2 w-full sm:w-48 bg-white">
            <Select.Value />
            <ChevronDownIcon className="ml-2 h-4 w-4 opacity-60" />
          </Select.Trigger>

          <Select.Portal>
            <Select.Content
              side="bottom"
              className="z-50 mt-1 w-(--radix-select-trigger-width) rounded-md border border-[#dcdfe5] bg-white shadow-md"
            >
              <Select.Viewport className="p-1">
                <Select.Item
                  value={roomType}
                  className="relative cursor-pointer rounded-sm px-3 py-2 pl-8 text-sm outline-none hover:bg-[#c9a65e] flex items-center"
                >
                  <Select.ItemIndicator className="absolute left-2 flex items-center">
                    <CheckIcon />
                  </Select.ItemIndicator>
                  <Select.ItemText>{roomType}</Select.ItemText>
                </Select.Item>

                {ROOM_CATEGORIES.filter((rc) => rc.roomType !== roomType).map(
                  (rc) => (
                    <Select.Item
                      key={rc.roomType}
                      value={rc.roomType}
                      className="relative cursor-pointer rounded-sm px-3 py-2 pl-8 text-sm outline-none hover:bg-[#c9a65e] flex items-center"
                    >
                      <Select.ItemIndicator className="absolute left-2 flex items-center">
                        <CheckIcon />
                      </Select.ItemIndicator>
                      <Select.ItemText>{rc.roomType}</Select.ItemText>
                    </Select.Item>
                  ),
                )}
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      ) : (
        <span className="text-sm text-gray-600 bg-gray-100 px-2.5 py-1 rounded-md">
          {roomType}
        </span>
      )}
    </>
  );
};

export default RoomsTableTypeRow;
