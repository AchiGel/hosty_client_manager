import { Link } from "react-router-dom";
import { DASHBOARD_TOP_PERFORMERS } from "../../../constants/topPerformers";
import TopPerformersRow from "./TopPerformersRow";
import { useTranslation } from "react-i18next";

const DashboardTopPerformers = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] overflow-hidden">
      <div className="p-6 border-b border-gray-200 flex justify-between items-center">
        <div className="flex items-center gap-2">
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
            className="lucide lucide-award w-5 h-5 text-[#c5a667]"
          >
            <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
            <circle cx="12" cy="8" r="6"></circle>
          </svg>
          <h3 className="text-lg font-bold text-gray-900">
            {t("dashboard.topPerformers")}
          </h3>
        </div>
        <Link
          className="text-sm font-medium text-[#c5a667] hover:text-[#b09358]"
          to={"/staff"}
        >
          {t("common.fullList")}
        </Link>
      </div>
      <div className="divide-y divide-gray-100">
        {DASHBOARD_TOP_PERFORMERS.map((dtp) => (
          <TopPerformersRow
            key={dtp.id}
            id={dtp.id}
            staffInitials={dtp.staffInitials}
            staffName={dtp.staffName}
            staffLastname={dtp.staffLastname}
            avTime={dtp.avTime}
            ranking={dtp.ranking}
            department={dtp.department}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardTopPerformers;
