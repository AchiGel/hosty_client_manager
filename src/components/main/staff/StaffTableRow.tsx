import { useTranslation } from "react-i18next";
import { ClockIcon } from "../../assets";
import StaffMenuPop from "./StaffMenuPop";

const StaffTableRow = ({
  fullName,
  email,
  department,
  shift,
  isOnShift,
  accountStatus,
}: {
  fullName: string;
  email: string;
  department: string;
  shift: string;
  isOnShift: boolean;
  accountStatus: string;
}) => {
  const { t } = useTranslation();
  const shiftTranslationKeys: Record<string, string> = {
    morning: "staff.morning",
    night: "staff.night",
    notAssigned: "staff.notAssigned",
  };

  const accountStatusTranslationKeys: Record<string, string> = {
    active: "staff.active",
    disabled: "staff.disabled",
    invited: "staff.invited",
  };
  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4">
        <p className="text-sm font-medium text-gray-900">{fullName}</p>
        <p className="text-xs text-gray-400">{email}</p>
      </td>
      <td className="px-6 py-4">
        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
          {department}
        </span>
      </td>
      <td className="px-6 py-4">
        <span
          className={`inline-flex items-center gap-1.5 text-sm  ${shift == "notAssigned" ? "text-gray-400 italic" : "text-gray-700"}`}
        >
          {shift == "notAssigned" ? null : <ClockIcon />}

          {t(shiftTranslationKeys[shift] || shift)}
        </span>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <div
            className={`size-2 rounded-full ${isOnShift ? "bg-emerald-500" : "bg-gray-300"}`}
          ></div>
          <span className="text-sm text-gray-700">
            {isOnShift ? t("staff.onShift") : t("staff.offShift")}
          </span>
        </div>
      </td>
      <td className="px-6 py-4">
        <span
          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${accountStatus === "active" ? "bg-green-50 text-green-700 border border-green-100" : accountStatus === "disabled" ? "bg-red-50 text-red-600 border border-red-100" : "bg-yellow-50 text-yellow-700 border border-yellow-100"}`}
        >
          {t(accountStatusTranslationKeys[accountStatus] || accountStatus)}
        </span>
      </td>
      <td className="px-6 py-4 text-right">{<StaffMenuPop />}</td>
    </tr>
  );
};

export default StaffTableRow;
