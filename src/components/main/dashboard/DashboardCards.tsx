import { useTranslation } from "react-i18next";
import { DASHBOARD_CARDS } from "../../../constants/dashboardCards";
import DashboardCard from "./DashboardCard";

const DashboardCards = () => {
  const { t } = useTranslation();
  const titleTranslationKeys: Record<string, string> = {
    TotalRequests: "dashboard.totalRequests",
    OpenRequests: "dashboard.openRequests",
    InProgress: "dashboard.inProgress",
    Satisfaction: "dashboard.satisfaction",
  };

  const labelTranslationKeys: Record<string, string> = {
    ActionNeeded: "dashboard.actionNeeded",
    Stable: "dashboard.stable",
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {DASHBOARD_CARDS.map((dc) => (
        <DashboardCard
          key={dc.id}
          id={dc.id}
          icon={dc.icon}
          cardLabel={t(labelTranslationKeys[dc.cardLabel] || dc.cardLabel)}
          cardStats={dc.cardStats}
          cardTitle={t(titleTranslationKeys[dc.cardTitle] || dc.cardTitle)}
        />
      ))}
    </div>
  );
};

export default DashboardCards;
