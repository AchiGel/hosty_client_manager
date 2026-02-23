import ShiftsGridCard from "./ShiftsGridCard";

const ShiftsGrid = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <ShiftsGridCard />
    </div>
  );
};

export default ShiftsGrid;
