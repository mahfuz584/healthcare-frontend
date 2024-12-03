import { Box, Button, Grid2, Typography } from "@mui/material";
import Image from "next/image";

const LeftPart = () => {
  return (
    <Grid2
      size={{
        xs: 12,
        md: 6,
      }}
      sx={{
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          aspectRatio: "16/9",
          overflow: "hidden",
        }}
      >
        <Image
          src="/images/home/grid.svg"
          alt="grid-svg"
          fill
          sizes="max-width: 100% min-width: 100%"
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          maxWidth: {
            xs: "100%",
            md: "80%",
          },
        }}
      >
        <Typography variant="h3">
          Protect Your Health And Take Care Of Your Health
        </Typography>
        <Typography
          variant="body2"
          sx={{
            py: 4,
            maxWidth: {
              xs: "100%",
              md: "80%",
            },
          }}
        >
          Prioritize Your Well-Being and Discover the Path to a Balanced and
          Healthier Life
        </Typography>
        <Button variant="contained">Get Started</Button>
      </Box>
    </Grid2>
  );
};

export default LeftPart;
