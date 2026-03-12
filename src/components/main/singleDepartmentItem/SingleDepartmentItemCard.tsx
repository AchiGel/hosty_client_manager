import PanIcon from "../../assets/PanIcon";
import TrashIcon from "../../assets/TrashIcon";

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
          className="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors data-[state=checked]:bg-[#182543] data-[state=unchecked]:bg-[#dcdfe5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 scale-75"
        >
          <span
            data-state="checked"
            className="pointer-events-none block h-5 w-5 rounded-full bg-[#f6f7f9] shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
          ></span>
        </button>
        <button className="cursor-pointer text-gray-400 hover:text-[#c5a667] p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          <PanIcon />
        </button>
        <button className="cursor-pointer text-gray-400 hover:text-red-500 p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          <TrashIcon />
        </button>
      </div>
    </div>
  );
};

export default SingleDepartmentItemCard;
