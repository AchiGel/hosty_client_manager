import { useTranslation } from "react-i18next";
import PanIcon from "../../assets/PanIcon";
import QrIcon from "../../assets/QrIcon";
import TrashIcon from "../../assets/TrashIcon";
import AppModal from "../../ui/AppModal";
import RoomsQrModal from "./RoomsQrModal";
import { useState } from "react";

const RoomsTableRow = () => {
  const [openQrModal, setOpenQrModal] = useState(false);
  const { t } = useTranslation();
  return (
    <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
      <td className="px-6 py-4">
        <span className="font-semibold text-gray-900">101</span>
      </td>
      <td className="px-6 py-4">
        <span className="text-sm text-gray-600 bg-gray-100 px-2.5 py-1 rounded-md">
          SOLO
        </span>
      </td>
      <td className="px-6 py-4">
        <span className="inline-flex items-center gap-1.5 text-sm text-green-700 bg-green-50 px-2.5 py-1 rounded-md">
          <QrIcon />
          {t("rooms.generated")}
        </span>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setOpenQrModal(true)}
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-[#f6f7f9] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a65e] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-[#dcdfe5] bg-[#f6f7f9] hover:bg-[#c9a65e] hover:text-[#0f1729] h-9 rounded-md px-3 gap-1 cursor-pointer"
          >
            <QrIcon />
            {t("rooms.viewQR")}
          </button>
          <AppModal
            open={openQrModal}
            onOpenChange={setOpenQrModal}
            title={`QR ${t("common.code")} — ${t("common.room")} 101`}
          >
            <RoomsQrModal />
          </AppModal>
          <button className="cursor-pointer text-gray-400 hover:text-gray-900 p-1.5 rounded hover:bg-gray-100">
            <PanIcon />
          </button>
          <button className="cursor-pointer text-gray-400 hover:text-red-600 p-1.5 rounded hover:bg-red-50">
            <TrashIcon />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default RoomsTableRow;
