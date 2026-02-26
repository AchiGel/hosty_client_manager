const ErrorBadge = ({ type }: { type: string }) => (
  <span className="inline-flex px-2 py-0.5 rounded text-xs font-medium bg-orange-50 text-orange-700">
    {type}
  </span>
);

export default ErrorBadge;
