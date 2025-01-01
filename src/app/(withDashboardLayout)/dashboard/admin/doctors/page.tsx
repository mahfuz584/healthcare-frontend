"use client";
import BackgroundPaper from "@/components/shared/Dashboard/BackgroundPaper";
import DynamicFullFormModal from "@/components/shared/Dashboard/DynamicFullFormModal";
import QuickActionBar from "@/components/shared/Dashboard/QuickActionBar";
import { prohibitedChars } from "constants/prohabiatetChars";
import { useState } from "react";
import { z } from "zod";

const DoctorPage = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const formFields = [
    {
      name: "file",
      label: "Image",
      placeHolder: "Upload Image",
      type: "file",
      required: false,
      accept: "image/*",
    },
    {
      name: "doctor.name",
      label: "Name",
      placeHolder: "Enter Doctor's Name",
      required: true,
      type: "text",
    },
    {
      name: "doctor.email",
      label: "Email",
      required: true,
      placeHolder: "Enter Doctor's Email",
      type: "email",
    },
    {
      name: "doctor.contactNumber",
      label: "Contact Number",
      placeHolder: "Enter Doctor's Contact Number",
      required: true,
      type: "tel",
    },
    {
      name: "doctor.designation",
      label: "Designation",
      required: true,
      placeHolder: "Enter Doctor's Designation",
      type: "text",
    },
    {
      name: "doctor.qualification",
      label: "Qualification",
      required: true,
      placeHolder: "Enter Doctor's Qualification",
      type: "text",
    },
    {
      name: "doctor.registrationNumber",
      label: "Registration Number",
      required: true,
      placeHolder: "Enter Doctor's Registration Number",
      type: "text",
    },
    {
      name: "doctor.experience",
      label: "Experience",
      required: true,
      placeHolder: "Enter Doctor's Experience in Years",
      type: "number",
    },
    {
      name: "doctor.gender",
      label: "Gender",
      required: true,
      placeHolder: "Select Doctor's Gender",
      type: "select",
      options: [
        {
          value: "MALE",
          label: "Male",
        },
        {
          value: "FEMALE",
          label: "Female",
        },
      ],
    },
    {
      name: "doctor.apointmentFee",
      label: "Appointment Fee",
      required: true,
      placeHolder: "Enter Appointment Fee",
      type: "number",
    },
    {
      name: "doctor.currentWorkingPlace",
      label: "Current Working Place",
      placeHolder: "Enter Doctor's Current Working Place",
      type: "text",
    },
    {
      name: "password",
      label: "Password",
      required: true,
      placeHolder: "Enter Password",
      type: "password",
    },

    {
      name: "doctor.address",
      label: "Address",
      required: true,
      placeHolder: "Enter Doctor's Address",
      type: "text-area",
    },
  ];
  const doctorsSchema = z.object({
    doctor: z.object({
      name: z.string().min(3, "Name must be at least 3 characters"),
      email: z
        .string()
        .email()
        .min(1, "Required")
        .refine(
          (email) => {
            const [localPart] = email.split("@");

            // Check if local part has any prohibited characters or consecutive dots
            return (
              !prohibitedChars.test(localPart) &&
              !localPart.startsWith(".") &&
              !localPart.endsWith("()") &&
              !localPart.includes("-")
            );
          },
          {
            message: "Email ID contains prohibited characters",
          }
        )
        .refine(
          (email) => {
            const domainPart = email.split("@")[1];

            return (
              domainPart &&
              !domainPart.startsWith(".") &&
              !domainPart.endsWith(".") &&
              !domainPart.includes("..")
            );
          },
          {
            message: "Email domain contains prohibited characters",
          }
        ),
      contactNumber: z.string().min(1, "Invalid contact number"),
      designation: z
        .string()
        .min(1, "Designation must be at least 1 character"),
      qualification: z
        .string()
        .min(1, "Qualification must be at least 1 character"),
      registrationNumber: z.string().min(1, "Invalid registration number"),
      experience: z.number().min(1, "Invalid experience"),
      gender: z.string().min(1, "Gender is required"),
      apointmentFee: z.number().min(1, "Invalid appointment fee"),
      currentWorkingPlace: z
        .string()
        .min(1, "Current working place must be at least 1 character"),
      address: z.string().min(1, "Address must be at least 1 character"),
    }),
    password: z
      .string()
      .min(3, { message: "Password must be at least 3 characters" }),
    file: z.instanceof(File, { message: "Image is required" }),
  });

  return (
    <BackgroundPaper>
      <QuickActionBar
        btnText="Create Doctor"
        handleOpenDialog={handleOpenDialog}
      />
      <DynamicFullFormModal
        open={openDialog}
        handleClose={handleCloseDialog}
        textTitle="Create Doctor"
        formFields={formFields}
        schema={doctorsSchema}
        formData={true}
        endpoint="/user/create-doctor"
      />
    </BackgroundPaper>
  );
};

export default DoctorPage;
