import {
  footerNavigationLinks,
  footerOptionsContacts,
  quickLinks,
} from "@helper/footerOptions";
import { Box, Button, Grid2, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaSquarePinterest } from "react-icons/fa6";
const Footer = () => {
  return (
    <Grid2
      container
      sx={{
        mt: 15,
      }}
    >
      <Grid2
        size={{
          xs: 12,
          md: 4,
        }}
        sx={{
          bgcolor: "secondary.main",
          py: 4,
          color: "text.secondary",
        }}
      >
        <Box
          sx={{
            maxWidth: {
              xs: "100%",
              md: "80%",
            },
            margin: "auto",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "70%",
              aspectRatio: "4/3",
            }}
          >
            <Image
              src="/images/footer.png"
              alt="footer"
              fill
              sizes="max-width: 100% min-width: 100%"
              style={{
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </Box>
          <Box>
            <Stack
              alignItems="center"
              direction="row"
              sx={{
                py: 2,
              }}
            >
              <Image
                src="/images/brandlogo.png"
                alt="brand-logo"
                width={80}
                height={80}
              />
              <Typography
                variant="h4"
                sx={{
                  color: "#fff",
                  pb: 2,
                }}
              >
                MEDIFAX
              </Typography>
            </Stack>

            <Typography variant="body1" pb={2}>
              There are to popular Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Obcaecati, ratione.
            </Typography>
            <Typography variant="body1">
              <Typography component="span" fontWeight={500}>
                Hello to :
              </Typography>
              support@gmail.com
            </Typography>
            <Box pt={2}>
              <Typography variant="body1">Follow :</Typography>
              <Stack
                direction={"row"}
                spacing={2}
                sx={{
                  color: "#fff",
                  "& svg": { fontSize: "1.5rem" },
                  pt: 2,
                }}
              >
                <FaFacebook />
                <FaTwitter />
                <FaSquarePinterest />
                <FaInstagram />
              </Stack>
            </Box>
          </Box>
        </Box>
      </Grid2>
      <Grid2
        size={{
          xs: 12,
          md: 8,
        }}
        sx={{
          bgcolor: "primary.main",
          py: 4,
        }}
      >
        <Box
          sx={{
            maxWidth: {
              xs: "100%",
              md: "85%",
            },
            margin: "auto",
          }}
        >
          <Box
            sx={{
              py: 4,
            }}
          >
            <Typography variant="h4" sx={{ color: "#fff", pb: "20px" }}>
              We Always <br /> Ready For Your Health
            </Typography>
            <Button variant="btnSecondary">Get Appoinment</Button>
          </Box>
        </Box>
        <Stack
          direction={"row"}
          justifyContent={"space-around"}
          sx={{
            color: "text.secondary",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h6" sx={{ pb: 2 }}>
              Company
            </Typography>
            {footerNavigationLinks?.map(({ title, url }, idx) => {
              return (
                <Typography
                  component={Link}
                  href={url}
                  key={idx}
                  variant="body1"
                  sx={{
                    pb: 1,
                  }}
                >
                  {title}
                </Typography>
              );
            })}
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h6" sx={{ pb: 2 }}>
              Quick Links
            </Typography>
            {quickLinks?.map(({ title, url }, idx) => {
              return (
                <Typography
                  component={Link}
                  href={url}
                  key={idx}
                  variant="body1"
                  sx={{
                    pb: 1,
                  }}
                >
                  {title}
                </Typography>
              );
            })}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              maxWidth: {
                xs: "100%",
                md: "40%",
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                pb: 2,
              }}
            >
              Official Info
            </Typography>
            {footerOptionsContacts?.map(({ icon: Icon, location }, idx) => {
              return (
                <Stack
                  direction={"row"}
                  sx={{
                    columnGap: 2,
                    pb: 1,
                  }}
                  key={idx}
                >
                  <Box sx={{ pt: 1 }}>
                    <Icon size={20} />
                  </Box>
                  {location}
                </Stack>
              );
            })}
          </Box>
        </Stack>
      </Grid2>
    </Grid2>
  );
};

export default Footer;
