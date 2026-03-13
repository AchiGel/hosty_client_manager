import { useTranslation } from "react-i18next";
import { ChevronDownIcon, SearchIcon } from "../../assets";
import * as Select from "@radix-ui/react-select";
import { ROOM_CATEGORIES } from "../../../constants/roomCategories";
import CheckIcon from "../../assets/CheckIcon";
import type { Dispatch, SetStateAction } from "react";

const RoomsSearch = ({
  searchValue,
  setSearchValue,
}: {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <div className="relative flex-1">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          placeholder={t("rooms.placeholder")}
          className="flex h-10 w-full rounded-md border border-[#dcdfe5] bg-[#f6f7f9] px-3 py-2 text-base ring-[#f6f7f9] file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a65e] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-9"
        />
      </div>
      <Select.Root>
        <Select.Trigger className="cursor-pointer flex h-10 items-center justify-between rounded-md border border-[#dcdfe5] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a65e] focus:ring-offset-2 w-full sm:w-48 bg-white">
          <Select.Value placeholder={t("common.all")} />
          <ChevronDownIcon className="ml-2 h-4 w-4 opacity-60" />
        </Select.Trigger>

        <Select.Portal>
          <Select.Content
            side="bottom"
            align="start"
            className="z-50 mt-1 w-(--radix-select-trigger-width) rounded-md border border-[#dcdfe5] bg-white shadow-md"
          >
            <Select.Viewport className="p-1">
              <Select.Item
                value="all"
                className="relative cursor-pointer rounded-sm px-3 py-2 pl-8 text-sm outline-none hover:bg-[#c9a65e] flex items-center"
              >
                <Select.ItemIndicator className="absolute left-2 flex items-center">
                  <CheckIcon />
                </Select.ItemIndicator>

                <Select.ItemText>{t("common.all")}</Select.ItemText>
              </Select.Item>

              {ROOM_CATEGORIES.map((rc) => (
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
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
};

export default RoomsSearch;
