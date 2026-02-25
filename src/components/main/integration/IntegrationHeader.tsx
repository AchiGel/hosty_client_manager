import { useTranslation } from "react-i18next";

const IntegrationHeader = () => {
  const { t } = useTranslation();
  return (
    <div className="flex justify-between items-end flex-wrap gap-4">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          {t("integration.title")}
        </h1>
        <p className="text-gray-500 mt-1">{t("integration.subTitle")}</p>
      </div>
      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 shadow-sm hover:shadow-md h-10 px-4 py-2 bg-[#c5a667] hover:bg-[#b09358] text-white gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-refresh-cw h-4 w-4"
        >
          <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
          <path d="M21 3v5h-5"></path>
          <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
          <path d="M8 16H3v5"></path>
        </svg>
        {t("integration.triggerManualSync")}
      </button>
    </div>
  );
};

export default IntegrationHeader;
