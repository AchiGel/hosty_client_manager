import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import ActivityRow from "./ActivityRow";
import { SYNC_ACTIVITIES } from "../../../constants/syncActivities";

const HeaderIcon = () => (
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
    className="lucide lucide-activity h-5 w-5 text-[#c5a667]"
  >
    <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
  </svg>
);

const IntegrationSyncActivity = () => {
  const { t } = useTranslation();

  const memoizedRows = useMemo(
    () =>
      SYNC_ACTIVITIES.map((activity) => (
        <ActivityRow key={activity.id} activity={activity} t={t} />
      )),
    [t],
  );

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex items-center gap-2">
        <HeaderIcon />
        <h3 className="text-lg font-bold text-gray-900">
          {t("integration.syncActivity")}
        </h3>
      </div>
      <div className="divide-y divide-gray-100">{memoizedRows}</div>
    </div>
  );
};

export default IntegrationSyncActivity;
