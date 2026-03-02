"use client";

import { usePathname } from "next/navigation";
import { routes } from "@/config/routes";
import Link from "next/link";
import SidebarTriggerCustom from "@/modules/components/sidebar/sidebar-trigger-custom";

const AppLogo = () => {
  const pathname = usePathname();
  const isDashboard = pathname.includes("/dashboard");

  return (
    <div className="flex flex-1 shrink-0 items-center gap-2 p-1">
      {isDashboard && <SidebarTriggerCustom />}
      <Link href={routes.home} className="flex flex-row items-center gap-0">
        <h6 className="text-primary text-xl font-bold tracking-tight">vox</h6>
        <h6 className="text-foreground text-xl font-bold tracking-tight">
          ora
        </h6>
      </Link>
    </div>
  );
};

export default AppLogo;
