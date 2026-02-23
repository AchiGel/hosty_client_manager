import { Link } from "react-router-dom";
import { RECENT_REQUEST_TABLE_HEAD } from "../../../constants/recentRequestTableHead";
import { RECENT_REQUEST_TABLE_BODY } from "../../../constants/recentRequestTableBody";
import { useTranslation } from "react-i18next";

const DashboardRecentRequest = () => {
  const { t } = useTranslation();
  const labelTranslationKeys: Record<string, string> = {
    GuestRoom: "dashboard.guestRoom",
    Request: "dashboard.request",
    Time: "dashboard.time",
    Status: "dashboard.status",
    Action: "dashboard.action",
  };

  const statusTranslationKeys: Record<string, string> = {
    New: "dashboard.new",
    Review: "dashboard.review",
    InProgress: "dashboard.inProgress",
    Completed: "dashboard.completed",
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
              <tr
                className="group hover:bg-gray-50 transition-colors"
                key={rrtb.id}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">
                      {rrtb.staffInitials}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {rrtb.staffName + " " + rrtb.staffLastname}
                      </p>
                      <p className="text-xs text-gray-500">
                        {t("common.room") + " " + rrtb.roomNumber}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-900">{rrtb.request}</td>
                <td className="px-6 py-4 text-gray-500">
                  {rrtb.time + " " + t("common.ago")}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${rrtb.status === "New" ? "bg-red-50 text-red-600" : rrtb.status === "Review" ? "bg-orange-50 text-orange-600" : rrtb.status === "InProgress" ? "bg-blue-50 text-blue-600" : "bg-green-50 text-green-600"} `}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${rrtb.status === "New" ? "bg-red-600" : rrtb.status === "Review" ? "bg-orange-600" : rrtb.status === "InProgress" ? "bg-blue-600" : "bg-green-600"}`}
                    ></span>
                    {t(statusTranslationKeys[rrtb.status] || rrtb.status)}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-gray-400 hover:text-[#c5a667] transition-colors">
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
                      className="lucide lucide-ellipsis-vertical w-5 h-5"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="12" cy="5" r="1"></circle>
                      <circle cx="12" cy="19" r="1"></circle>
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardRecentRequest;
