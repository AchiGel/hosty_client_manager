import StaffCards from "../components/main/staff/StaffCards";
import StaffHeader from "../components/main/staff/StaffHeader";
import StaffSearchbar from "../components/main/staff/StaffSearchbar";
import StaffTable from "../components/main/staff/StaffTable";

const Staff = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8">
      <StaffHeader />
      <StaffCards />
      <StaffSearchbar />
      <StaffTable />
    </div>
  );
};

export default Staff;
