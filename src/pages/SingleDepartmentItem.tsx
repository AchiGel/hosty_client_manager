import SingleDepartmentItemGrid from "../components/main/singleDepartmentItem/SingleDepartmentItemGrid";
import SingleDepartmentItemHeader from "../components/main/singleDepartmentItem/SingleDepartmentItemHeader";
import SingleDepartmentItemNav from "../components/main/singleDepartmentItem/SingleDepartmentItemNav";

const SingleDepartmentItem = () => {
  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-6">
      <SingleDepartmentItemHeader />
      <SingleDepartmentItemNav />
      <SingleDepartmentItemGrid />
    </div>
  );
};

export default SingleDepartmentItem;
