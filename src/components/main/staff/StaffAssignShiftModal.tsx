const StaffAssignShiftModal = () => {
  return (
    <>
      <div className="space-y-4 py-4">
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-sm font-medium text-gray-900">Sarah Jenkins</p>
          <p className="text-xs text-gray-500">Front Desk</p>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Shift
          </label>
          <button
            type="button"
            role="combobox"
            aria-controls="radix-:r6o:"
            aria-expanded="false"
            aria-autocomplete="none"
            dir="ltr"
            data-state="closed"
            data-placeholder=""
            className="flex h-10 w-full items-center justify-between rounded-md border border-[#dcdfe5] bg-[#f6f7f9] px-3 py-2 text-sm ring-[#f6f7f9] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#c9a65e] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1"
          >
            <span>Select shift</span>
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
              className="lucide lucide-chevron-down h-4 w-4 opacity-50"
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </button>
        </div>
        <p className="text-xs text-gray-400">
          Staff will only receive requests during assigned shift hours.
        </p>
      </div>
      <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-[#f6f7f9] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a65e] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-[#dcdfe5] bg-[#f6f7f9] hover:bg-[#c9a65e] hover:text-[#0f1729] h-10 px-4 py-2">
          Cancel
        </button>
        <button
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-[#f6f7f9] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a65e] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 shadow-sm hover:shadow-md h-10 px-4 py-2 bg-[#c5a667] hover:bg-[#b09358] text-white"
          disabled
        >
          Assign
        </button>
      </div>
    </>
  );
};

export default StaffAssignShiftModal;
