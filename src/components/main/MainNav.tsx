import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher";
import { SearchIcon, ChevronDownIcon } from "../assets";

const MainNav = () => {
  const { t } = useTranslation();
  return (
    <nav className="shrink-0 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder={t("common.search") + "..."}
            className="h-9 pl-9 pr-4 w-64 bg-gray-50 border border-gray-200 rounded-md text-sm placeholder:text-gray-400 text-gray-900 focus:ring-2 focus:ring-[#c5a667]/50 focus:border-[#c5a667] focus:outline-none"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <LanguageSwitcher />
        <div className="h-8 w-px bg-gray-200"></div>
        <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-lg px-2 py-1 transition-colors">
          <div className="h-8 w-8 rounded-full bg-cover bg-center border border-gray-200">
            X
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-gray-900">Nina Williams</p>
          </div>
          <ChevronDownIcon className="h-4 w-4 text-gray-400" />
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
