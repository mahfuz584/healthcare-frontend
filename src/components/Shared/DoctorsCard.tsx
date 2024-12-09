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
    <Box
      sx={{
        height: "330px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "330px",
          border: "1px solid #0000001a",
          bgcolor: "white",
          borderRadius: "10px",
          position: "relative",
          transition: "all 0.4s ease",
          "&:hover": {
            height: "400px",
            "& .doctor-content": {
              transform: "translateY(-70px)",
              height: "270px",
            },
            "& .doctor-details": {
              opacity: 1,
            },
            "& .doctor-img": {
              width: "65%",
              aspectRatio: "4/3",
              mx: "auto",
              transform: "translateY(-70px)",
            },
          },
        }}
      >
        <Box>
          <Box>
            <Box
              className="doctor-img"
              sx={{
                position: "relative",
                width: "85%",
                aspectRatio: "4/3",
                mx: "auto",
                mt: 3,
                transform: "translateY(0)",
                transition: "all 0.4s ease",
                borderRadius: "10px",
                overflow: "hidden",
                "& img": {
                  objectFit: "cover",
                },
              }}
            >
              <Image
                src={doctorInfo?.profilePhoto}
                alt={doctorInfo?.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </Box>
          </Box>
          <Box
            className="doctor-content"
            sx={{
              height: "100px",
              overflow: "hidden",
              transition: "all 0.4s ease-in-out",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                mt: 4,
              }}
            >
              <Button variant="btnOutline" sx={{ width: "130px" }}>
                View Profile
              </Button>
              <Button variant="btnTertiary">Get Appoinment</Button>
            </Box>
            <Box
              className="doctor-details"
              sx={{
                mt: "30px",
                px: 3,
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                color: "text.textGray",
                opacity: 0,
                transition: "all 0.1s ease",
              }}
            >
              <Typography variant="h5">{doctorInfo?.name}</Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <IoCallSharp />
                <Typography variant="body1">
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
                <Typography variant="body1">{doctorInfo?.address}</Typography>
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
    </Box>
  );
};

export default DoctorsCard;
