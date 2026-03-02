import AnalyticsCards from "../components/main/analytics/AnalyticsCards";
import AnalyticsDepartmentsPerformance from "../components/main/analytics/AnalyticsDepartmentsPerformance";
import AnalyticsHeader from "../components/main/analytics/AnalyticsHeader";
import AnalyticsRequestsOverTime from "../components/main/analytics/AnalyticsRequestsOverTime";
import AnalyticsShiftLoadAnalysis from "../components/main/analytics/AnalyticsShiftLoadAnalysis";
import AnalyticsStaffPerformance from "../components/main/analytics/AnalyticsStaffPerformance";

const Analytics = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8">
      <AnalyticsHeader />
      <AnalyticsCards />
      <AnalyticsRequestsOverTime />
      <AnalyticsDepartmentsPerformance />
      <AnalyticsStaffPerformance />
      <AnalyticsShiftLoadAnalysis />
    </div>
  );
};

export default Analytics;
