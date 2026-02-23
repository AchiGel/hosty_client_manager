import { DEPARTMENTS_CARDS_DATA } from "../../../constants/departmentsCardsData";
import DepartmentsCard from "./DepartmentsCard";

const DepartmentsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {DEPARTMENTS_CARDS_DATA.map((dcd) => (
        <DepartmentsCard
          key={dcd.id}
          department={dcd.department}
          status={dcd.status}
          staffNumber={dcd.staffNumber}
          activeRequests={dcd.activeRequests}
        />
      ))}
    </div>
  );
};

export default DepartmentsGrid;
