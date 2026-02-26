import { useTranslation } from "react-i18next";

const SettingsHeader = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 font-display">
        {t("settings.title")}
      </h2>
      <p className="text-gray-500 mt-1">{t("settings.subTitle")}</p>
    </div>
  );
};

export default SettingsHeader;
