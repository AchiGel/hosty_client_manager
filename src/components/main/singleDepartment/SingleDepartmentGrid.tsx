import SingleDepartmentCard from "./SingleDepartmentCard";

const SingleDepartmentGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <SingleDepartmentCard />
    </div>
  );
};

export default SingleDepartmentGrid;
