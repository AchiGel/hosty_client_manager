import { useTranslation } from "react-i18next";
import QrIcon from "../../assets/QrIcon";

const RoomsTableQrStatus = ({
  qrStatus,
}: {
  qrStatus: "generated" | "notGenerated";
}) => {
  const { t } = useTranslation();
  return (
    <>
      {qrStatus === "generated" ? (
        <span className="inline-flex items-center gap-1.5 text-sm text-green-700 bg-green-50 px-2.5 py-1 rounded-md">
          <QrIcon />
          {t("rooms.generated")}
        </span>
      ) : (
        <span className="inline-flex items-center gap-1.5 text-sm text-orange-600 bg-orange-50 px-2.5 py-1 rounded-md">
          {t("rooms.notGenerated")}
        </span>
      )}
    </>
  );
};

export default RoomsTableQrStatus;
