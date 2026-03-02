import type { JSX } from "react";

const DashboardCard = ({
  icon,
  cardLabel,
  cardStats,
  cardTitle,
  id,
}: {
  icon: JSX.Element;
  cardLabel: string;
  cardStats: string;
  cardTitle: string;
  id: number;
}) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div
          className={`p-2 rounded-lg ${id === 1 ? "bg-blue-50  text-blue-600" : id === 2 ? "bg-[#c5a667]/10 text-[#c5a667]" : id === 3 ? "bg-orange-50 text-orange-600" : "bg-purple-50 text-purple-600"} `}
        >
          {icon}
        </div>
        <span
          className={`flex items-center text-xs font-medium px-2 py-1 rounded-full ${id === 1 ? "text-green-600 bg-green-50" : id === 2 ? "text-[#c5a667] bg-[#c5a667]/10" : id === 3 ? "text-gray-500 bg-gray-100" : "text-green-600 bg-green-50"}  `}
        >
          {cardLabel}
        </span>
      </div>
      <p className="text-sm font-medium text-gray-500">{cardTitle}</p>
      <p
        className={`text-3xl font-bold ${id === 2 ? "text-[#c5a667]" : "text-gray-900"}  mt-1`}
      >
        {cardStats}
      </p>
    </div>
  );
};

export default DashboardCard;
