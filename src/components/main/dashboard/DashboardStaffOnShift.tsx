import { Link } from "react-router-dom";

const DashboardStaffOnShift = () => {
  const STAFF_ON_SHIFT = [
    {
      id: 1,
      staffInitials: "GW",
      staffName: "George",
      staffLastName: "Williams",
      position: "Concierge",
    },
    {
      id: 2,
      staffInitials: "MJ",
      staffName: "Mary",
      staffLastName: "Johnson",
      position: "Housekeeping Lead",
    },
    {
      id: 3,
      staffInitials: "AT",
      staffName: "Alex",
      staffLastName: "Thompson",
      position: "Front Desk",
    },
  ];
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-gray-900">Staff On Shift</h3>
        <Link
          to={"/team"}
          className="text-sm font-medium text-[#c5a667] hover:text-[#b09358] flex items-center gap-1"
        >
          All{" "}
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
            className="lucide lucide-arrow-right w-4 h-4"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </Link>
      </div>
      <div className="space-y-3">
        {STAFF_ON_SHIFT.map((sos) => (
          <div className="flex items-center gap-3" key={sos.id}>
            <div className="relative">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-9 h-9 border border-gray-200">
                <span className="flex h-full w-full items-center justify-center rounded-full bg-gray-100 text-gray-500 text-xs">
                  {sos.staffInitials}
                </span>
              </span>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">
                {sos.staffName + " " + sos.staffLastName}
              </p>
              <p className="text-xs text-gray-500">{sos.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardStaffOnShift;
