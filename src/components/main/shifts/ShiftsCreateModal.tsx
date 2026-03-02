const ShiftsCreateModal = () => {
  return (
    <>
      <div className="space-y-4 py-4">
  {/* Shift Name */}
  <div className="space-y-2">
    <label htmlFor="shiftName" className="text-sm font-medium leading-none">
      Shift Name
    </label>
    <input
      type="text"
      id="shiftName"
      placeholder="e.g. Morning"
      className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c5a667] focus:border-[#c5a667]"
    />
  </div>

  {/* Start & End Time */}
  <div className="grid grid-cols-2 gap-4">
    <div className="space-y-2">
      <label htmlFor="startTime" className="text-sm font-medium leading-none">
        Start Time
      </label>
      <input
        type="time"
        id="startTime"
        className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[#c5a667] focus:border-[#c5a667]"
      />
    </div>
    <div className="space-y-2">
      <label htmlFor="endTime" className="text-sm font-medium leading-none">
        End Time
      </label>
      <input
        type="time"
        id="endTime"
        className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[#c5a667] focus:border-[#c5a667]"
      />
    </div>
  </div>

  {/* Active Days */}
  <div className="space-y-2">
    <label className="text-sm font-medium leading-none">Active Days</label>
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
    <p className="text-xs text-gray-400">At least one day must be selected.</p>
  </div>
</div>
    </>
  );
};

export default ShiftsCreateModal;
