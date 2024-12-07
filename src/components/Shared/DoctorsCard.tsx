import { TTOPDoctorObjProps } from "@/types/pageProps";
import { Box, Button, Rating, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { FaHospitalSymbol } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
type TDoctorsCardProps = {
  doctorInfo: TTOPDoctorObjProps;
};
const DoctorsCard: React.FC<TDoctorsCardProps> = ({ doctorInfo }) => {
  return (
    // <Box
    //   sx={{
    //     width: "100%",
    //     bgcolor: "#ffff",
    //     height: "320px",
    //     boxShadow: "1px 0px 17px 0px #0000001a",
    //     position: "relative",
    //     p: "20px",
    //   }}
    // >
    //   <Box
    //     sx={{
    //       transition: "all 0.4s ease-in-out",
    //       "&:hover": {
    //         height: "360px",
    //         transform: "translateY(-90px)",
    //         "& .doctor-img": {
    //           transform: "scale(0.7)",
    //           boxShadow: "0px 0px 10px 4px #0000001a",
    //           transition: "all 0.4s ease-in-out",
    //         },
    //       },
    //     }}
    //   >
    //     <Box
    //       className="doctor-img"
    //       sx={{
    //         position: "relative",
    //         width: "60%",
    //         mx: "auto",
    //         aspectRatio: "4/3",
    //         overflow: "hidden",
    //         translateY: "-20px",
    //         transition: "all 0.4s",
    //         boxShadow: "0px 0px 20px 7px #0000001a",
    //         "& img": {
    //           p: 1,
    //           objectFit: "cover",
    //           borderRadius: "10px",
    //         },
    //       }}
    //     >
    //       <Image
    //         src={doctorInfo?.profilePhoto}
    //         alt={doctorInfo?.name}
    //         fill
    //         sizes="(max-width: 768px) 33vw, (max-width: 1200px) 50vw, 100vw"
    //       />
    //     </Box>
    //     <Box sx={{ mt: 4 }}>
    //       <Box
    //         sx={{
    //           display: "flex",
    //           justifyContent: "space-between",
    //           gap: "60px",
    //           mt: 3,
    //         }}
    //       >
    //         <Button variant="btnTertiary">Get Appoinment</Button>
    //         <Button variant="btnTertiary">Get Appoinment</Button>
    //       </Box>
    //       <Box sx={{ mt: 2 }}>
    //         <Typography
    //           variant="h5"
    //           sx={{
    //             color: "#000",
    //           }}
    //         >
    //           {doctorInfo?.name}
    //         </Typography>
    //       </Box>
    //     </Box>
    //   </Box>
    // </Box>
    <Box
      sx={{
        height: "200px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          pt: 5,
          width: "100%",
          position: "relative",
          bgcolor: "#fff",
          height: "150px",
          transition: "all 0.4s ease-in-out",
          boxShadow: "1px 1px 20px 0px #0000001a",
          borderRadius: "10px",
          "&:hover": {
            height: "380px",
            "& .doctor-img": {
              width: "65%",
              aspectRatio: "4/3",
              boxShadow: "0px 0px 0px 6px #fff",
              transition: "all 0.4s ease-in-out",
            },
          },
          "& .doctor-content": {
            transform: "translateY(-70px)",
            px: 3,
            opacity: 0,
            transition: "all 0.4s ease-in-out",
          },
          "&:hover .doctor-content": {
            transform: "translateY(0)",
            opacity: 1,
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: -40,
          }}
        >
          <Box
            className="doctor-img"
            sx={{
              position: "relative",
              width: "40%",
              mx: "auto",
              transition: "all 0.4s ease-in-out",
              aspectRatio: "4/3",
              "& img": {
                objectFit: "cover",
                boxShadow: "0px 0px 12px 6px #0000001a",
                transition: "all 0.4s",
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              px: 2,
              mt: 4,
            }}
          >
            <Button variant="btnTertiary" sx={{ width: "130px" }}>
              View Profile
            </Button>
            <Button variant="btnTertiary">Get Appoinment</Button>
          </Box>
          <Box
            className="doctor-content"
            sx={{
              mt: "30px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <Typography variant="h5" sx={{}}>
              {doctorInfo?.name}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <IoCallSharp />
              <Typography variant="body1" sx={{}}>
                {doctorInfo?.contactNumber}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <FaLocationDot />
              <Typography variant="body1" sx={{}}>
                {doctorInfo?.address}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <FaHospitalSymbol />
              <Typography variant="body1" sx={{}}>
                {doctorInfo?.currentWorkingPlace}
              </Typography>
            </Box>
            <Box>
              <Rating
                name="read-only"
                value={doctorInfo?.averageRating}
                readOnly
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DoctorsCard;
