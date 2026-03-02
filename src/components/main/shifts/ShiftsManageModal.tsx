import { STAFF_DATA } from "../../../constants/staffData";

const ShiftsManageModal = () => {
  return (
    <div className="py-4 space-y-2 max-h-100 overflow-y-auto">
      {STAFF_DATA.map((sd) => (
        <button
          className="w-full flex items-center justify-between p-3 rounded-lg transition-colors bg-[#c5a667]/10 border border-[#c5a667]/20"
          key={sd.id}
        >
          {sd.fullName}
        </button>
      ))}
    </div>
  );
};

export default ShiftsManageModal;
