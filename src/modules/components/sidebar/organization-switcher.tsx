"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { OrganizationSwitchProps } from "@/config/types";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ChevronsUpDown, GalleryVerticalEnd } from "lucide-react";
import { toast } from "sonner";

const OrganizationSwitcher = ({ organizations }: OrganizationSwitchProps) => {
  const { data: activeOrganization } = authClient.useActiveOrganization();
  const [selectedOrg, setSelectedOrg] = useState(() => {
    if (activeOrganization) {
      return activeOrganization.name;
    }
  });

  const handleChangeOrganization = async (id: string, name: string) => {
    try {
      const { error } = await authClient.organization.setActive({
        organizationId: id,
      });
      if (error) {
        toast.error("Failed to switched organization");
        return;
      }
      setSelectedOrg(name);
      toast.success("Organization switched successfully");
    } catch (err) {
      console.error(err);
      toast.error(`Something went south!`);
    }
  };

  return (
    <SidebarMenu className="border rounded-md">
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground "
              >
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg ">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span>
                    {selectedOrg
                      ? selectedOrg
                      : activeOrganization?.name || "Select Organization"}
                  </span>
                </div>
                <ChevronsUpDown className="ml-auto" />
              </SidebarMenuButton>
            }
          />
          <DropdownMenuContent align="start" className="">
            {organizations?.map((org) => {
              return (
                <DropdownMenuItem
                  key={org.id}
                  className="w-full! cursor-pointer"
                  onClick={() => {
                    handleChangeOrganization(org.id, org.name);
                  }}
                >
                  {org.name}
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default OrganizationSwitcher;
