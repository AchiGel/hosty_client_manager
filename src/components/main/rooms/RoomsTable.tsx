import { useTranslation } from "react-i18next";
import RoomsTableRow from "./RoomsTableRow";
import { type Room } from "../../../constants/rooms";

const RoomsTable = ({
  initialRooms,
  updateRoom,
}: {
  initialRooms: Room[];
  updateRoom: (roomNumber: number, updatedRoom: Partial<Room>) => void;
}) => {
  const { t } = useTranslation();

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
            {initialRooms.length < 1 ? (
              <tr>
                <td
                  colSpan={4}
                  className="px-6 py-12 text-center text-gray-400"
                >
                  {t("rooms.noResult")}
                </td>
              </tr>
            ) : (
              initialRooms.map((room) => (
                <RoomsTableRow
                  key={room.roomNumber}
                  roomNumber={room.roomNumber}
                  roomType={room.roomType}
                  qrStatus={room.qrStatus}
                  onUpdate={updateRoom}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RoomsTable;
