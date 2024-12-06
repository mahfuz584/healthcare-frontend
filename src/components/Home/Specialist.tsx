// "use client";
import { TSpecialistObjProps, TSpecialistProps } from "@/types/pageProps";
import { Box, Container, Divider, Stack, Typography } from "@mui/material";

import Image from "next/image";

const Specialist = async ({ specialistData }: TSpecialistProps) => {
  return (
    <Container
      sx={{
        mt: 12,
      }}
    >
      <Box>
        <Stack direction="row" alignItems="center">
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              borderRightWidth: "3px",
              borderColor: "text.blue",
            }}
          />
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              pl: 1,
              color: "text.blue",
            }}
          >
            Categories
          </Typography>
        </Stack>
        <Typography
          variant="caption1"
          sx={{
            fontWeight: "bold",
            pt: 2,
          }}
        >
          Explore Our Specialist
        </Typography>
      </Box>
      <Box sx={{ mt: 5 }}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
        >
          {specialistData?.map(
            ({ title, icon }: TSpecialistObjProps, idx: number) => {
              return (
                <Box key={idx}>
                  <Box
                    sx={{
                      p: 4,
                      bgcolor: "bg.aliceBlue",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 170,
                      borderRadius: 3,
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        width: 65,
                        aspectRatio: "1/1",
                        "& img": {
                          color: "red",
                          objectFit: "cover",
                          bgcolor: "white",
                          p: 2,
                          borderRadius: "100%",
                        },
                      }}
                    >
                      <Image src={icon} alt={title} fill />
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: "bold",
                        pt: 2,
                      }}
                    >
                      {title}
                    </Typography>
                  </Box>
                </Box>
              );
            }
          )}
        </Stack>
      </Box>
    </Container>
  );
};

export default Specialist;
