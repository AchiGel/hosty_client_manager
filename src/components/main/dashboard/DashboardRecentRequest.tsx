import { Link } from "react-router-dom";
import { RECENT_REQUEST_TABLE_HEAD } from "../../../constants/recentRequestTableHead";
import { RECENT_REQUEST_TABLE_BODY } from "../../../constants/recentRequestTableBody";
import { useTranslation } from "react-i18next";
import DashboardRecentRequestTableRow from "./DashboardRecentRequestTableRow";

const DashboardRecentRequest = () => {
  const { t } = useTranslation();

  const labelTranslationKeys: Record<string, string> = {
    GuestRoom: "dashboard.guestRoom",
    Request: "dashboard.request",
    Time: "dashboard.time",
    Status: "dashboard.status",
    Action: "dashboard.action",
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col">
      <div className="p-6 border-b border-gray-200 flex justify-between items-center">
        <h3 className="text-lg font-bold text-gray-900">
          {t("dashboard.recentRequests")}
        </h3>
        <Link
          to={"/requests"}
          className="text-sm font-medium text-[#c5a667] hover:text-[#b09358]"
        >
          {t("common.viewAll")}
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/50 text-xs text-gray-500 uppercase tracking-wider">
              {RECENT_REQUEST_TABLE_HEAD.map((rrth) => (
                <th
                  key={rrth.id}
                  className={`px-6 py-4 font-medium ${rrth.id === 5 ? "text-right" : ""}`}
                >
                  {t(labelTranslationKeys[rrth.label || rrth.label])}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {RECENT_REQUEST_TABLE_BODY.map((rrtb) => (
              <DashboardRecentRequestTableRow
                key={rrtb.id}
                staffInitials={rrtb.staffInitials}
                staffName={rrtb.staffLastname}
                staffLastname={rrtb.staffLastname}
                roomNumber={rrtb.roomNumber}
                request={rrtb.request}
                time={rrtb.time}
                status={rrtb.status}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardRecentRequest;
