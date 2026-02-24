import { useTranslation } from "react-i18next";
import {
  ClockIcon,
  EllipsisVerticalIcon,
  CalendarDaysIcon,
  XCloseIcon,
  UserPlusIcon,
} from "../../assets";

const ShiftsGridCard = () => {
  const { t } = useTranslation();
  const SHIFT_STAFF = [
    { id: 1, initials: "EW", fullName: "Emma Wilson" },
    { id: 2, initials: "AB", fullName: "Anna Brown" },
    { id: 3, initials: "DK", fullName: "David Kim" },
  ];
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-start justify-between mb-3">
          <div className="size-10 rounded-lg bg-[#c5a667]/10 flex items-center justify-center text-[#c5a667]">
            <ClockIcon className="h-5 w-5 text-[#c5a667]" />
          </div>
          <button className="text-gray-400 hover:text-gray-900 p-1 rounded hover:bg-gray-100">
            <EllipsisVerticalIcon />
          </button>
        </div>
        <h3 className="text-lg font-semibold text-gray-900">Morning</h3>
        <p className="text-sm text-gray-500 mt-1">06:00 - 14:00</p>
        <div className="flex items-center gap-1.5 mt-2">
          <CalendarDaysIcon />
          <span className="text-xs text-gray-500">{t("shifts.everyDay")}</span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            {t("shifts.assignedStaff")}
          </span>
          <span className="text-xs text-gray-400">4 {t("shifts.members")}</span>
        </div>
        <div className="space-y-2">
          {SHIFT_STAFF.map((ss) => (
            <div
              className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-gray-50"
              key={ss.id}
            >
              <div className="flex items-center gap-2">
                <div className="size-7 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">
                  {ss.initials}
                </div>
                <span className="text-sm text-gray-700">{ss.fullName}</span>
              </div>
              <button className="text-gray-400 hover:text-red-500 p-0.5 cursor-pointer">
                <XCloseIcon />
              </button>
            </div>
          ))}
        </div>
        <button className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap font-medium ring-[#f6f7f9] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a65e] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-[#dcdfe5] bg-[#f6f7f9] hover:bg-[#c9a65e] hover:text-[#0f1729] h-9 rounded-md px-3 w-full mt-3 gap-1.5 text-xs">
          <UserPlusIcon />
          {t("shifts.manageStaff")}
        </button>
      </div>
    </div>
  );
};

export default ShiftsGridCard;
