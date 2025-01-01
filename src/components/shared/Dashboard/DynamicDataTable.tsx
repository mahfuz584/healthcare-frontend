import { TDataTableProps } from "@/types/common";
import { DataGrid } from "@mui/x-data-grid";
const DynamicDataTable: React.FC<TDataTableProps> = ({
  columns,
  isLoading,
  rows,
  sx,
}) => {
  return (
    <>
      <DataGrid
        loading={isLoading}
        rows={rows}
        columns={columns}
        hideFooterPagination
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnSorting
        disableAutosize
        sx={{
          mt: 6,
          "& .MuiDataGrid-cell": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
          "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
            outline: "none !important",
          },
          "&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within": {
            outline: "none !important",
          },
          // "& .MuiDataGrid-columnHeaders": {
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          // },
          ...sx,
        }}
      />
    </>
  );
};

export default DynamicDataTable;
