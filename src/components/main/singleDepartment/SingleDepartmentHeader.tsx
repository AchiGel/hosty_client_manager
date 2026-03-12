const SingleDepartmentHeader = ({ id }: { id: string | undefined }) => {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-500">
      <button className="hover:text-gray-900 transition-colors">
        Departments
      </button>
      <span>/</span>
      <span className="text-gray-900 font-medium">
        {id?.replace("-", " ").toUpperCase()}
      </span>
    </div>
  );
};

export default SingleDepartmentHeader;
