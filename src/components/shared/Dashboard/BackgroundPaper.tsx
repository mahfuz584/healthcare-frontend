import { Paper } from "@mui/material";
import React from "react";

const BackgroundPaper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: "#fff",
        p: 3,
        borderRadius: "5px",
        border: "1px solid #E0E0E0",
        boxShadow: "0px 6px 20px 20px rgba(0, 0, 0, 0.05)",
      }}
    >
      {children}
    </Paper>
  );
};

export default BackgroundPaper;
