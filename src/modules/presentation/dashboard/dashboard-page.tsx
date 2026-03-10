import DashboardHeader from "@/modules/components/dashboard/dashboard-headers";
// import HeroPattern from "@/modules/components/dashboard/hero-pattern";

import QuickActionsPanel from "@/modules/components/dashboard/quick-actions-panel";
import TextInputPanel from "@/modules/components/dashboard/text-input-panel";

const DashboardPage = async () => {
  return (
    <div className="relative">
      {/* <HeroPattern /> */}
      <div className="relative space-y-8 p-4 lg:p-16">
        <DashboardHeader />
        <TextInputPanel />
        <QuickActionsPanel />
      </div>
    </div>
  );
};

export default DashboardPage;
