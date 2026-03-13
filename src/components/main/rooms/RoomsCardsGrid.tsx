import { useTranslation } from "react-i18next";

const RoomsCardsGrid = () => {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <p className="text-sm text-gray-500">{t("rooms.totalRooms")}</p>
        <p className="text-2xl font-bold text-gray-900 mt-1">8</p>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <p className="text-sm text-gray-500">{t("rooms.withQRCode")}</p>
        <p className="text-2xl font-bold text-green-600 mt-1">5</p>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <p className="text-sm text-gray-500">{t("rooms.withoutQRCode")}</p>
        <p className="text-2xl font-bold text-orange-500 mt-1">3</p>
      </div>
    </div>
  );
};

export default RoomsCardsGrid;
