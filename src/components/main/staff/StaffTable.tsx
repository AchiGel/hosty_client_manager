import { useTranslation } from "react-i18next";
import { STAFF_DATA, STAFF_TABLE_HEADER } from "../../../constants/staffData";
import { ChevronLeftIcon, ChevronRightIcon } from "../../assets";
import StaffTableRow from "./StaffTableRow";

const StaffTable = () => {
  const { t } = useTranslation();

  const labelTranslationKeys: Record<string, string> = {
    FullName: "staff.fullName",
    Department: "staff.department",
    Shift: "staff.shift",
    ShiftStatus: "staff.shiftStatus",
    AccountStatus: "staff.accountStatus",
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
              <StaffTableRow
                key={sd.id}
                fullName={sd.fullName}
                email={sd.email}
                department={sd.department}
                shift={sd.shift}
                isOnShift={sd.isOnShift}
                accountStatus={sd.accountStatus}
              />
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
