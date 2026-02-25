import AnalyticsCards from "../components/main/analytics/AnalyticsCards";
import AnalyticsHeader from "../components/main/analytics/AnalyticsHeader";

const Analytics = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8">
      <AnalyticsHeader />
      <AnalyticsCards />
    </div>
  );
};

export default Analytics;
