"use client";
import BackgroundPaper from "@/components/shared/Dashboard/BackgroundPaper";
import DynamicFormModal from "@/components/shared/Dashboard/DynamicFormModal";
import QuickActionBar from "@/components/shared/Dashboard/QuickActionBar";

import { useState } from "react";
import { z } from "zod";

const SpecialtiesPage = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const formFields = [
    {
      name: "title",
      label: "Specialty",
      placeHolder: "Enter Specialty",
      type: "text",
    },
    {
      name: "file",
      label: "Image",
      placeHolder: "Upload Image",
      type: "file",
      accept: "image/*",
    },
  ];

  const formSchema = z.object({
    title: z.string().nonempty("Specialty is required"),
    file: z.instanceof(File, { message: "Image is required" }),
  });
  return (
    <BackgroundPaper>
      <QuickActionBar
        btnText="Create Specialties"
        handleOpenDialog={handleOpenDialog}
      />
      <DynamicFormModal
        open={openDialog}
        handleClose={handleCloseDialog}
        textTitle="Create Specialties"
        formFields={formFields}
        schema={formSchema}
        formData={true}
        endpoint="/specialties"
      />
    </BackgroundPaper>
  );
};

export default SpecialtiesPage;
