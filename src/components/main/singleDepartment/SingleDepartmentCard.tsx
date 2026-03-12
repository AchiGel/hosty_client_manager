import { Link } from "react-router-dom";
import BoxIcon from "../../assets/BoxIcon";
import ItemsIcon from "../../assets/ItemsIcon";
import SingleDepartmentMenuPop from "./SingleDepartmentMenuPop";

const SingleDepartmentCard = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col ">
      <div className="p-5 flex-1">
        <div className="flex items-start justify-between mb-3">
          <div className="size-9 rounded-lg bg-[#c5a667]/10 flex items-center justify-center text-[#c5a667]">
            <BoxIcon />
          </div>
          <div className="flex items-center gap-1">
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
            <SingleDepartmentMenuPop />
          </div>
        </div>
        <h3 className="text-base font-semibold text-gray-900 mb-1">Towels</h3>
        <p className="text-xs text-gray-400 mb-3">Fresh linens</p>
        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <ItemsIcon />
          <span>3 items</span>
        </div>
      </div>
      <div className="border-t border-gray-100 p-3">
        <Link
          to={`${"towels"}`}
          className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-9 rounded-md px-3 w-full text-[#c5a667] hover:text-[#b09358] hover:bg-[#c5a667]/5 gap-1.5"
        >
          <ItemsIcon />
          Manage Items
        </Link>
      </div>
    </div>
  );
};

export default SingleDepartmentCard;
