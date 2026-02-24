import { useTranslation } from "react-i18next";
import { DownloadIcon, PlusIcon } from "../../assets";

const RequestsHeader = () => {
  const { t } = useTranslation();
  return (
    <header className="shrink-0 bg-[#f3f3f3] py-6 px-8 z-10">
      <div className="max-w-350 mx-auto w-full flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight font-body">
            {t("requests.title")}
          </h1>
          <p className="text-gray-500 text-sm">{t("requests.subTitle")}</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-[#f6f7f9] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a65e] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border hover:text-[#0f1729] px-4 py-2 h-10 gap-2 bg-white border-transparent shadow-sm hover:bg-gray-50 text-gray-900">
            <DownloadIcon />
            <span className="hidden sm:inline">{t("requests.export")}</span>
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-[#f6f7f9] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a65e] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:shadow-md py-2 h-10 px-5 gap-2 bg-[#c5a667] hover:bg-[#b09358] text-white shadow-md shadow-[#c5a667]/20">
            <PlusIcon />
            {t("requests.newRequest")}
          </button>
        </div>
      </div>
    </header>
  );
};

export default RequestsHeader;
