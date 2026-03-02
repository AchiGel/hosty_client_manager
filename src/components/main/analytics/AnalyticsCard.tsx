import type { JSX } from "react";

const AnalyticsCard = ({
  id,
  title,
  analyticsResult,
  icon,
}: {
  id: number;
  title: string;
  analyticsResult: string;
  icon: JSX.Element;
}) => {
  const iconColor =
    id == 1
      ? "bg-blue-50 text-blue-600"
      : id == 2
        ? "bg-green-50 text-green-600"
        : id == 3
          ? "bg-orange-50 text-orange-600"
          : id == 4
            ? "bg-purple-50 text-purple-600"
            : id == 5
              ? "bg-[#c5a667]/10 text-[#c5a667]"
              : "bg-red-50 text-red-600";
  return (
    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className={`p-2 rounded-lg w-fit mb-3 ${iconColor}`}>{icon}</div>
      <p className="text-xs font-medium text-gray-500 truncate">{title}</p>
      <p className="text-xl font-bold text-gray-900 mt-1 truncate">
        {analyticsResult}
      </p>
    </div>
  );
};

export default AnalyticsCard;
