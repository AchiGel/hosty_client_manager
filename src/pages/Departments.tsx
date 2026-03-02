import DepartmentsArchived from "../components/main/departments/DepartmentsArchived";
import DepartmentsGrid from "../components/main/departments/DepartmentsGrid";
import DepartmentsHeader from "../components/main/departments/DepartmentsHeader";

const Departments = () => {
  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-8">
      <DepartmentsHeader />
      <DepartmentsGrid />
      <DepartmentsArchived />
    </div>
  );
};

export default Departments;
