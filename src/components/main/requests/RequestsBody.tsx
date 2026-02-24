import RequestsBodyFilter from "./RequestsBodyFilter";

const RequestsBody = () => {
  return (
    <div className="flex-1 p-4 sm:p-8 pt-0">
      <div className="max-w-350 mx-auto w-full flex flex-col gap-6">
        <RequestsBodyFilter />
        <div className="bg-white rounded-xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden flex flex-col"></div>
      </div>
    </div>
  );
};

export default RequestsBody;
