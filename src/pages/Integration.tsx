import IntegrationErrors from "../components/main/integration/IntegrationErrors";
import IntegrationHeader from "../components/main/integration/IntegrationHeader";
import IntegrationStatus from "../components/main/integration/IntegrationStatus";
import IntegrationSyncActivity from "../components/main/integration/IntegrationSyncActivity";

const Integration = () => {
  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-6">
      <IntegrationHeader />
      <IntegrationStatus />
      <IntegrationSyncActivity />
      <IntegrationErrors />
    </div>
  );
};

export default Integration;
