import { Button, Divider, Stack, TextField } from "@mui/material";
import React from "react";
type TActionProps = {
  btnText: string;
  handleOpenDialog: () => void;
  setSearchTerm?: React.Dispatch<React.SetStateAction<string>>;
  searchField?: boolean;
};

const QuickActionBar: React.FC<TActionProps> = ({
  btnText,
  handleOpenDialog,
  setSearchTerm,
  searchField,
}) => {
  return (
    <>
      <Stack direction="row" justifyContent={"space-between"}>
        <Button
          onClick={handleOpenDialog}
          variant="actionBtn"
          sx={{
            width: "fit-content",
          }}
        >
          {btnText}
        </Button>
        {searchField && (
          <TextField
            onChange={(e) => setSearchTerm && setSearchTerm(e.target.value)}
            size="small"
            id="outlined-basic"
            label="Search here"
            variant="outlined"
            sx={{
              width: "250px",
            }}
          />
        )}
      </Stack>
      <Divider sx={{ marginTop: 2 }} />
    </>
  );
};

export default QuickActionBar;
