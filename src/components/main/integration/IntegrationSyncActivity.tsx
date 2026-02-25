import { useTranslation } from "react-i18next";

const IntegrationSyncActivity = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-activity h-5 w-5 text-[#c5a667]"
        >
          <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
        </svg>
        <h3 className="text-lg font-bold text-gray-900">
          {t("integration.syncActivity")}
        </h3>
      </div>
      <div className="divide-y divide-gray-100">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-gray-50 rounded-lg text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-users h-5 w-5"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div>
              <p className="font-medium text-gray-900">
                {t("integration.guestData")}
              </p>
              <p className="text-xs text-gray-400 mt-0.5">
                {t("integration.lastSync")}: 2026-02-25 14:32:44
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
            <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
            {t("common.success")}
          </span>
        </div>
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-gray-50 rounded-lg text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-calendar-check h-5 w-5"
              >
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
                <path d="m9 16 2 2 4-4"></path>
              </svg>
            </div>
            <div>
              <p className="font-medium text-gray-900">
                {t("integration.reservations")}
              </p>
              <p className="text-xs text-gray-400 mt-0.5">
                {t("integration.lastSync")}: 2026-02-25 14:32:44
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
            <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
            {t("common.success")}
          </span>
        </div>
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-gray-50 rounded-lg text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-door-open h-5 w-5"
              >
                <path d="M13 4h3a2 2 0 0 1 2 2v14"></path>
                <path d="M2 20h3"></path>
                <path d="M13 20h9"></path>
                <path d="M10 12v.01"></path>
                <path d="M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z"></path>
              </svg>
            </div>
            <div>
              <p className="font-medium text-gray-900">
                {t("integration.roomStatus")}
              </p>
              <p className="text-xs text-gray-400 mt-0.5">
                {t("integration.lastSync")}: 2026-02-25 14:32:44
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
            <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
            {t("common.success")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default IntegrationSyncActivity;
