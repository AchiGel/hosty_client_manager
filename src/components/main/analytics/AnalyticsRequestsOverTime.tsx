import { useState, useMemo } from "react";
import { Line } from "react-chartjs-2";
import { useTranslation } from "react-i18next";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";
import DateRangeCalendar from "./DateRangeCalendar";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
);

type TimePeriod = "today" | "7days" | "30days";

interface ChartDataConfig {
  labels: string[];
  data: number[];
}

const getChartData = (period: TimePeriod): ChartDataConfig => {
  const generate7DaysData = () => {
    const labels: string[] = [];
    const data: number[] = [];
    const today = new Date();

    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      labels.push(
        date.toLocaleDateString("en-US", { day: "numeric", month: "short" }),
      );
      data.push(Math.floor(Math.random() * 100) + 20);
    }

    return { labels, data };
  };

  const generate30DaysData = () => {
    const labels: string[] = [];
    const data: number[] = [];
    const today = new Date();

    for (let i = 29; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      labels.push(
        date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      );
      data.push(Math.floor(Math.random() * 100) + 20);
    }

    return { labels, data };
  };

  const dataMap: Record<TimePeriod, ChartDataConfig> = {
    today: {
      labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "23:59"],
      data: [12, 19, 15, 25, 22, 30, 28],
    },
    "7days": generate7DaysData(),
    "30days": generate30DaysData(),
  };
  return dataMap[period];
};

const AnalyticsRequestsOverTime = () => {
  const { t } = useTranslation();
  const [timePeriod, setTimePeriod] = useState<TimePeriod>("7days");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const chartData = getChartData(timePeriod);

  const handleDateChange = (
    newStartDate: Date | null,
    newEndDate: Date | null,
  ) => {
    setStartDate(newStartDate);
    setEndDate(newEndDate);
  };

  const data = useMemo(
    () => ({
      labels: chartData.labels,
      datasets: [
        {
          data: chartData.data,
          borderColor: "#c9a65e",
          backgroundColor: "rgba(201, 166, 94, 0.1)",
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointBackgroundColor: "#c9a65e",
          pointBorderColor: "#c9a65e",
          pointBorderWidth: 2,
          pointHoverRadius: 6,
          pointHoverBackgroundColor: "#b69357",
          pointHoverBorderColor: "#b69357",
        },
      ],
    }),
    [chartData],
  );

  const options = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          backgroundColor: "#ffffff",
          titleColor: "#1f2937",
          bodyColor: "#6b7280",
          borderColor: "#e5e7eb",
          borderWidth: 1,
          padding: 12,
          cornerRadius: 8,
          displayColors: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: "#9ca3af",
            font: { size: 11 },
          },
          grid: {
            color: "#f0f0f0",
            drawBorder: false,
          },
        },
        x: {
          ticks: {
            color: "#9ca3af",
            font: { size: 11 },
          },
          grid: {
            color: "#f0f0f0",
            drawBorder: false,
          },
        },
      },
    }),
    [],
  );

  const periods: { key: string; value: TimePeriod }[] = [
    { key: "analytics.today", value: "today" },
    { key: "analytics.last7Days", value: "7days" },
    { key: "analytics.last30Days", value: "30days" },
  ];

  const getButtonClass = (value: TimePeriod) =>
    `cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a65e] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 text-xs ${
      timePeriod === value
        ? "bg-[#c9a65e] hover:bg-[#b69357] text-white border border-[#c9a65e] shadow-sm"
        : "border border-[#dcdfe5] bg-[#f6f7f9] text-[#0f1729] hover:bg-[#c9a65e] hover:text-[#0f1729]"
    }`;

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col h-full relative">
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <h3 className="text-lg font-bold text-gray-900">
          {t("analytics.requestsOverTime")}
        </h3>
        <div className="flex flex-wrap items-center gap-2">
          {periods.map(({ key, value }) => (
            <button
              key={value}
              onClick={() => setTimePeriod(value)}
              className={getButtonClass(value)}
            >
              {t(key)}
            </button>
          ))}
          <div className="relative">
            <button
              onClick={() => setShowDatePicker(!showDatePicker)}
              className="cursor-pointer inline-flex items-center justify-center gap-1.5 whitespace-nowrap font-medium ring-[#f6f7f9] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a65e] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-[#dcdfe5] bg-[#f6f7f9] hover:bg-[#c9a65e] hover:text-[#0f1729] h-9 rounded-md px-3 text-xs"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3.5 h-3.5"
              >
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
              {t("analytics.custom")}
            </button>
            {showDatePicker && (
              <DateRangeCalendar
                startDate={startDate}
                endDate={endDate}
                onDateChange={handleDateChange}
                onClose={() => setShowDatePicker(false)}
              />
            )}
          </div>
        </div>
      </div>
      <div className="w-full h-72">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default AnalyticsRequestsOverTime;
