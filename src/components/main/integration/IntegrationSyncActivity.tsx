import { useMemo } from "react";
import { useTranslation } from "react-i18next";

interface SyncActivityRecord {
  id: string;
  label: string;
  lastSync: string;
  status: "success" | "pending" | "error";
  icon: "users" | "calendar" | "door";
}

const SYNC_ACTIVITIES: SyncActivityRecord[] = [
  {
    id: "guests",
    label: "integration.guestData",
    lastSync: "2026-02-25 14:32:44",
    status: "success",
    icon: "users",
  },
  {
    id: "reservations",
    label: "integration.reservations",
    lastSync: "2026-02-25 14:32:44",
    status: "success",
    icon: "calendar",
  },
  {
    id: "rooms",
    label: "integration.roomStatus",
    lastSync: "2026-02-25 14:32:44",
    status: "success",
    icon: "door",
  },
];

const ActivityIcon = ({ type }: { type: "users" | "calendar" | "door" }) => {
  const icons = {
    users: (
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
        className="lucide lucide-users h-5 w-5"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    calendar: (
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
        className="lucide lucide-calendar-check h-5 w-5"
      >
        <path d="M8 2v4"></path>
        <path d="M16 2v4"></path>
        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
        <path d="M3 10h18"></path>
        <path d="m9 16 2 2 4-4"></path>
      </svg>
    ),
    door: (
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
        className="lucide lucide-door-open h-5 w-5"
      >
        <path d="M13 4h3a2 2 0 0 1 2 2v14"></path>
        <path d="M2 20h3"></path>
        <path d="M13 20h9"></path>
        <path d="M10 12v.01"></path>
        <path d="M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z"></path>
      </svg>
    ),
  };

  return icons[type];
};

const StatusBadge = ({
  status,
}: {
  status: "success" | "pending" | "error";
}) => {
  const statusConfig = {
    success: {
      bg: "bg-green-50",
      text: "text-green-700",
      dot: "bg-green-600",
    },
    pending: {
      bg: "bg-yellow-50",
      text: "text-yellow-700",
      dot: "bg-yellow-600",
    },
    error: {
      bg: "bg-red-50",
      text: "text-red-700",
      dot: "bg-red-600",
    },
  };

  const config = statusConfig[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`}></span>
    </span>
  );
};

const ActivityRow = ({
  activity,
  t,
}: {
  activity: SyncActivityRecord;
  t: (key: string) => string;
}) => (
  <div className="px-6 py-4 flex items-center justify-between">
    <div className="flex items-center gap-4">
      <div className="p-2 bg-gray-50 rounded-lg text-gray-500">
        <ActivityIcon type={activity.icon} />
      </div>
      <div>
        <p className="font-medium text-gray-900">{t(activity.label)}</p>
        <p className="text-xs text-gray-400 mt-0.5">
          {t("integration.lastSync")}: {activity.lastSync}
        </p>
      </div>
    </div>
    <div className="flex items-center gap-1.5">
      <StatusBadge status={activity.status} />
      <span className="text-xs font-medium">{t(`common.${activity.status}`)}</span>
    </div>
  </div>
);

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
