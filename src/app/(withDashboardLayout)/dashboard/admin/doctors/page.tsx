"use client";
import BackgroundPaper from "@/components/shared/Dashboard/BackgroundPaper";
import DynamicDataTable from "@/components/shared/Dashboard/DynamicDataTable";
import DynamicDeleteModal from "@/components/shared/Dashboard/DynamicDeleteModal";
import DynamicFullFormModal from "@/components/shared/Dashboard/DynamicFullFormModal";
import QuickActionBar from "@/components/shared/Dashboard/QuickActionBar";
import { stringAvatar } from "@/utils/stringToColor";
import { doctorsSchema } from "@helper/formSchema";
import { useDebounce } from "@hooks/useDebounce";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useListApiQuery } from "redux/api/genericEndPoints";

const DoctorPage = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const query: Record<string, any> = {};
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSeachTerm = useDebounce(searchTerm, 700);
  if (debouncedSeachTerm) {
    query["searchTerm"] = debouncedSeachTerm;
  }

  const { data: { data: doctorData = [] } = {}, isLoading } = useListApiQuery({
    url: "/doctor",
    query: query,
  });

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const columns: GridColDef[] = [
    {
      field: "",
      headerName: "ID",
      width: 100,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1,
    },
    {
      field: "doctor",
      headerName: "Doctor",
      width: 400,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => (
        <Stack direction="row" spacing={2} alignItems="center">
          <Box>
            {row?.profilePhoto ? (
              <Box
                sx={{
                  "& img": {
                    width: "60px",
                    height: "60px",
                    objectFit: "cover",
                    borderRadius: "5px",
                  },
                }}
              >
                <Image
                  src={row?.profilePhoto}
                  alt={row?.name}
                  width={1000}
                  height={1000}
                />
              </Box>
            ) : (
              <>
                <Avatar
                  {...stringAvatar(row?.name)}
                  style={{ borderRadius: 5 }}
                />
              </>
            )}
          </Box>
          <Box
            sx={{
              textAlign: "left",
              width: "270px",
            }}
          >
            <Typography variant="caption3">
              {row?.name}{" "}
              <Typography
                variant="caption5"
                sx={{
                  textTransform: "capitalize",
                }}
                component={"span"}
              >
                ({row?.qualification})
              </Typography>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 500,
              }}
            >
              {row?.currentWorkingPlace}
            </Typography>
            <Typography variant="caption4">{row?.designation}</Typography>
          </Box>
        </Stack>
      ),
    },
    {
      field: "contact",
      headerName: "Contact Info",
      flex: 1,
      headerAlign: "center",
      renderCell: ({ row }) => (
        <Box
          sx={{
            textAlign: "left",
            width: "250px",
          }}
        >
          <Typography variant="body1">{row?.email} </Typography>
          <Typography variant="body1">{row?.contactNumber}</Typography>
        </Box>
      ),
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => (
        <IconButton onClick={() => setOpenModal(row?.id)}>
          <FaTrash color="#062a4d" size={20} />
        </IconButton>
      ),
    },
  ];

  const formFields = [
    {
      name: "file",
      label: "Image",
      placeHolder: "Upload Image",
      type: "img-file",
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
      required: true,
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

  return (
    <BackgroundPaper>
      <QuickActionBar
        setSearchTerm={setSearchTerm}
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
      <DynamicDataTable
        columns={columns}
        rows={doctorData}
        isLoading={isLoading}
      />
      <DynamicDeleteModal
        endpoint="/doctor/soft"
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </BackgroundPaper>
  );
};

export default DoctorPage;
