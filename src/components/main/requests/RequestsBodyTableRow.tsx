import RequestMenuPop from "./RequestMenuPop";

type RequestsTableRowType = {
  room: number;
  roomType: string;
  category: string;
  request: {
    requestedItem: string;
    requestDetails: string;
  };
  time: string;
  status: string;
  assignedTo: string;
};

const RequestsBodyTableRow = ({
  room,
  roomType,
  category,
  request,
  time,
  status,
  assignedTo,
}: RequestsTableRowType) => {
  return (
    <tr className="group hover:bg-gray-50 transition-colors">
      <td className="py-4 px-6">
        <div className="font-medium text-gray-900">{room}</div>
        <div className="text-xs text-gray-500">{roomType}</div>
      </td>
      <td className="py-4 px-6">
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
          {category}
        </span>
      </td>
      <td className="py-4 px-6">
        <div className="text-sm text-gray-900 font-medium">
          {request.requestedItem}
        </div>
        <div className="text-xs text-gray-500 mt-0.5">
          {request.requestDetails}
        </div>
      </td>
      <td className="py-4 px-6">
        <span className="text-sm font-medium text-orange-600">
          {time + " Ago"}
        </span>
      </td>
      <td className="py-4 px-6">
        <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold bg-[#c5a667]/20 text-[#c5a667] border border-[#c5a667]/20">
          {status}
        </span>
      </td>
      <td className="py-4 px-6">
        <div className="flex items-center gap-2 text-gray-500 italic text-sm">
          <div className="h-6 w-6 rounded-full border border-dashed border-gray-300 flex items-center justify-center">
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
              className="lucide lucide-plus h-3.5 w-3.5"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            {assignedTo}
          </div>
        </div>
      </td>
      <td className="py-4 px-6 text-right relative">
        <RequestMenuPop />
      </td>
    </tr>
  );
};

export default RequestsBodyTableRow;
