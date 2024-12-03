import { Box, Grid2 } from "@mui/material";

const RightPart = () => {
  return (
    <Grid2
      size={{
        xs: 12,
        md: 5.6,
      }}
    >
      <Box
        sx={{
          position: "relative",
          "& video": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            overflow: "hidden",
            borderRadius: "30px",
            zIndex: 1,
          },
        }}
      >
        <video controls src="/videos/hero.mp4"></video>
        <Box
          sx={{
            pb: 1,
            pl: 1,
            bgcolor: "white",
            width: "fit-content",
            position: "absolute",
            top: 0,
            right: 0,
            borderRadius: "0 0 0 15px",
          }}
        >
          <Box
            sx={{
              py: 1,
              px: 4,
              backgroundColor: "bg.tertiary",
              color: "white",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2,
              "& :hover": {
                boxShadow: "0 0 10px 0px #000",
              },
            }}
          >
            Watch Video
          </Box>
        </Box>
      </Box>
    </Grid2>
  );
};

export default RightPart;
