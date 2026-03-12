import RoomsCardsGrid from "../components/main/rooms/RoomsCardsGrid";
import RoomsHeader from "../components/main/rooms/RoomsHeader";
import RoomsSearch from "../components/main/rooms/RoomsSearch";
import RoomsTable from "../components/main/rooms/RoomsTable";

const Rooms = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-6">
      <RoomsHeader />
      <RoomsCardsGrid />
      <RoomsSearch />
      <RoomsTable />
    </div>
  );
};

export default Rooms;
