import { useParams } from "react-router-dom";
import SingleDepartmentHeader from "../components/main/singleDepartment/singleDepartmentHeader";
import SingleDepartmentNav from "../components/main/singleDepartment/SingleDepartmentNav";
import SingleDepartmentGrid from "../components/main/singleDepartment/SingleDepartmentGrid";

const SingleDepartment = () => {
  const { id } = useParams();
  return (
    <div>
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        <SingleDepartmentHeader id={id} />
        <SingleDepartmentNav id={id} />
        <SingleDepartmentGrid />
      </div>
    </div>
  );
};

export default SingleDepartment;
