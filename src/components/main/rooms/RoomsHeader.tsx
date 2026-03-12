import { useState } from "react";
import { PlusIcon } from "../../assets";
import TagsIcon from "../../assets/TagsIcon";
import AppModal from "../../ui/AppModal";
import RoomsManageCategoriesModal from "./RoomsManageCategoriesModal";
import RoomsAddRoomModal from "./RoomsAddRoomModal";

const RoomsHeader = () => {
  const [openCategoriesModal, setOpenCategoriesModal] = useState(false);
  const [openAddRoomModal, setOpenAddRoomModal] = useState(false);
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Rooms
        </h1>
        <p className="text-gray-500 mt-1">Manage hotel rooms and QR codes</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
        <button
          onClick={() => setOpenCategoriesModal(true)}
          className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-[#f6f7f9] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a65e] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-[#dcdfe5] bg-[#f6f7f9] hover:bg-[#c9a65e] hover:text-[#0f1729] h-10 px-4 py-2 gap-2"
        >
          <TagsIcon />
          Manage Categories
        </button>
        <AppModal
          title="Manage Room Categories"
          open={openCategoriesModal}
          onOpenChange={setOpenCategoriesModal}
        >
          <RoomsManageCategoriesModal />
        </AppModal>
        <button
          onClick={() => setOpenAddRoomModal(true)}
          className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 shadow-sm hover:shadow-md h-10 px-4 py-2 bg-[#c5a667] hover:bg-[#b09358] text-white gap-2"
        >
          <PlusIcon />
          Add Room
        </button>
        <AppModal
          title="Add Room"
          open={openAddRoomModal}
          onOpenChange={setOpenAddRoomModal}
        >
          <RoomsAddRoomModal />
        </AppModal>
      </div>
    </div>
  );
};

export default RoomsHeader;
