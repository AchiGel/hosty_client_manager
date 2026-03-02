import { useTranslation } from "react-i18next";
import { ANALYTICS_CARDS_DATA } from "../../../constants/analyticsData";
import AnalyticsCard from "./AnalyticsCard";

const AnalyticsCards = () => {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      {ANALYTICS_CARDS_DATA.map((acd) => (
        <AnalyticsCard
          key={acd.id}
          id={acd.id}
          title={t(`analytics.${acd.title}`)}
          analyticsResult={acd.analyticsResult}
          icon={acd.icon}
        />
      ))}
    </div>
  );
};

export default AnalyticsCards;
