import OrganizationSwitcher from "@/modules/components/sidebar/organization-switcher";
import { getOrganizationsAction } from "@/_actions/organization-actions";
import { Separator } from "@/components/ui/separator";
import {
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import NavMain from "@/modules/components/sidebar/nav-main";
import NavUser from "@/modules/components/sidebar/nav-user";

const DashboardSidebarContent = async () => {
  const { organizations } = await getOrganizationsAction();

  return (
    <>
      <SidebarHeader>
        <OrganizationSwitcher organizations={organizations || []} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
      </SidebarContent>
      <SidebarFooter>
        <Separator />
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </>
  );
};

export default DashboardSidebarContent;
