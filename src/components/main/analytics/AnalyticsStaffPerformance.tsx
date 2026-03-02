const AnalyticsStaffPerformance = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-bold text-gray-900">Staff Performance</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-175">
          <thead>
            <tr className="bg-gray-50/50 text-xs text-gray-500 uppercase tracking-wider">
              <th className="px-6 py-4 font-medium">Staff Name</th>
              <th className="px-6 py-4 font-medium">Department</th>
              <th className="px-6 py-4 font-medium text-center">Completed</th>
              <th className="px-6 py-4 font-medium text-center">Avg. Time</th>
              <th className="px-6 py-4 font-medium text-center">
                On-Time Rate
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-medium text-gray-900">
                Maria Santos
              </td>
              <td className="px-6 py-4 text-gray-600">Housekeeping</td>
              <td className="px-6 py-4 text-center text-gray-900 font-semibold">
                45
              </td>
              <td className="px-6 py-4 text-center text-gray-600">12m</td>
              <td className="px-6 py-4 text-center">
                <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
                  96%
                </span>
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-medium text-gray-900">
                Elena Popov
              </td>
              <td className="px-6 py-4 text-gray-600">Room Service</td>
              <td className="px-6 py-4 text-center text-gray-900 font-semibold">
                52
              </td>
              <td className="px-6 py-4 text-center text-gray-600">8m</td>
              <td className="px-6 py-4 text-center">
                <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
                  98%
                </span>
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-medium text-gray-900">
                David Chen
              </td>
              <td className="px-6 py-4 text-gray-600">Housekeeping</td>
              <td className="px-6 py-4 text-center text-gray-900 font-semibold">
                38
              </td>
              <td className="px-6 py-4 text-center text-gray-600">14m</td>
              <td className="px-6 py-4 text-center">
                <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-50 text-yellow-700">
                  92%
                </span>
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-medium text-gray-900">
                James Wilson
              </td>
              <td className="px-6 py-4 text-gray-600">Maintenance</td>
              <td className="px-6 py-4 text-center text-gray-900 font-semibold">
                29
              </td>
              <td className="px-6 py-4 text-center text-gray-600">18m</td>
              <td className="px-6 py-4 text-center">
                <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-red-50 text-red-700">
                  88%
                </span>
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-medium text-gray-900">
                Sofia Rodriguez
              </td>
              <td className="px-6 py-4 text-gray-600">Concierge</td>
              <td className="px-6 py-4 text-center text-gray-900 font-semibold">
                33
              </td>
              <td className="px-6 py-4 text-center text-gray-600">10m</td>
              <td className="px-6 py-4 text-center">
                <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
                  95%
                </span>
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-medium text-gray-900">
                Ahmed Hassan
              </td>
              <td className="px-6 py-4 text-gray-600">Front Desk</td>
              <td className="px-6 py-4 text-center text-gray-900 font-semibold">
                41
              </td>
              <td className="px-6 py-4 text-center text-gray-600">6m</td>
              <td className="px-6 py-4 text-center">
                <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
                  97%
                </span>
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-medium text-gray-900">Lisa Park</td>
              <td className="px-6 py-4 text-gray-600">Spa</td>
              <td className="px-6 py-4 text-center text-gray-900 font-semibold">
                18
              </td>
              <td className="px-6 py-4 text-center text-gray-600">15m</td>
              <td className="px-6 py-4 text-center">
                <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-50 text-yellow-700">
                  90%
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AnalyticsStaffPerformance;
