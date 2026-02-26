import type { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

const MenuPop = ({
  setOpenAddMenuWindow,
}: {
  setOpenAddMenuWindow: Dispatch<SetStateAction<boolean>>;
}) => {
  const { t } = useTranslation();
  return (
    <div className="p-4 bg-[#c5a667]/5 border-b border-gray-200">
      <div className="flex flex-wrap gap-3 items-end">
        <div className="flex-1 min-w-50">
          <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-xs text-gray-500 mb-1 block">
            {t("settings.itemName")}
          </label>
          <input
            type="text"
            placeholder="e.g. Grilled Chicken"
            className="flex h-10 w-full rounded-md border bg-[#f6f7f9] px-3 py-2 text-base ring-[#f6f7f9] file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a65e] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-gray-200"
          />
        </div>
        <div className="w-24">
          <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-xs text-gray-500 mb-1 block">
            {t("settings.price")} (₾)
          </label>
          <input
            type="number"
            placeholder="0"
            className="flex h-10 w-full rounded-md border bg-[#f6f7f9] px-3 py-2 text-base ring-[#f6f7f9] file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a65e] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-gray-200"
          />
        </div>
        <div className="w-36">
          <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-xs text-gray-500 mb-1 block">
            {t("settings.category")}
          </label>
          <select className="w-full h-10 px-3 border border-gray-200 rounded-md text-sm">
            <option value="Starters">{t("settings.starters")}</option>
            <option value="Main Course">{t("settings.mainCourse")}</option>
            <option value="Desserts">{t("settings.desserts")}</option>
            <option value="Drinks">{t("settings.drinks")}</option>
          </select>
        </div>
        <div className="flex gap-2">
          <button className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-[#f6f7f9] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a65e] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-[#eee8dd] shadow-sm hover:shadow-md h-10 w-10 bg-green-600 hover:bg-green-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-check w-4 h-4"
            >
              <path d="M20 6 9 17l-5-5"></path>
            </svg>
          </button>
          <button
            onClick={() => setOpenAddMenuWindow(false)}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-[#f6f7f9] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a65e] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-[#dcdfe5] bg-[#f6f7f9] hover:bg-[#c9a65e] hover:text-[#0f1729] h-10 w-10 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-x w-4 h-4"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuPop;
