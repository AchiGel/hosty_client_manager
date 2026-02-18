const DashboardHeader = () => {
  return (
    <div className="flex flex-wrap justify-between items-end gap-4">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 font-display">
          Hello, Sarah
        </h2>
        <p className="text-gray-500 mt-1">
          Here's what's happening at Episode Hotel today.
        </p>
      </div>
      <div className="text-right hidden sm:block">
        <p className="text-lg font-medium text-gray-900">February 18, 2026</p>
        <div className="flex items-center justify-end gap-1 text-sm text-green-600">
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
            className="lucide lucide-trending-up w-4 h-4"
          >
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
            <polyline points="16 7 22 7 22 13"></polyline>
          </svg>
          <span>High occupancy</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
