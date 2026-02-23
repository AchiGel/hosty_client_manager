import { useTranslation } from "react-i18next";
import DepartmentsCard from "./DepartmentsCard";

const DepartmentsArchived = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-500 mt-4">
        {t("departments.archived")}
      </h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="opacity-60">
          <DepartmentsCard
            department={"Spa"}
            status={"Archived"}
            staffNumber={3}
            activeRequests={0}
          />
        </div>
      </div>
    </div>
  );
};

export default DepartmentsArchived;
