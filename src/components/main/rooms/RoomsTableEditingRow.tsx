import { useTranslation } from "react-i18next";
import { XCloseIcon } from "../../assets";
import CheckIcon from "../../assets/CheckIcon";
import PanIcon from "../../assets/PanIcon";
import QrIcon from "../../assets/QrIcon";
import TrashIcon from "../../assets/TrashIcon";
import AppModal from "../../ui/AppModal";
import RoomsQrModal from "./RoomsQrModal";
import type { Dispatch, SetStateAction } from "react";

type RoomsTableEditingRowProps = {
  isEditing: boolean;
  handleSave: () => void;
  qrStatus: "generated" | "notGenerated";
  setIsEditing: Dispatch<SetStateAction<boolean>>;
  setOpenQrModal: Dispatch<SetStateAction<boolean>>;
  openQrModal: boolean;
};

const RoomsTableEditingRow = ({
  isEditing,
  handleSave,
  qrStatus,
  setIsEditing,
  setOpenQrModal,
  openQrModal,
}: RoomsTableEditingRowProps) => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center gap-1">
      {isEditing ? (
        <>
          <button
            onClick={handleSave}
            className="cursor-pointer text-green-600 hover:bg-green-50 p-1.5 rounded"
          >
            <CheckIcon />
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="cursor-pointer text-gray-400 hover:text-red-600 p-1.5 rounded hover:bg-red-50"
          >
            <XCloseIcon />
          </button>
        </>
      ) : (
        <>
          {qrStatus === "generated" ? (
            <button
              onClick={() => setOpenQrModal(true)}
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-[#f6f7f9] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a65e] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-[#dcdfe5] bg-[#f6f7f9] hover:bg-[#c9a65e] hover:text-[#0f1729] h-9 rounded-md px-3 gap-1 cursor-pointer"
            >
              <QrIcon />
              {t("rooms.viewQR")}
            </button>
          ) : (
            <button className="text-[#c5a667] inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-[#f6f7f9] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a65e] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-[#dcdfe5] bg-[#f6f7f9] hover:bg-[#c9a65e] hover:text-[#0f1729] h-9 rounded-md px-3 gap-1 cursor-pointer">
              <QrIcon />
              {t("rooms.generate")}
            </button>
          )}
          <button
            onClick={() => setIsEditing(true)}
            className="cursor-pointer text-gray-400 hover:text-gray-900 p-1.5 rounded hover:bg-gray-100"
          >
            <PanIcon />
          </button>
          <button className="cursor-pointer text-gray-400 hover:text-red-600 p-1.5 rounded hover:bg-red-50">
            <TrashIcon />
          </button>
        </>
      )}

      <AppModal
        open={openQrModal}
        onOpenChange={setOpenQrModal}
        title={`QR ${t("common.code")} — ${t("common.room")} 101`}
      >
        <RoomsQrModal />
      </AppModal>
    </div>
  );
};

export default RoomsTableEditingRow;
