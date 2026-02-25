import { useTranslation } from "react-i18next";
import { PlusIcon } from "../../assets";

const StaffHeader = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          {t("staff.title")}
        </h1>
        <p className="text-gray-500 mt-1">{t("staff.subTitle")}</p>
      </div>
      <button className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-[#f6f7f9] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a65e] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-sm hover:shadow-md h-10 px-4 py-2 bg-[#c5a667] hover:bg-[#b09358] text-white gap-2">
        <PlusIcon />
        {t("staff.invitation")}
      </button>
    </div>
  );
};

export default StaffHeader;
