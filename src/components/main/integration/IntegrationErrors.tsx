import { useTranslation } from "react-i18next";

const IntegrationErrors = () => {
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
          className="lucide lucide-triangle-alert h-5 w-5 text-orange-500"
        >
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
          <path d="M12 9v4"></path>
          <path d="M12 17h.01"></path>
        </svg>
        <h3 className="text-lg font-bold text-gray-900">
          {t("integration.recentErrors")}
        </h3>
        <span className="ml-auto text-xs text-gray-400">
          {t("integration.last")} 5
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-50/50 text-xs text-gray-500 uppercase tracking-wider">
              <th className="px-6 py-3 font-medium">{t("integration.date")}</th>
              <th className="px-6 py-3 font-medium">
                {t("integration.errorType")}
              </th>
              <th className="px-6 py-3 font-medium">
                {t("integration.description")}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-3 text-gray-500 whitespace-nowrap">
                2026-02-17 09:44
              </td>
              <td className="px-6 py-3">
                <span className="inline-flex px-2 py-0.5 rounded text-xs font-medium bg-orange-50 text-orange-700">
                  Sync Timeout
                </span>
              </td>
              <td className="px-6 py-3 text-gray-700">
                Room status sync timed out after 30s
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-3 text-gray-500 whitespace-nowrap">
                2026-02-16 22:10
              </td>
              <td className="px-6 py-3">
                <span className="inline-flex px-2 py-0.5 rounded text-xs font-medium bg-orange-50 text-orange-700">
                  Rate Limit
                </span>
              </td>
              <td className="px-6 py-3 text-gray-700">
                API rate limit exceeded, retried after 60s
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-3 text-gray-500 whitespace-nowrap">
                2026-02-16 14:30
              </td>
              <td className="px-6 py-3">
                <span className="inline-flex px-2 py-0.5 rounded text-xs font-medium bg-orange-50 text-orange-700">
                  Data Mismatch
                </span>
              </td>
              <td className="px-6 py-3 text-gray-700">
                Reservation #4821 had invalid room reference
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-3 text-gray-500 whitespace-nowrap">
                2026-02-15 08:15
              </td>
              <td className="px-6 py-3">
                <span className="inline-flex px-2 py-0.5 rounded text-xs font-medium bg-orange-50 text-orange-700">
                  Auth Warning
                </span>
              </td>
              <td className="px-6 py-3 text-gray-700">
                Token refresh triggered automatically
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-3 text-gray-500 whitespace-nowrap">
                2026-02-14 19:00
              </td>
              <td className="px-6 py-3">
                <span className="inline-flex px-2 py-0.5 rounded text-xs font-medium bg-orange-50 text-orange-700">
                  Sync Timeout
                </span>
              </td>
              <td className="px-6 py-3 text-gray-700">
                Guest data sync timed out during peak hours
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IntegrationErrors;
