import { ROOM_CATEGORIES } from "../../../constants/roomCategories";
import { PlusIcon } from "../../assets";
import TrashIcon from "../../assets/TrashIcon";

const RoomsManageCategoriesModal = () => {
  return (
    <div className="space-y-4 py-4">
      <div className="flex gap-2">
        <input
          className="flex h-10 w-full rounded-md border border-[#dcdfe5] bg-[#f6f7f9] px-3 py-2 text-base ring-[#f6f7f9] file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a65e] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
          type="text"
        />
        <button className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-[#f6f7f9] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a65e] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 shadow-sm hover:shadow-md h-10 px-4 py-2 bg-[#c5a667] hover:bg-[#b09358] text-white shrink-0">
          <PlusIcon />
        </button>
      </div>
      <div className="space-y-2 max-h-75 overflow-y-auto">
        {ROOM_CATEGORIES.map((rc) => (
          <div
            key={rc.roomType}
            className="flex items-center justify-between px-3 py-2.5 bg-gray-50 rounded-lg group"
          >
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-900">
                {rc.roomType}
              </span>
              <span className="text-xs text-gray-400">
                {rc.roomQuantity} room
              </span>
            </div>
            <button className="cursor-pointer text-gray-300 hover:text-red-500 p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              <TrashIcon />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomsManageCategoriesModal;
