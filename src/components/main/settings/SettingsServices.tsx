import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { SERVICES_DATA } from "../../../constants/settingsServices";
import { ICONS } from "./serviceIconsMap";
import ServiceItem from "./ServiceItem";

const SettingsServices = () => {
  const { t } = useTranslation();
  const [activeServices, setActiveServices] = useState<Set<string>>(
    new Set(SERVICES_DATA.map((s) => s.id))
  );

  const handleToggle = (id: string) => {
    setActiveServices((prev) => {
      const updated = new Set(prev);
      if (updated.has(id)) {
        updated.delete(id);
      } else {
        updated.add(id);
      }
      return updated;
    });
  };

  const serviceItems = useMemo(
    () =>
      SERVICES_DATA.map((service) => {
        const IconComponent = ICONS[service.icon];
        return (
          <ServiceItem
            key={service.id}
            id={service.id}
            name={service.name}
            description={service.description}
            isActive={activeServices.has(service.id)}
            onToggle={handleToggle}
          >
            <IconComponent />
          </ServiceItem>
        );
      }),
    [activeServices]
  );

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-bold text-gray-900">
          {t("settings.services")}
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          {t("settings.servicesSub")}
        </p>
      </div>
      <div className="divide-y divide-gray-100">{serviceItems}</div>
    </div>
  );
};

export default SettingsServices;
