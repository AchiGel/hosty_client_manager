import DashboardQuickActions from "./DashboardQuickActions";
import DashboardRecentRequest from "./DashboardRecentRequest";
import DashboardStaffOnShift from "./DashboardStaffOnShift";
import DashboardTopPerformers from "./DashboardTopPerformers";

const DashboardMain = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 flex flex-col gap-6">
        <DashboardRecentRequest />
        <DashboardTopPerformers />
      </div>
      <div className="flex flex-col gap-6">
        <DashboardQuickActions />
        <DashboardStaffOnShift />
      </div>
    </div>
  );
};

export default DashboardMain;
