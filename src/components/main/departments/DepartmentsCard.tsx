import { useTranslation } from "react-i18next";
import { Building2Icon, UsersIcon } from "../../assets";
import DepartmentsMenuPop from "./DepartmentsMenuPop";
import DepartmentsArchivedPop from "./DepartmentsArchivedPop";

const DepartmentsCard = ({
  department,
  status,
  staffNumber,
  activeRequests,
}: {
  department: string;
  status: string;
  staffNumber: number;
  activeRequests: number;
}) => {
  const { t } = useTranslation();
  return (
    <>
      {status && (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div className="size-10 rounded-lg bg-[#c5a667]/10 flex items-center justify-center text-[#c5a667]">
              <Building2Icon />
            </div>
            {status == "archived" ? (
              <DepartmentsArchivedPop />
            ) : (
              <DepartmentsMenuPop />
            )}
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            {department}
          </h3>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-1.5">
              <UsersIcon className="h-4 w-4 text-gray-500" />
              <span>
                {staffNumber} {t("departments.staff")}
              </span>
            </div>
            {activeRequests > 0 && (
              <div className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-[#c5a667]"></span>
                <span>
                  {activeRequests} {t("departments.active")}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default DepartmentsCard;
