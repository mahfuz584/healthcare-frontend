"use client";
import { formDataPayload } from "@/utils/formDataPayload";
import { signUpItems } from "@helper/data/registerFields";
import {
  Box,
  Button,
  Container,
  Grid2,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { formDataServerActions } from "services/actions";
import { toast } from "sonner";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      patient: {
        name: "",
        email: "",
        contactNumber: "",
        address: "",
      },
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    const data = formDataPayload(values);
    try {
      const res = await formDataServerActions("/user/create-patient", data);
      if (res.success) {
        reset();
        toast.success(res.message);
      } else {
        toast.error(res.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
    }
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
                }}
              >
                {signUpItems?.map(
                  ({ name, label, type, placeholder, multiline }, idx) => {
                    return (
                      <Grid2
                        key={idx}
                        size={{ xs: 12, md: type === "text-area" ? 12 : 5.9 }}
                      >
                        <Controller
                          name={name as any}
                          control={control}
                          render={({ field }) => {
                            return type === "tel" ? (
                              <MuiTelInput
                                {...field}
                                defaultCountry={"BD"}
                                fullWidth
                                label={label}
                              />
                            ) : type === "password" ? (
                              <OutlinedInput
                                endAdornment={
                                  <InputAdornment position="end">
                                    <IconButton
                                      aria-label={
                                        showPassword
                                          ? "hide the password"
                                          : "display the password"
                                      }
                                      onClick={handleClickShowPassword}
                                      edge="end"
                                    >
                                      {showPassword ? (
                                        <MdVisibilityOff />
                                      ) : (
                                        <MdVisibility />
                                      )}
                                    </IconButton>
                                  </InputAdornment>
                                }
                                {...field}
                                size="small"
                                required
                                fullWidth
                                label={label}
                                type={showPassword ? "text" : "password"}
                                placeholder={placeholder}
                              />
                            ) : (
                              <TextField
                                {...field}
                                size="small"
                                multiline={multiline}
                                rows={multiline ? 2 : 1}
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
                  }
                )}
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
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="end"
              gap={1}
              mt={2}
            >
              <Typography variant="body1" className="text-center">
                Already Have an account?
              </Typography>
              <Link href="/login">
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.semiBlue",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Sign In
                </Typography>
              </Link>
            </Stack>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default RegisterPage;
