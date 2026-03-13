import type { SetStateAction } from "react";

type RoomsTableNumberRowProps = {
  isEditing: boolean;
  editedRoomNumber: number;
  setEditedRoomNumber: (value: SetStateAction<number>) => void;
  roomNumber: number;
};

const RoomsTableNumberRow = ({
  isEditing,
  editedRoomNumber,
  setEditedRoomNumber,
  roomNumber,
}: RoomsTableNumberRowProps) => {
  return (
    <>
      {isEditing ? (
        <input
          value={editedRoomNumber}
          type="number"
          min={0}
          max={999}
          onChange={(e) => {
            if (Number(e.target.value) > 999) return;
            setEditedRoomNumber(Number(e.target.value));
          }}
          className="flex rounded-md border border-[#dcdfe5] bg-[#f6f7f9] px-3 py-2 ring-[#f6f7f9] file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a65e] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-8 w-24 text-sm"
        />
      ) : (
        <span className="font-semibold text-gray-900">{roomNumber}</span>
      )}
    </>
  );
};

export default RoomsTableNumberRow;
