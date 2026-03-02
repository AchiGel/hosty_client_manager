import RequestsBodyFilter from "./RequestsBodyFilter";
import RequestsBodyTable from "./RequestsBodyTable";

const RequestsBody = () => {
  return (
    <div className="flex-1 p-4 sm:p-8 pt-0">
      <div className="max-w-350 mx-auto w-full flex flex-col gap-6">
        <RequestsBodyFilter />
        <RequestsBodyTable />
      </div>
    </div>
  );
};

export default RequestsBody;
