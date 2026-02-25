import { useTranslation } from "react-i18next";

const DepartmentsHeader = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          {t("departments.title")}
        </h1>
        <p className="text-gray-500 mt-1">{t("departments.subTitle")}</p>
      </div>
      <button className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-[#f6f7f9] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a65e] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-sm hover:shadow-md h-10 px-4 py-2 bg-[#c5a667] hover:bg-[#b09358] text-white gap-2">
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
          className="lucide lucide-plus h-5 w-5"
        >
          <path d="M5 12h14"></path>
          <path d="M12 5v14"></path>
        </svg>
        {t("departments.newDepartment")}
      </button>
    </div>
  );
};

export default DepartmentsHeader;
