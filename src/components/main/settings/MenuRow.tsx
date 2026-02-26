import type { TFunction } from "i18next";
import { memo } from "react";
import type { MenuItem } from "../../../constants/menuItems";
import StatusBadge from "./StatusBadge";

interface MenuRowProps {
  item: MenuItem;
  t: TFunction;
  onDelete: (id: number) => void;
}

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
        className="cursor-pointer p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
        aria-label={`Delete ${item.name}`}
      >
        <TrashIcon />
      </button>
    </td>
  </tr>
));

export default MenuRow;
