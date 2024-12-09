import { TTopDoctorsProps } from "@/types/pageProps";
import {
  Box,
  Container,
  Divider,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import DoctorsCard from "../Shared/DoctorsCard";

const TopDoctors = ({ topDoctors }: TTopDoctorsProps) => {
  return (
    <Box
      sx={{
        mt: 14,
        position: "relative",
      }}
    >
      <Box
        sx={{
          mb: 12,
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent={"center"}>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              borderRightWidth: "3px",
              borderColor: "text.blue",
            }}
          />
          <Typography
            className="top-doctors-title"
            variant="caption1"
            sx={{
              fontWeight: "bold",
              pl: 1,
            }}
          >
            Top Rated Doctor
          </Typography>
        </Stack>
      </Box>

      <Container>
        <Grid2
          container
          justifyContent={"center"}
          rowGap={7}
          columnGap={"14px"}
        >
          {topDoctors?.map((doctor, idx) => (
            <Grid2
              className="doctor-card"
              key={idx}
              size={{
                md: 2.9,
                sm: 12,
              }}
            >
              {/* <CustomCard doctorInfo={doctor} /> */}
              <DoctorsCard doctorInfo={doctor} />
            </Grid2>
          ))}
        </Grid2>
      </Container>
      <Box
        sx={{
          position: "absolute",

          top: "-15%",
          clipPath: "polygon(0 82%, 0 0, 100% 11%, 100% 89%)",
          bgcolor: "bg.bgGray",
          width: "99vw",
          height: "90vh",
          zIndex: -1,
        }}
      />
    </Box>
  );
};

export default TopDoctors;
