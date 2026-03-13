import { useState } from "react";
import RoomsCardsGrid from "../components/main/rooms/RoomsCardsGrid";
import RoomsHeader from "../components/main/rooms/RoomsHeader";
import RoomsSearch from "../components/main/rooms/RoomsSearch";
import RoomsTable from "../components/main/rooms/RoomsTable";
import { ROOMS, type Room } from "../constants/rooms";

const Rooms = () => {
  const [initialRooms, setInitialRooms] = useState<Room[]>(ROOMS);
  const [searchValue, setSearchValue] = useState("");

  // ოთახების განახლების ლოგიკა
  const updateRoom = (roomNumber: number, updatedRoom: Partial<Room>) => {
    setInitialRooms((prev) =>
      prev.map((room) =>
        room.roomNumber === roomNumber ? { ...room, ...updatedRoom } : room,
      ),
    );
  };

  const filteredRooms = initialRooms.filter((room) => {
    const query = searchValue.toLowerCase();

    return (
      room.roomNumber.toString().includes(query) ||
      room.roomType.toLowerCase().includes(query)
    );
  });

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-6">
      <RoomsHeader />
      <RoomsCardsGrid />
      <RoomsSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <RoomsTable initialRooms={filteredRooms} updateRoom={updateRoom} />
    </div>
  );
};

export default Rooms;
