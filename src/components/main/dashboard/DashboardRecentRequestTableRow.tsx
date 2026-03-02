import RequestMenuPop from "../requests/RequestMenuPop";
import { useTranslation } from "react-i18next";

const DashboardRecentRequestTableRow = ({
  staffInitials,
  staffName,
  staffLastname,
  roomNumber,
  request,
  time,
  status,
}: {
  staffInitials: string;
  staffName: string;
  staffLastname: string;
  roomNumber: string;
  request: string;
  time: string;
  status: string;
}) => {
  const { t } = useTranslation();

  const statusTranslationKeys: Record<string, string> = {
    New: "dashboard.new",
    Review: "dashboard.review",
    InProgress: "dashboard.inProgress",
    Completed: "dashboard.completed",
  };
  return (
    <tr className="group hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">
            {staffInitials}
          </div>
          <div>
            <p className="font-medium text-gray-900">
              {staffName + " " + staffLastname}
            </p>
            <p className="text-xs text-gray-500">
              {t("common.room") + " " + roomNumber}
            </p>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 text-gray-900">{request}</td>
      <td className="px-6 py-4 text-gray-500">
        {time + " " + t("common.ago")}
      </td>
      <td className="px-6 py-4">
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${status === "New" ? "bg-red-50 text-red-600" : status === "Review" ? "bg-orange-50 text-orange-600" : status === "InProgress" ? "bg-blue-50 text-blue-600" : "bg-green-50 text-green-600"} `}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${status === "New" ? "bg-red-600" : status === "Review" ? "bg-orange-600" : status === "InProgress" ? "bg-blue-600" : "bg-green-600"}`}
          ></span>
          {t(statusTranslationKeys[status] || status)}
        </span>
      </td>
      <td className="relative px-6 py-4 text-right">
        <RequestMenuPop />
      </td>
    </tr>
  );
};

export default DashboardRecentRequestTableRow;
