import type { JSX } from "react";

const StaffCard = ({
  title,
  count,
  icon,
  id,
}: {
  title: string;
  count: number;
  icon: JSX.Element;
  id: number;
}) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
      <div
        className={`size-12 rounded-lg flex items-center justify-center ${id === 11 ? "bg-blue-50 text-blue-600" : id === 22 ? "bg-green-50 text-green-600" : "bg-yellow-50 text-yellow-600"} `}
      >
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-bold text-gray-900">{count}</p>
      </div>
    </div>
  );
};

export default StaffCard;
