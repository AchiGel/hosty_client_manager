const SingleDepartmentItemCard = () => {
  return (
    <div className="flex items-center justify-between bg-white rounded-xl border border-gray-200 p-4 group hover:shadow-sm transition-shadow">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 text-sm font-semibold">
          1
        </div>
        <div>
          <p className="font-medium text-sm text-gray-900">Bath Towel</p>
          <p className="text-xs text-gray-400">Large size towels</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-400 mr-2">Default Qty: 2</span>
        <button
          type="button"
          role="switch"
          aria-checked="true"
          data-state="checked"
          value="on"
          className="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 scale-75"
        >
          <span
            data-state="checked"
            className="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
          ></span>
        </button>
        <button className="text-gray-400 hover:text-[#c5a667] p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-pen h-3.5 w-3.5"
          >
            <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
          </svg>
        </button>
        <button className="text-gray-400 hover:text-red-500 p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-trash2 h-3.5 w-3.5"
          >
            <path d="M3 6h18"></path>
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            <line x1="10" x2="10" y1="11" y2="17"></line>
            <line x1="14" x2="14" y1="11" y2="17"></line>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SingleDepartmentItemCard;
