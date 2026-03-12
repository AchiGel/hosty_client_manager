import { useTranslation } from "react-i18next";
import { Building2Icon, UsersIcon } from "../../assets";
import DepartmentsMenuPop from "./DepartmentsMenuPop";
import DepartmentsArchivedPop from "./DepartmentsArchivedPop";
import { Link } from "react-router-dom";
import BoxIcon from "../../assets/BoxIcon";

const DepartmentsCard = ({
  department,
  status,
  staffNumber,
  products,
}: {
  department: string;
  status: string;
  staffNumber: number;
  products: number;
}) => {
  const { t } = useTranslation();
  return (
    <>
      {status && (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
          <div className="p-6">
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
            <p className="text-xs text-gray-400 mb-3">Housekeeping</p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-1.5">
                <UsersIcon className="h-4 w-4 text-gray-500" />
                <span>
                  {staffNumber} {t("departments.staff")}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-package h-4 w-4"
                >
                  <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                  <path d="M12 22V12"></path>
                  <path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"></path>
                  <path d="m7.5 4.27 9 5.15"></path>
                </svg>
                <span>
                  {products} {t("departments.products")}
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 p-3">
            <Link
              to={`${department.replace(" ", "-").toLowerCase()}`}
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-[#f6f7f9] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a65e] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-9 rounded-md px-3 w-full text-[#c5a667] hover:text-[#b09358] hover:bg-[#c5a667]/5 gap-1.5"
            >
              <BoxIcon />
              {t("departments.manageProducts")}
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default DepartmentsCard;
