import { useTranslation } from "react-i18next";
import { memo, useCallback, type ReactNode } from "react";
import type { TFunction } from "i18next";

interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: string;
  available: boolean;
}

interface StatusBadgeProps {
  available: boolean;
  t: TFunction;
}

interface MenuRowProps {
  item: MenuItem;
  t: TFunction;
  onDelete: (id: number) => void;
}

const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: "Georgian Khachapuri",
    category: "Main Course",
    price: "₾25",
    available: true,
  },
  {
    id: 2,
    name: "Khinkali (10 pcs)",
    category: "Main Course",
    price: "₾18",
    available: true,
  },
  {
    id: 3,
    name: "Caesar Salad",
    category: "Starters",
    price: "₾15",
    available: true,
  },
  {
    id: 4,
    name: "Grilled Salmon",
    category: "Main Course",
    price: "₾35",
    available: false,
  },
  {
    id: 5,
    name: "Tiramisu",
    category: "Desserts",
    price: "₾12",
    available: true,
  },
];

const TrashIcon = memo(() => (
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
    className="lucide lucide-trash2 w-4 h-4"
  >
    <path d="M3 6h18"></path>
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
    <line x1="10" x2="10" y1="11" y2="17"></line>
    <line x1="14" x2="14" y1="11" y2="17"></line>
  </svg>
));

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

const StatusBadge = memo<StatusBadgeProps>(({ available, t }) => (
  <button
    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-colors ${
      available
        ? "bg-green-50 text-green-600 hover:bg-green-100"
        : "bg-red-50 text-red-600 hover:bg-red-100"
    }`}
  >
    <span
      className={`w-1.5 h-1.5 rounded-full ${available ? "bg-green-600" : "bg-red-600"}`}
    ></span>
    {t(available ? "common.available" : "common.unavailable")}
  </button>
));

const MenuRow = memo<MenuRowProps>(({ item, t, onDelete }) => (
  <tr className="hover:bg-gray-50 transition-colors">
    <td className="px-6 py-4 font-medium text-gray-900">{item.name}</td>
    <td className="px-6 py-4 text-gray-500">{item.category}</td>
    <td className="px-6 py-4 text-gray-900">{item.price}</td>
    <td className="px-6 py-4">
      <StatusBadge available={item.available} t={t} />
    </td>
    <td className="px-6 py-4 text-right">
      <button
        onClick={() => onDelete(item.id)}
        className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
        aria-label={`Delete ${item.name}`}
      >
        <TrashIcon />
      </button>
    </td>
  </tr>
));

const SettingsRestaurantMenu = (): ReactNode => {
  const { t } = useTranslation();

  const [openAddMenuWindow, setOpenAddMenuWindow] = useState()

  const handleDelete = useCallback((id: number): void => {
    console.log(`Delete item ${id}`);
  }, []);

  const handleAddItem = useCallback((): void => {
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
          className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-sm hover:shadow-md h-10 px-4 py-2 bg-[#c5a667] hover:bg-[#b09358] text-white gap-2"
        >
          <PlusIcon />
          {t("settings.addItem")}
        </button>
      </div>
    
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
