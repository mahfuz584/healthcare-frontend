"use client";
import { signInItems } from "@helper/data/registerFields";
import {
  Box,
  Button,
  Container,
  Grid2,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";

const LoginPage = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          "& img": {
            objectFit: "cover",
            width: "100%",
            height: "100vh",
          },
        }}
      >
        <Image
          src="/images/register/regBg.jpg"
          alt="bg"
          width={1000}
          height={1000}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bgcolor: "rgb(0 0 0 / 40%)",
        }}
      />
      <Container
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid2
          container
          sx={{
            justifyContent: "center",
            minHeight: "100vh",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Grid2
            sx={{
              p: 5,
              boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
              borderRadius: 2,
              backgroundColor: "#fff",
            }}
            size={{
              xs: 8,
            }}
          >
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              component={Link}
              href="/"
              sx={{
                mt: 1,
                position: "relative",
                textDecoration: "none",
                width: "fit-content",
                mx: "auto",
              }}
            >
              <Image
                width={1000}
                height={1000}
                style={{
                  objectFit: "cover",
                  borderRadius: "100%",
                  width: "100px",
                  height: "100px",
                }}
                src="/images/brandlogo.png"
                alt="brand-logo"
                priority
              />
              <Typography
                variant="h4"
                sx={{
                  color: "primary.main",
                  pb: 2,
                }}
              >
                MEDIFAX
              </Typography>
            </Stack>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid2
                container
                justifyContent="space-between"
                sx={{
                  rowGap: 4,
                  width: "100%",
                }}
              >
                {signInItems?.map(({ name, label, type, placeholder }, idx) => {
                  return (
                    <Grid2 key={idx} size={{ xs: 12, md: 5.9 }}>
                      <Controller
                        name={name as any}
                        control={control}
                        render={({ field }) => {
                          return (
                            <TextField
                              {...field}
                              size="small"
                              required
                              fullWidth
                              label={label}
                              type={type}
                              placeholder={placeholder}
                            />
                          );
                        }}
                      />
                    </Grid2>
                  );
                })}
              </Grid2>
              <Button
                type="submit"
                sx={{
                  borderRadius: 1.5,
                  mt: 4,
                  width: "100%",
                  bgcolor: "bg.semiBlue",
                }}
              >
                Register
              </Button>
            </form>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
              }}
            >
              <Link href={"/forgot-password"}>
                <Typography
                  sx={{
                    width: "fit-content",
                    display: "inline-flex",
                    textAlign: "end",
                    pt: 3,
                    color: "text.textGray",
                    cursor: "pointer",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Forgot Password
                </Typography>
              </Link>
            </Box>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="end"
              gap={1}
              mt={2}
              color={"text.textGray"}
            >
              <Typography variant="body1" className="text-center">
                {"Don't Have an account?"}
              </Typography>
              <Link href="/register">
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.semiBlue",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Create Account
                </Typography>
              </Link>
            </Stack>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default LoginPage;
