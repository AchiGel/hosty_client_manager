import { useTranslation } from "react-i18next";

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
              className="lucide lucide-clock h-5 w-5"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <button className="text-gray-400 hover:text-gray-900 p-1 rounded hover:bg-gray-100">
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
              className="lucide lucide-ellipsis-vertical h-5 w-5"
            >
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="12" cy="5" r="1"></circle>
              <circle cx="12" cy="19" r="1"></circle>
            </svg>
          </button>
        </div>
        <h3 className="text-lg font-semibold text-gray-900">Morning</h3>
        <p className="text-sm text-gray-500 mt-1">06:00 - 14:00</p>
        <div className="flex items-center gap-1.5 mt-2">
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
            className="lucide lucide-calendar-days h-3.5 w-3.5 text-gray-400"
          >
            <path d="M8 2v4"></path>
            <path d="M16 2v4"></path>
            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
            <path d="M3 10h18"></path>
            <path d="M8 14h.01"></path>
            <path d="M12 14h.01"></path>
            <path d="M16 14h.01"></path>
            <path d="M8 18h.01"></path>
            <path d="M12 18h.01"></path>
            <path d="M16 18h.01"></path>
          </svg>
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
                  className="lucide lucide-x h-3.5 w-3.5"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>
          ))}
        </div>
        <button className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap font-medium ring-[#f6f7f9] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a65e] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-[#dcdfe5] bg-[#f6f7f9] hover:bg-[#c9a65e] hover:text-[#0f1729] h-9 rounded-md px-3 w-full mt-3 gap-1.5 text-xs">
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
            className="lucide lucide-user-plus h-3.5 w-3.5"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <line x1="19" x2="19" y1="8" y2="14"></line>
            <line x1="22" x2="16" y1="11" y2="11"></line>
          </svg>
          {t("shifts.manageStaff")}
        </button>
      </div>
    </div>
  );
};

export default ShiftsGridCard;
