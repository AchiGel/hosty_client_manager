import type { TFunction } from "i18next";
import { memo } from "react";

interface StatusBadgeProps {
  available: boolean;
  t: TFunction;
}

const StatusBadge = memo<StatusBadgeProps>(({ available, t }) => (
  <button
    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-colors ${
      available
        ? "bg-green-50 text-green-600 hover:bg-green-100"
        : "bg-red-50 text-red-600 hover:bg-red-100"
    }`}
  >
    <span
      className={`w-1.5 h-1.5 rounded-full ${available ? "bg-green-600" : "bg-red-600"}`}
    ></span>
    {t(available ? "common.available" : "common.unavailable")}
  </button>
));

export default StatusBadge;
