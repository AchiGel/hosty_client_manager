import { REQUESTS_DATA } from "../../../constants/requestsData";
import RequestsBodyTableRow from "./RequestsBodyTableRow";

const RequestsBodyTable = () => {
  const REQUESTS_BODY_TABLE_HEADER = [
    { label: "room" },
    { label: "category" },
    { label: "request details" },
    { label: "time" },
    { label: "status" },
    { label: "assigned to" },
    { label: "action" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden flex flex-col">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-200">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/50">
              {REQUESTS_BODY_TABLE_HEADER.map((rbth) => (
                <th
                  key={rbth.label}
                  className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-500 w-24"
                >
                  {rbth.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {REQUESTS_DATA.map((rd) => (
              <RequestsBodyTableRow
                key={rd.id}
                room={rd.room}
                roomType={rd.roomType}
                category={rd.category}
                request={{
                  requestedItem: rd.request.requestedItem,
                  requestDetails: rd.request.requestDetails,
                }}
                time={rd.time}
                status={rd.status}
                assignedTo={rd.assignedTo}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="border-t border-gray-200 px-6 py-4 flex items-center justify-between">
        <span className="text-xs text-gray-500">Showing 1-6 of 6</span>
        <div className="flex gap-2">
          <button className="cursor-pointer size-8 rounded flex items-center justify-center border border-gray-200 text-gray-400 hover:bg-gray-50 transition-colors disabled:opacity-50">
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
              className="lucide lucide-chevron-left h-4 w-4"
            >
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </button>
          <button className="cursor-pointer size-8 rounded flex items-center justify-center border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">
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
              className="lucide lucide-chevron-right h-4 w-4"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestsBodyTable;
