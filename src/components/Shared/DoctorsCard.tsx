import { TTOPDoctorObjProps } from "@/types/pageProps";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

type TDoctorsCardProps = {
  doctorInfo: TTOPDoctorObjProps;
};
const DoctorsCard: React.FC<TDoctorsCardProps> = ({ doctorInfo }) => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#ffff",
        height: "320px",
        boxShadow: "1px 0px 17px 0px #0000001a",
        position: "relative",
        p: "20px",
      }}
    >
      <Box
        sx={{
          transition: "all 0.4s ease-in-out",
          "&:hover": {
            height: "360px",
            transform: "translateY(-90px)",
            "& .doctor-img": {
              transform: "scale(0.7)",
              boxShadow: "0px 0px 10px 4px #0000001a",
              transition: "all 0.4s ease-in-out",
            },
          },
        }}
      >
        <Box
          className="doctor-img"
          sx={{
            position: "relative",
            width: "60%",
            mx: "auto",
            aspectRatio: "4/3",
            overflow: "hidden",
            translateY: "-20px",
            transition: "all 0.4s",
            boxShadow: "0px 0px 20px 7px #0000001a",
            "& img": {
              p: 1,
              objectFit: "cover",
              borderRadius: "10px",
            },
          }}
        >
          <Image
            src={doctorInfo?.profilePhoto}
            alt={doctorInfo?.name}
            fill
            sizes="(max-width: 768px) 33vw, (max-width: 1200px) 50vw, 100vw"
          />
        </Box>
        <Box sx={{ mt: 4 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "60px",
              mt: 3,
            }}
          >
            <Button variant="btnTertiary">Get Appoinment</Button>
            <Button variant="btnTertiary">Get Appoinment</Button>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              sx={{
                color: "#000",
              }}
            >
              {doctorInfo?.name}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DoctorsCard;
