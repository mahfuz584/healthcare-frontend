"use client";
import BackgroundPaper from "@/components/shared/Dashboard/BackgroundPaper";
import DynamicDataTable from "@/components/shared/Dashboard/DynamicDataTable";
import DynamicDeleteModal from "@/components/shared/Dashboard/DynamicDeleteModal";
import DynamicFullFormModal from "@/components/shared/Dashboard/DynamicFullFormModal";
import QuickActionBar from "@/components/shared/Dashboard/QuickActionBar";
import DynamicUpdateFormModal from "@/components/shared/Dashboard/UpdateFormModal";
import { stringAvatar } from "@/utils/stringToColor";
import {
  doctorsSchema,
  postFormFields,
  updateDoctorSchema,
  updateFormFields,
} from "@helper/data/formFields/dahsboard/admin/doctor";
import { useDebounce } from "@hooks/useDebounce";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useListApiQuery } from "redux/api/genericEndPoints";

const DoctorPage = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const query: Record<string, any> = {};
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSeachTerm = useDebounce(searchTerm, 700);
  if (debouncedSeachTerm) {
    query["searchTerm"] = debouncedSeachTerm;
  }

  const { data: { data: doctorData = [] } = {}, isLoading = true } =
    useListApiQuery({
      url: "/doctor",
      query: query,
    });

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleCloseUpdateDialog = () => {
    setOpenUpdateDialog(false);
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
        <Stack direction={"row"} spacing={1}>
          <IconButton onClick={() => setOpenModal(row?.id)}>
            <FaTrash color="#062a4d" size={20} />
          </IconButton>
          <IconButton onClick={() => setOpenUpdateDialog(row?.id)}>
            <FaEdit color="#062a4d" size={20} />
          </IconButton>
        </Stack>
      ),
    },
  ];

  return (
    <BackgroundPaper>
      <QuickActionBar
        setSearchTerm={setSearchTerm}
        btnText="Create Doctor"
        handleOpenDialog={handleOpenDialog}
        searchField={true}
      />
      <DynamicFullFormModal
        open={openDialog}
        handleClose={handleCloseDialog}
        textTitle="Create Doctor"
        formFields={postFormFields}
        schema={doctorsSchema}
        formData={true}
        postEndpoint="/user/create-doctor"
      />
      <DynamicUpdateFormModal
        open={openUpdateDialog}
        handleClose={handleCloseUpdateDialog}
        textTitle="Update Doctor"
        formFields={updateFormFields}
        schema={updateDoctorSchema}
        retrieveEndpoint="/doctor"
        patchEndpoint="/doctor"
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
