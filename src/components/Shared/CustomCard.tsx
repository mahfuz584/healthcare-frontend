import { TTOPDoctorObjProps } from "@/types/pageProps";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import React from "react";
type TDoctorsCardProps = {
  doctorInfo: TTOPDoctorObjProps;
};
const CustomCard: React.FC<TDoctorsCardProps> = ({ doctorInfo }) => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#ffff",
        p: "15px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        borderRadius: "10px",
        boxShadow: "1px 1px 20px 9px #0000001a",
      }}
    >
      <Box
        sx={{
          width: "100%",
          bgcolor: "red",
          borderRadius: "10px",
          position: "relative",
          "&::before": {
            content: "''",
            position: "absolute",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: "transparent",
            bottom: "0",
            right: "50%",
            boxShadow: "10px 10px 0px #ffff",
          },
          "&::after": {
            content: "''",
            position: "absolute",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: "transparent",
            bottom: "58px",
            right: 0,
            boxShadow: "10px 10px 0px #ffff",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            aspectRatio: "4/3",
            overflow: "hidden",
            border: "2px solid #000",
            "& img": {
              objectFit: "cover",
              borderRadius: "10px",
              border: "2px solid #000",
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
        <Box sx={{ position: "absolute", bottom: 5, left: 20 }}>
          <Button variant="btnTertiary">Get Appoinment</Button>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "120px",
          bgcolor: "#F2EFE5",
          borderRadius: "10px",
          position: "relative",
          borderTopRightRadius: "0px",
        }}
      >
        <Box
          sx={{
            width: "50%",
            height: "83px",
            bgcolor: "#F2EFE5",
            position: "absolute",
            top: "-83px",
            right: "0",
            borderTop: "10px solid #ffff",
            borderLeft: "10px solid #ffff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderTopLeftRadius: "25px",
            "&::before": {
              content: "''",
              position: "absolute",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: "transparent",
              top: 0,
              right: 0,
              boxShadow: "10px -10px 0px #ffff",
            },
            "&::after": {
              content: "''",
              position: "absolute",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: "transparent",
              bottom: 0,
              left: -20,
              boxShadow: "10px 10px 0px #F2EFE5",
            },
          }}
        >
          <Button variant="btnTertiary">Get Appoinment</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomCard;
