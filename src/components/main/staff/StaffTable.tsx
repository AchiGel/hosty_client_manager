import { useTranslation } from "react-i18next";
import { STAFF_DATA, STAFF_TABLE_HEADER } from "../../../constants/staffData";
import {
  ClockIcon,
  EllipsisVerticalIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "../../assets";

const StaffTable = () => {
  const { t } = useTranslation();

  const labelTranslationKeys: Record<string, string> = {
    FullName: "staff.fullName",
    Department: "staff.department",
    Shift: "staff.shift",
    ShiftStatus: "staff.shiftStatus",
    AccountStatus: "staff.accountStatus",
  };

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
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-175">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              {STAFF_TABLE_HEADER.map((sth) => (
                <th
                  className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider"
                  key={sth.id}
                >
                  {t(labelTranslationKeys[sth.label] || sth.label)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {STAFF_DATA.map((sd) => (
              <tr className="hover:bg-gray-50 transition-colors" key={sd.id}>
                <td className="px-6 py-4">
                  <p className="text-sm font-medium text-gray-900">
                    {sd.fullName}
                  </p>
                  <p className="text-xs text-gray-400">{sd.email}</p>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                    {sd.department}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center gap-1.5 text-sm  ${sd.shift == "notAssigned" ? "text-gray-400 italic" : "text-gray-700"}`}
                  >
                    {sd.shift == "notAssigned" ? null : (
                      <ClockIcon />
                    )}

                    {t(shiftTranslationKeys[sd.shift] || sd.shift)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div
                      className={`size-2 rounded-full ${sd.isOnShift ? "bg-emerald-500" : "bg-gray-300"}`}
                    ></div>
                    <span className="text-sm text-gray-700">
                      {sd.isOnShift ? t("staff.onShift") : t("staff.offShift")}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${sd.accountStatus === "active" ? "bg-green-50 text-green-700 border border-green-100" : sd.accountStatus === "disabled" ? "bg-red-50 text-red-600 border border-red-100" : "bg-yellow-50 text-yellow-700 border border-yellow-100"}`}
                  >
                    {t(
                      accountStatusTranslationKeys[sd.accountStatus] ||
                        sd.accountStatus,
                    )}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="cursor-pointer text-gray-400 hover:text-gray-900 p-1 rounded hover:bg-gray-100 transition-colors">
                    <EllipsisVerticalIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="border-t border-gray-200 px-6 py-4 flex items-center justify-between">
        <span className="text-xs text-gray-500">
          {t("common.showing") + " 7 " + t("common.of") + " 7"}
        </span>
        <div className="flex gap-2">
          <button className="cursor-pointer size-8 rounded flex items-center justify-center border border-gray-200 text-gray-400 disabled:opacity-50">
            <ChevronLeftIcon />
          </button>
          <button className="cursor-pointer size-8 rounded flex items-center justify-center border border-gray-200 text-gray-500">
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StaffTable;
