import DashboardCards from "../components/main/dashboard/DashboardCards";
import DashboardHeader from "../components/main/dashboard/DashboardHeader";
import DashboardMain from "../components/main/dashboard/DashboardMain";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8">
      <DashboardHeader />
      <DashboardCards />
      <DashboardMain />
    </div>
  );
};

export default Home;
