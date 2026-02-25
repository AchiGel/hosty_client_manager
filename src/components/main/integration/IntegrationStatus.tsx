import { useTranslation } from "react-i18next";

const IntegrationStatus = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]">
      <div className="p-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
            {t("integration.connection")}
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold bg-green-50 text-green-700 border border-green-200">
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
              className="lucide lucide-circle-check-big h-4 w-4"
            >
              <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
              <path d="m9 11 3 3L22 4"></path>
            </svg>
            {t("integration.connected")}
          </div>
        </div>
        <div>
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
            {t("integration.environment")}
          </p>
          <p className="text-sm font-semibold text-gray-900">
            {t("integration.production")}
          </p>
        </div>
        <div>
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
            {t("integration.lastSync")}
          </p>
          <div className="flex items-center gap-1.5">
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
              className="lucide lucide-clock h-3.5 w-3.5 text-gray-400"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <p className="text-sm font-semibold text-gray-900">
              2026-02-25 14:32:44
            </p>
          </div>
        </div>
        <div>
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
            {t("integration.apiHealth")}
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
            <p className="text-sm font-semibold text-gray-900">
              {t("integration.ok")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationStatus;
