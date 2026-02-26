import type { ErrorRecord } from "../../../constants/errorData";
import ErrorBadge from "./ErrorBadge";

const ErrorRow = ({ error }: { error: ErrorRecord }) => (
  <tr className="hover:bg-gray-50 transition-colors">
    <td className="px-6 py-3 text-gray-500 whitespace-nowrap">{error.date}</td>
    <td className="px-6 py-3">
      <ErrorBadge type={error.type} />
    </td>
    <td className="px-6 py-3 text-gray-700">{error.description}</td>
  </tr>
);

export default ErrorRow;
