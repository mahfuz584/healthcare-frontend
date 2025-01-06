"use client";

import BackgroundPaper from "@/components/shared/Dashboard/BackgroundPaper";
import DynamicDataTable from "@/components/shared/Dashboard/DynamicDataTable";
import DynamicDeleteModal from "@/components/shared/Dashboard/DynamicDeleteModal";
import DynamicFormModal from "@/components/shared/Dashboard/DynamicFormModal";
import QuickActionBar from "@/components/shared/Dashboard/QuickActionBar";
import { scheduleSchema } from "@helper/formSchema";
import { Box, IconButton } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import dayjs from "dayjs";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useListApiQuery } from "redux/api/genericEndPoints";

const SchedulesPage = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { data: { data: shceduleData = [] } = {}, isLoading } = useListApiQuery(
    { url: "/schedule" }
  );
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const formFields = [
    {
      name: "startDate",
      label: "Start Date",
      placeHolder: "Enter Start Date",
      required: true,
      type: "date",
    },
    {
      name: "endDate",
      label: "End Date",
      placeHolder: "Enter End Date",
      required: true,
      type: "date",
    },
    {
      name: "startTime",
      label: "Start Time",
      placeHolder: "Enter Start Time",
      required: true,
      type: "time",
    },
    {
      name: "endTime",
      label: "End Time",
      placeHolder: "Enter End Time",
      required: true,
      type: "time",
    },
  ];
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
      field: "startDate",
      headerName: "Start Date",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => (
        <Box>{dayjs(row?.startDate).format("DD-MM-YYYY")}</Box>
      ),
    },
    {
      field: "endDate",
      headerName: "End Date",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => (
        <Box>{dayjs(row?.endDate).format("DD-MM-YYYY")}</Box>
      ),
    },
    {
      field: "startTime",
      headerName: "Start Time",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => (
        <Box>{dayjs(row?.startDate).format("hh:mm A")}</Box>
      ),
    },
    {
      field: "endTime",
      headerName: "End Time",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => (
        <Box>{dayjs(row?.endDate).format("hh:mm A")}</Box>
      ),
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
  return (
    <BackgroundPaper>
      <QuickActionBar
        btnText="Create Schedule"
        handleOpenDialog={handleOpenDialog}
        searchField={true}
      />
      <DynamicFormModal
        open={openDialog}
        handleClose={handleCloseDialog}
        textTitle="Create Schedule"
        formFields={formFields}
        schema={scheduleSchema}
        postEndpoint="/schedule"
      />
      <DynamicDataTable
        columns={columns}
        rows={shceduleData}
        isLoading={isLoading}
      />

      <DynamicDeleteModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        endpoint="/schedule"
      />
    </BackgroundPaper>
  );
};

export default SchedulesPage;
