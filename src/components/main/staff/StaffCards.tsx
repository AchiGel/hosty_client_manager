import { useTranslation } from "react-i18next";
import { STAFF_CARDS_DATA } from "../../../constants/staffCardsData";
import StaffCard from "./StaffCard";

const StaffCards = () => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {STAFF_CARDS_DATA.map((sc) => (
        <StaffCard
          key={sc.id}
          title={t(sc.title)}
          icon={sc.icon}
          count={sc.count}
          id={sc.id}
        />
      ))}
    </div>
  );
};

export default StaffCards;
