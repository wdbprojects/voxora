"use client";

import { authClient } from "@/lib/auth-client";

const DashboardOrganizationContent = () => {
  const { data: activeOrganization } = authClient.useActiveOrganization();

  return (
    <div className="h-full">
      <h3 className="text-primary/50 font-semibold text-lg">
        {activeOrganization?.name}
      </h3>
    </div>
  );
};

export default DashboardOrganizationContent;
