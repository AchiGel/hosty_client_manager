import { useTranslation } from "react-i18next";
import { ChevronDownIcon, SearchIcon } from "../../assets";

const RoomsSearch = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <div className="relative flex-1">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder={t("rooms.placeholder")}
          className="flex h-10 w-full rounded-md border border-[#dcdfe5] bg-[#f6f7f9] px-3 py-2 text-base ring-[#f6f7f9] file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a65e] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-9"
        />
      </div>
      <button
        type="button"
        role="combobox"
        aria-controls="radix-:r0:"
        aria-expanded="false"
        aria-autocomplete="none"
        dir="ltr"
        data-state="closed"
        className="flex h-10 items-center justify-between rounded-md border border-[#dcdfe5] px-3 py-2 text-sm ring-[#f6f7f9] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-full sm:w-48 bg-white"
      >
        <span>{t("common.all")}</span>
        <ChevronDownIcon />
      </button>
    </div>
  );
};

export default RoomsSearch;
