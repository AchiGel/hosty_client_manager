const SingleDepartmentItemHeader = () => {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-500">
      <button className="hover:text-gray-900 transition-colors">
        Departments
      </button>
      <span>/</span>
      <button className="hover:text-gray-900 transition-colors">
        Room Service
      </button>
      <span>/</span>
      <span className="text-gray-900 font-medium">Towels</span>
    </div>
  );
};

export default SingleDepartmentItemHeader;
