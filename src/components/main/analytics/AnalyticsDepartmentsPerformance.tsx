import { useMemo } from "react";
import { Bar } from "react-chartjs-2";
import { useTranslation } from "react-i18next";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const AnalyticsDepartmentsPerformance = () => {
  const { t } = useTranslation();

  const departments = [
    { name: "Front Desk", totalRequests: 245, avgTime: 12 },
    { name: "Housekeeping", totalRequests: 189, avgTime: 18 },
    { name: "Room Service", totalRequests: 312, avgTime: 15 },
    { name: "Maintenance", totalRequests: 156, avgTime: 25 },
    { name: "Concierge", totalRequests: 203, avgTime: 8 },
    { name: "Security", totalRequests: 98, avgTime: 10 },
  ];

  const data = useMemo(
    () => ({
      labels: departments.map((dept) => dept.name),
      datasets: [
        {
          label: t("analytics.totalRequests"),
          data: departments.map((dept) => dept.totalRequests),
          backgroundColor: "#c9a65e",
          borderColor: "#b69357",
          borderWidth: 1,
          borderRadius: 6,
          barPercentage: 0.7,
          categoryPercentage: 0.8,
        },
        {
          label: t("analytics.avgTime"),
          data: departments.map((dept) => dept.avgTime),
          backgroundColor: "#e8dcc1",
          borderColor: "#d4c4a0",
          borderWidth: 1,
          borderRadius: 6,
          barPercentage: 0.7,
          categoryPercentage: 0.8,
        },
      ],
    }),
    [t],
  );

  const options = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: "x" as const,
      plugins: {
        legend: {
          display: true,
          position: "top" as const,
          labels: {
            color: "#6b7280",
            font: { size: 12, weight: 500 },
            padding: 15,
            usePointStyle: true,
          },
        },
        tooltip: {
          backgroundColor: "#ffffff",
          titleColor: "#1f2937",
          bodyColor: "#6b7280",
          borderColor: "#e5e7eb",
          borderWidth: 1,
          padding: 12,
          cornerRadius: 8,
          displayColors: true,
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
            display: false,
            drawBorder: false,
          },
        },
      },
    }),
    [],
  );

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col">
      <h3 className="text-lg font-bold text-gray-900 mb-6">
        {t("analytics.departmentPerformance")}
      </h3>
      <div className="w-full h-72">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default AnalyticsDepartmentsPerformance;
