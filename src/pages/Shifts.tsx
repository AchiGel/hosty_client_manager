import ShiftsGrid from "../components/main/shifts/ShiftsGrid";
import ShiftsHeader from "../components/main/shifts/ShiftsHeader";

const Shifts = () => {
  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-8">
      <ShiftsHeader />
      <ShiftsGrid />
    </div>
  );
};

export default Shifts;
