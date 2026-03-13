import { useTranslation } from "react-i18next";
import RoomsTableRow from "./RoomsTableRow";
import { ROOMS, type Room } from "../../../constants/rooms";
import { useState } from "react";

const RoomsTable = () => {
  const { t } = useTranslation();
  const [initialRooms, setInitialRooms] = useState<Room[]>(ROOMS);

  // ოთახების განახლების ლოგიკა
  const updateRoom = (roomNumber: number, updatedRoom: Partial<Room>) => {
    setInitialRooms((prev) =>
      prev.map((room) =>
        room.roomNumber === roomNumber ? { ...room, ...updatedRoom } : room,
      ),
    );
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-150">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/50">
              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                {t("rooms.roomNumber")}
              </th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                {t("rooms.roomType")}
              </th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                {t("rooms.qrStatus")}
              </th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                {t("rooms.actions")}
              </th>
            </tr>
          </thead>
          <tbody>
            {initialRooms.map((room) => (
              <RoomsTableRow
                key={room.roomNumber}
                roomNumber={room.roomNumber}
                roomType={room.roomType}
                qrStatus={room.qrStatus}
                onUpdate={updateRoom}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RoomsTable;
