import { useTranslation } from "react-i18next";
import { memo, useCallback, useState, type ReactNode } from "react";
import MenuPop from "./MenuPop";
import { MENU_ITEMS } from "../../../constants/menuItems";
import MenuRow from "./MenuRow";

const PlusIcon = memo(() => (
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
    className="lucide lucide-plus w-4 h-4"
  >
    <path d="M5 12h14"></path>
    <path d="M12 5v14"></path>
  </svg>
));

const SettingsRestaurantMenu = (): ReactNode => {
  const { t } = useTranslation();

  const [openAddMenuWindow, setOpenAddMenuWindow] = useState(false);

  const handleDelete = useCallback((id: number): void => {
    console.log(`Delete item ${id}`);
  }, []);

  const handleAddItem = useCallback((): void => {
    setOpenAddMenuWindow(true);
    console.log("Add new item");
  }, []);

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] overflow-hidden">
      <div className="p-6 border-b border-gray-200 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold text-gray-900">
            {t("settings.restaurantMenu")}
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            {t("settings.restaurantMenuSub")}
          </p>
        </div>
        <button
          onClick={handleAddItem}
          className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-sm hover:shadow-md h-10 px-4 py-2 bg-[#c5a667] hover:bg-[#b09358] text-white gap-2"
        >
          <PlusIcon />
          {t("settings.addItem")}
        </button>
      </div>
      {openAddMenuWindow && (
        <MenuPop setOpenAddMenuWindow={setOpenAddMenuWindow} />
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-50/50 text-xs text-gray-500 uppercase tracking-wider">
              <th className="px-6 py-4 font-medium">
                {t("settings.itemName")}
              </th>
              <th className="px-6 py-4 font-medium">
                {t("settings.category")}
              </th>
              <th className="px-6 py-4 font-medium">{t("settings.price")}</th>
              <th className="px-6 py-4 font-medium">{t("settings.status")}</th>
              <th className="px-6 py-4 font-medium text-right">
                {t("settings.actions")}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {MENU_ITEMS.map((item) => (
              <MenuRow
                key={item.id}
                item={item}
                t={t}
                onDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SettingsRestaurantMenu;
