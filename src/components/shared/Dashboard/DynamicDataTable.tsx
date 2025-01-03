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
        disableColumnMenu
        localeText={{
          noRowsLabel: "No data found",
        }}
        slotProps={{
          loadingOverlay: {
            variant: "skeleton",
          },
        }}
        getRowHeight={() => "auto"}
        sx={{
          mt: 5,
          [`& .MuiDataGrid-cell`]: {
            paddingTop: 1,
            paddingBottom: 1,
            lineHeight: "unset !important",
            maxHeight: "none !important",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            whiteSpace: "normal",
          },

          "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
            outline: "none !important",
          },
          "&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within": {
            outline: "none !important",
          },

          ...sx,
        }}
      />
    </>
  );
};

export default DynamicDataTable;
