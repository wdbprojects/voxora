import { Organization } from "@/generated/prisma/client";
import { ReactNode } from "react";

export interface LayoutPropsMain {
  children: ReactNode;
}

export interface OrganizationSwitchProps {
  organizations: Organization[];
}

export type IQuickAction = {
  key: number;
  title: string;
  description: string;
  gradient: string;
  href: string;
};
