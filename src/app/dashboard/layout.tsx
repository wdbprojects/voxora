import { LayoutPropsMain } from "@/config/types";
import DashboardLayout from "@/modules/layouts/dashboard-layout";

const DashboardLayoutMain = async ({ children }: LayoutPropsMain) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default DashboardLayoutMain;
