"use client";

import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import {
  createOrganizationSchema,
  CreateOrganizationSchemaType,
} from "@/schemas/organization-schemas";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { createOrganizationAction } from "@/_actions/organization-actions";
import { toast } from "sonner";

const CreateOrganization = () => {
  const [pendingCreateOrganization, startOrganizationTransition] =
    useTransition();
  const [dialogOpen, setDialogOpen] = useState(false);

  const form = useForm<CreateOrganizationSchemaType>({
    resolver: zodResolver(createOrganizationSchema),
    defaultValues: {
      name: "",
      slug: "",
      logo: "",
    },
  });
  const { handleSubmit, control, reset } = form;

  const onSubmit = (data: CreateOrganizationSchemaType) => {
    startOrganizationTransition(async () => {
      const response = await createOrganizationAction(data);
      if (response?.success) {
        toast.success(response?.message);
        reset();
        setDialogOpen(false);
      } else {
        toast.error(response?.message);
      }
      console.log(data);
    });
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <form id="create-organization" onSubmit={handleSubmit(onSubmit)}>
        <DialogTrigger
          render={
            <Button
              variant="outline"
              onClick={() => {
                setDialogOpen(true);
              }}
            >
              Create Organization
            </Button>
          }
        />
        <DialogContent className="sm:max-w-sm">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-center text-xl font-medium">
              Create Organization
            </DialogTitle>
            <DialogDescription className="text-center">
              Add organization details. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup className="gap-4">
            {/* ORGANIZATION NAME */}
            <Controller
              control={control}
              name="name"
              render={({ field, fieldState }) => {
                return (
                  <Field className="gap-2">
                    <FieldLabel htmlFor="name">Organization Name</FieldLabel>
                    <Input
                      id="name"
                      type="text"
                      placeholder="ACME Inc."
                      autoComplete="off"
                      aria-invalid={fieldState.invalid}
                      {...field}
                    />
                    <FieldError
                      errors={[fieldState.error]}
                      className="text-xs italic"
                    />
                  </Field>
                );
              }}
            />
            {/* ORGANIZATION SLUG */}
            <Controller
              control={control}
              name="slug"
              render={({ field, fieldState }) => {
                return (
                  <Field className="gap-2">
                    <FieldLabel htmlFor="slug">Slug</FieldLabel>
                    <Input
                      id="slug"
                      type="text"
                      placeholder="acme-inc"
                      autoComplete="off"
                      aria-invalid={fieldState.invalid}
                      {...field}
                    />
                    <FieldError
                      errors={[fieldState.error]}
                      className="text-xs italic"
                    />
                  </Field>
                );
              }}
            />
          </FieldGroup>
          {/* LOGO */}
          <Controller
            control={control}
            name="logo"
            render={({ field, fieldState }) => {
              return (
                <Field className="gap-2">
                  <FieldLabel htmlFor="name">Logo</FieldLabel>
                  <Input
                    id="logo"
                    type="text"
                    placeholder="https://example.com/logo.png"
                    autoComplete="off"
                    aria-invalid={fieldState.invalid}
                    {...field}
                  />
                  <FieldError
                    errors={[fieldState.error]}
                    className="text-xs italic"
                  />
                </Field>
              );
            }}
          />
          <DialogFooter className="mt-6">
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
            <Button
              type="submit"
              form="create-organization"
              disabled={pendingCreateOrganization}
            >
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default CreateOrganization;
