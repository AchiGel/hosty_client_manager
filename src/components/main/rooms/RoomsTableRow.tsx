import { useState } from "react";
import type { Room } from "../../../constants/rooms";
import RoomsTableNumberRow from "./RoomsTableNumberRow";
import RoomsTableTypeRow from "./RoomsTableTypeRow";
import RoomsTableQrStatus from "./RoomsTableQrStatus";
import RoomsTableEditingRow from "./RoomsTableEditingRow";

type RoomsTableRowProps = {
  roomNumber: number;
  roomType: string;
  qrStatus: "generated" | "notGenerated";
  onUpdate: (roomNumber: number, updatedRoom: Partial<Room>) => void;
};

const RoomsTableRow = ({
  roomNumber,
  roomType,
  qrStatus,
  onUpdate,
}: RoomsTableRowProps) => {
  const [openQrModal, setOpenQrModal] = useState(false);

  // ოთახების ცვლილების სთეითები
  const [isEditing, setIsEditing] = useState(false);
  const [editedRoomNumber, setEditedRoomNumber] = useState(roomNumber);
  const [editedRoomType, setEditedRoomType] = useState(roomType);

  const handleSave = () => {
    onUpdate(roomNumber, {
      roomNumber: editedRoomNumber,
      roomType: editedRoomType,
    });

    setIsEditing(false);
  };
  return (
    <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
      <td className="px-6 py-4">
        <RoomsTableNumberRow
          isEditing={isEditing}
          editedRoomNumber={editedRoomNumber}
          setEditedRoomNumber={setEditedRoomNumber}
          roomNumber={roomNumber}
        />
      </td>
      <td className="px-6 py-4">
        <RoomsTableTypeRow
          isEditing={isEditing}
          editedRoomType={editedRoomType}
          setEditedRoomType={setEditedRoomType}
          roomType={roomType}
        />
      </td>
      <td className="px-6 py-4">
        <RoomsTableQrStatus qrStatus={qrStatus} />
      </td>
      <td className="px-6 py-4">
        <RoomsTableEditingRow
          isEditing={isEditing}
          handleSave={handleSave}
          qrStatus={qrStatus}
          setIsEditing={setIsEditing}
          setOpenQrModal={setOpenQrModal}
          openQrModal={openQrModal}
        />
      </td>
    </tr>
  );
};

export default RoomsTableRow;
