import { useTranslation } from "react-i18next";

const StaffSearchbar = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
      <label className="flex-1 relative">
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
          className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </svg>
        <input
          className="w-full pl-10 pr-4 py-2.5 bg-transparent border-none focus:ring-0 text-sm text-gray-900 placeholder-gray-400 font-medium"
          type="search"
          placeholder={t("staff.search")}
        />
      </label>
    </div>
  );
};

export default StaffSearchbar;
