const ShiftsCreateModal = () => {
  return (
    <>
      <div className="space-y-4 py-4">
        <div className="space-y-2">
          <label
            htmlFor="shiftName"
            className="text-sm font-medium leading-none"
          >
            Shift Name
          </label>
          <input
            type="text"
            id="shiftName"
            placeholder="e.g. Morning"
            className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c5a667] focus:border-[#c5a667]"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label
              htmlFor="startTime"
              className="text-sm font-medium leading-none"
            >
              Start Time
            </label>
            <input
              type="time"
              id="startTime"
              className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[#c5a667] focus:border-[#c5a667]"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="endTime"
              className="text-sm font-medium leading-none"
            >
              End Time
            </label>
            <input
              type="time"
              id="endTime"
              className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[#c5a667] focus:border-[#c5a667]"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium leading-none">
            Active Days
          </label>
          <div className="grid grid-cols-4 gap-2">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <label
                key={day}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[#c5a667] bg-[#c5a667]/5 cursor-pointer transition-colors hover:bg-[#c5a667]/10"
              >
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded-sm border border-[#c5a667] text-[#c5a667] focus:ring-2 focus:ring-[#c5a667]"
                />
                <span className="text-sm font-medium text-gray-700">{day}</span>
              </label>
            ))}
          </div>
          <p className="text-xs text-gray-400">
            At least one day must be selected.
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
        <button className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-[#f6f7f9] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a65e] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-[#f6f7f9] bg-[#f6f7f9] hover:bg-[#c9a65e] hover:text-[#0f1729] h-10 px-4 py-2">
          Cancel
        </button>
        <button className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-[#f6f7f9] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a65e] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 shadow-sm hover:shadow-md h-10 px-4 py-2 bg-[#c5a667] hover:bg-[#b09358] text-white">
          Create
        </button>
      </div>
    </>
  );
};

export default ShiftsCreateModal;
