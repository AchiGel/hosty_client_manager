import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ERROR_DATA } from "../../../constants/errorData";
import ErrorRow from "./ErrorRow";

const AlertIcon = () => (
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
    className="lucide lucide-triangle-alert h-5 w-5 text-orange-500"
  >
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
    <path d="M12 9v4"></path>
    <path d="M12 17h.01"></path>
  </svg>
);

const IntegrationErrors = () => {
  const { t } = useTranslation();

  const memoizedRows = useMemo(
    () => ERROR_DATA.map((error, idx) => <ErrorRow key={idx} error={error} />),
    [],
  );

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex items-center gap-2">
        <AlertIcon />
        <h3 className="text-lg font-bold text-gray-900">
          {t("integration.recentErrors")}
        </h3>
        <span className="ml-auto text-xs text-gray-400">
          {t("integration.last")} {ERROR_DATA.length}
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
            {memoizedRows}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IntegrationErrors;
