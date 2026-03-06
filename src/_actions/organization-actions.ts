"use server";

import { routes } from "@/config/routes";
import { auth } from "@/lib/auth";
import { CreateOrganizationSchemaType } from "@/schemas/organization-schemas";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { getCurrentUserAction } from "@/_actions/auth-actions";
import prisma from "@/lib/prisma";

export const createOrganizationAction = async (
  data: CreateOrganizationSchemaType,
) => {
  try {
    if (!data) {
      return { success: false, message: "No information provided!" };
    } else {
      const result = await auth.api.createOrganization({
        body: {
          name: data.name,
          slug: data.slug,
          logo: data.logo,
          keepCurrentActiveOrganization: false,
        },
        headers: await headers(),
      });
      revalidatePath(routes.dashboard);
      return {
        success: true,
        message: "Successfully created organization",
        data: result,
      };
    }
  } catch (err) {
    console.error("Failed creating organization: ", err);
  }
};

export const setActiveOrganizationAction = async (
  organizationId: string,
  slug: string,
) => {
  try {
    const data = await auth.api.setActiveOrganization({
      body: {
        organizationId: organizationId,
        organizationSlug: slug,
      } /*  */,
      headers: await headers(),
    });
    return {
      success: true,
      message: "Switched organization succcessfully",
      data: data,
    };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      message: "Internal server error, try again later",
    };
  }
};

export const getOrganizationsAction = async () => {
  const { currentUser } = await getCurrentUserAction();
  const members = await prisma.member.findMany({
    where: {
      userId: currentUser.id,
    },
  });
  try {
    const organizations = await prisma.organization.findMany({
      where: {
        id: {
          in: members.map((member) => {
            return member.organizationId;
          }),
        },
      },
    });
    return { success: true, organizations: organizations };
  } catch (err) {
    console.error(err);
    return { success: false, message: "Failed to fetch organizations" };
  }
};

export const getInitialOrganizationAction = async (userId: string) => {
  try {
    const memberUser = await prisma.member.findUnique({
      where: { id: userId },
    });
    const activeOrganization = await prisma.organization.findFirst({
      where: {
        id: memberUser?.organizationId,
      },
    });
    return { success: true, activeOrganization: activeOrganization };
  } catch (err) {
    console.error(err);
    return { success: false, message: "Internal server error" };
  }
};
