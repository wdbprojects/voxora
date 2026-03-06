import { Separator } from "@/components/ui/separator";
import prisma from "@/lib/prisma";
import CreateOrganization from "@/modules/components/dashboard/create-organization";
import DashboardOrganizationContent from "@/modules/components/dashboard/dashboard-organization-content";

const DashboardPage = async () => {
  const voices = await prisma.voice.findMany();
  console.log(voices);

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-semibold text-foreground">
        Organization Setup
      </h2>

      <DashboardOrganizationContent />

      <Separator className="my-4" />
      <CreateOrganization />
      <Separator className="my-4" />
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Voices ({voices[0].name})</h1>
        <ul className="space-y-2"></ul>
      </div>
    </div>
  );
};

export default DashboardPage;
