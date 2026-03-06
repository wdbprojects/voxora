import { z } from "zod";

export const createOrganizationSchema = z.object({
  name: z.string().nonempty({ message: "Organization name is required" }),
  slug: z.string().nonempty({ message: "Slug is required" }),
  logo: z.string().optional(),
});
export type CreateOrganizationSchemaType = z.infer<
  typeof createOrganizationSchema
>;
