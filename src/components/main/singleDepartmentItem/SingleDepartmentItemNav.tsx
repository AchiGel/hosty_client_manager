import { useNavigate } from "react-router-dom";
import { PlusIcon } from "../../assets";
import BackIcon from "../../assets/BackIcon";
import { useState } from "react";
import AppModal from "../../ui/AppModal";
import SingleDepartmentItemModal from "./SingleDepartmentItemModal";

const SingleDepartmentItemNav = () => {
  const navigate = useNavigate();
  const [openItemAdd, setOpenItemAdd] = useState(false);
  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="size-9 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
        >
          <BackIcon />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Towels</h1>
          <p className="text-gray-500 text-sm">
            Manage item variants visible to guests
          </p>
        </div>
      </div>
      <button
        onClick={() => setOpenItemAdd(true)}
        className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 shadow-sm hover:shadow-md h-10 px-4 py-2 bg-[#c5a667] hover:bg-[#b09358] text-white gap-2"
      >
        <PlusIcon className="w-4 h-4" />
        Add Item
      </button>
      <AppModal
        title="Add Item"
        open={openItemAdd}
        onOpenChange={setOpenItemAdd}
      >
        <SingleDepartmentItemModal />
      </AppModal>
    </div>
  );
};

export default SingleDepartmentItemNav;
