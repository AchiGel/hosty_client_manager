const AnalyticsShiftLoadAnalysis = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-bold text-gray-900">Shift Load Analysis</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-125">
          <thead>
            <tr className="bg-gray-50/50 text-xs text-gray-500 uppercase tracking-wider">
              <th className="px-6 py-4 font-medium">Shift</th>
              <th className="px-6 py-4 font-medium text-center">Requests</th>
              <th className="px-6 py-4 font-medium text-center">Avg. Time</th>
              <th className="px-6 py-4 font-medium">Load</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-medium text-gray-900">
                Morning (06–14)
              </td>
              <td className="px-6 py-4 text-center text-gray-900 font-semibold">
                98
              </td>
              <td className="px-6 py-4 text-center text-gray-600">11m</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-gray-100 rounded-full h-2.5 overflow-hidden">
                    <div className="h-full rounded-full bg-[#c5a667] transition-all w-[79%]"></div>
                  </div>
                  <span className="text-xs font-medium text-gray-500 w-10 text-right">
                    79%
                  </span>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-medium text-gray-900">
                Afternoon (14–22)
              </td>
              <td className="px-6 py-4 text-center text-gray-900 font-semibold">
                124
              </td>
              <td className="px-6 py-4 text-center text-gray-600">13m</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-gray-100 rounded-full h-2.5 overflow-hidden">
                    <div className="h-full rounded-full bg-[#c5a667] transition-all w-full"></div>
                  </div>
                  <span className="text-xs font-medium text-gray-500 w-10 text-right">
                    100%
                  </span>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-medium text-gray-900">
                Night (22–06)
              </td>
              <td className="px-6 py-4 text-center text-gray-900 font-semibold">
                42
              </td>
              <td className="px-6 py-4 text-center text-gray-600">17m</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-gray-100 rounded-full h-2.5 overflow-hidden">
                    <div className="h-full rounded-full bg-[#c5a667] transition-all w-[34%]"></div>
                  </div>
                  <span className="text-xs font-medium text-gray-500 w-10 text-right">
                    34%
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AnalyticsShiftLoadAnalysis;
