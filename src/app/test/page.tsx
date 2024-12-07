import { Box } from "@mui/material";

const page = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh",
      }}
    >
      <Box
        sx={{
          width: "200px",
          position: "relative",
          bgcolor: "red",
          height: "150px",
          transition: "all 0.4s ease-in-out",
          "&:hover": {
            height: "400px",
          },
        }}
      ></Box>
    </Box>
  );
};

export default page;
