import { Organization } from "@/generated/prisma/client";
import { ReactNode } from "react";

export interface LayoutPropsMain {
  children: ReactNode;
}

export interface OrganizationSwitchProps {
  organizations: Organization[];
}
