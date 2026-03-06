"use server";

import { routes } from "@/config/routes";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { LoginSchemaType, RegisterSchemaType } from "@/schemas/auth-schemas";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const registerAction = async (data: RegisterSchemaType) => {
  try {
    await auth.api.signUpEmail({
      body: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    });
    return {
      success: true,
      message: "Successfully registered, you can log in now!",
    };
  } catch (error) {
    const err = error as Error;
    console.error(err.message);
    return { success: false, message: err.message };
  }
};

export const loginAction = async (data: LoginSchemaType) => {
  try {
    await auth.api.signInEmail({
      body: {
        email: data.email,
        password: data.password,
      },
    });
    return { success: true, message: "Successfully logged in, redirecting..." };
  } catch (error) {
    const err = error as Error;
    console.error(err.message);
    return { success: false, message: err.message || "Unknown error found!" };
  }
};

export const getUserDataAction = async (id: string) => {
  try {
    if (!id) throw new Error("Please provide the user ID");
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    return {
      success: true,
      data: user,
      message: "User retrieved successfully",
    };
  } catch (err) {
    console.error(err);
    return { success: false };
  }
};

export const getCurrentUserAction = async () => {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    redirect(routes.login);
  }
  const currentUser = await prisma.user.findUnique({
    where: {
      id: session?.user?.id,
    },
  });
  if (!currentUser) {
    redirect(routes.login);
  }
  return { ...session, currentUser };
};
