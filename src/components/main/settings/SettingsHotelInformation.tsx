import { useTranslation } from "react-i18next";

const SettingsHotelInformation = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-bold text-gray-900">
          {t("settings.hotelInformation")}
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          {t("settings.hotelInformationSub")}
        </p>
      </div>
    </div>
  );
};

export default SettingsHotelInformation;
