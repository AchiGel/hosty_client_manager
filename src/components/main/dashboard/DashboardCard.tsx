import type { JSX } from "react";

const DashboardCard = ({
  icon,
  cardLabel,
  cardStats,
  cardTitle,
}: {
  icon: JSX.Element;
  cardLabel: string;
  cardStats: string;
  cardTitle: string;
}) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-blue-50 rounded-lg text-blue-600">{icon}</div>
        <span className="flex items-center text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
          {cardLabel}
        </span>
      </div>
      <p className="text-sm font-medium text-gray-500">{cardTitle}</p>
      <p className="text-3xl font-bold text-gray-900 mt-1">{cardStats}</p>
    </div>
  );
};

export default DashboardCard;
