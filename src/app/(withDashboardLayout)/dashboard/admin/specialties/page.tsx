"use client";
import BackgroundPaper from "@/components/shared/Dashboard/BackgroundPaper";
import DynamicDataTable from "@/components/shared/Dashboard/DynamicDataTable";
import DynamicFormModal from "@/components/shared/Dashboard/DynamicFormModal";
import QuickActionBar from "@/components/shared/Dashboard/QuickActionBar";
import { Box, IconButton } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import { FaTrash } from "react-icons/fa6";

import DynamicDeleteModal from "@/components/shared/Dashboard/DynamicDeleteModal";
import { useState } from "react";
import { useListApiQuery } from "redux/api/genericEndPoints";
import { z } from "zod";

const SpecialtiesPage = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { data: { data: specialtiesData = [] } = {}, isLoading } =
    useListApiQuery({ url: "/specialties" });
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

  const columns: GridColDef[] = [
    {
      field: "",
      headerName: "ID",
      width: 100,
      headerAlign: "center",
      renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1,
    },
    { field: "title", headerName: "Title", flex: 1, headerAlign: "center" },
    {
      field: "icon",
      headerName: "Icon",
      flex: 1,
      headerAlign: "center",
      renderCell: ({ row }) => (
        <Box
          sx={{
            "& img": {
              width: "30px",
              height: "30px",
              objectFit: "cover",
              borderRadius: "50%",
            },
          }}
        >
          <Image src={row?.icon} alt={row?.title} width={1000} height={1000} />
        </Box>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      headerAlign: "center",
      renderCell: ({ row }) => (
        <IconButton onClick={() => setOpenModal(row?.id)}>
          <FaTrash color="#062a4d" size={20} />
        </IconButton>
      ),
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
      <DynamicDataTable
        columns={columns}
        rows={specialtiesData}
        isLoading={isLoading}
      />
      <DynamicDeleteModal openModal={openModal} setOpenModal={setOpenModal} />
    </BackgroundPaper>
  );
};

export default SpecialtiesPage;
