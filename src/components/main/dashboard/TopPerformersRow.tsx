const TopPerformersRow = ({
  id,
  staffInitials,
  staffName,
  staffLastname,
  department,
  avTime,
  ranking,
}: {
  id: number;
  staffInitials: string;
  staffName: string;
  staffLastname: string;
  department: string;
  avTime: string;
  ranking: string;
}) => {
  return (
    <div className="p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors">
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#c5a667]/10 text-[#c5a667] font-bold text-sm">
        {"#" + id}
      </div>
      <span className="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10 border border-gray-200">
        <span className="flex h-full w-full items-center justify-center rounded-full bg-gray-100 text-gray-500 text-sm">
          {staffInitials}
        </span>
      </span>
      <div className="flex-1 min-w-0">
        <p className="font-medium text-gray-900 truncate">
          {staffName + " " + staffLastname}
        </p>
        <p className="text-xs text-gray-500">{department}</p>
      </div>
      <div className="text-right">
        <div className="flex items-center gap-1 text-sm font-medium text-gray-900">
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
            className="lucide lucide-timer w-4 h-4 text-gray-400"
          >
            <line x1="10" x2="14" y1="2" y2="2"></line>
            <line x1="12" x2="15" y1="14" y2="11"></line>
            <circle cx="12" cy="14" r="8"></circle>
          </svg>
          <span>{avTime}</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
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
            className="lucide lucide-star w-3 h-3 text-[#c5a667]"
          >
            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
          </svg>
          <span>{ranking}</span>
        </div>
      </div>
    </div>
  );
};

export default TopPerformersRow;
