import { TDialogProps } from "@/types/common";
import { formDataPayload } from "@/utils/formDataPayload";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AppBar,
  Button,
  Container,
  Dialog,
  DialogActions,
  FormControl,
  FormHelperText,
  Grid2,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Slide,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { MuiTelInput } from "mui-tel-input";
import React, { forwardRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useCreateApiMutation } from "redux/api/genericEndPoints";
import { toast } from "sonner";
import UploadImage from "../UplodImage";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const DynamicFullFormModal: React.FC<TDialogProps> = ({
  open,
  handleClose,
  textTitle,
  formFields,
  schema,
  formData,
  endpoint,
}) => {
  const [createApi] = useCreateApiMutation();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const defaultFieldValues = formFields?.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      ...defaultFieldValues,
    },
    resolver: zodResolver(schema),
  });
  const onSubmit = async (values: any) => {
    const toastID = toast.loading("Saving your data, please wait...");
    const payloadData = formData ? formDataPayload(values) : values;

    try {
      const res = await createApi({
        url: endpoint,
        contentType: formData ? "multipart/form-data" : "application/json",
        data: payloadData,
      }).unwrap();

      if (res.success) {
        handleClose();
        reset();
        toast.success(res.message || "Data saved successfully", {
          id: toastID,
        });
      } else {
        toast.error(res.message || "Something went wrong", {
          id: toastID,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: "relative", mb: 8 }}>
        <Container>
          <Toolbar disableGutters>
            <Stack
              direction="row"
              justifyContent="end"
              gap={4}
              alignItems="center"
              width="100%"
            >
              <Button
                variant="removeBtn"
                onClick={handleClose}
                sx={{ width: "100px" }}
              >
                Cancel
              </Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "91vh",
        }}
      >
        <Typography variant="h4" component={"p"} sx={{ pb: 5 }}>
          {textTitle}
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid2
            container
            justifyContent={"space-between"}
            sx={{
              rowGap: 3,
            }}
          >
            {formFields?.map(
              ({ name, type, label, placeHolder, options, required }, idx) => {
                return (
                  <Grid2
                    key={idx}
                    size={{
                      sm: 12,
                      md:
                        type === "text-area" || type === "img-file" ? 12 : 5.9,
                    }}
                  >
                    <Controller
                      name={name as any}
                      control={control}
                      render={({ field, fieldState }) => {
                        // if (field) {
                        //   console.log(field);
                        // }
                        if (fieldState) {
                          console.log(fieldState);
                        }
                        return (
                          <>
                            {type === "text" ||
                            type === "number" ||
                            type === "email" ? (
                              <TextField
                                required={required}
                                {...field}
                                label={label}
                                placeholder={placeHolder}
                                fullWidth
                                size="small"
                                type={type}
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                                onChange={(e) =>
                                  field.onChange(
                                    type === "number"
                                      ? parseInt(e.target.value)
                                      : e.target.value
                                  )
                                }
                              />
                            ) : type === "text-area" ? (
                              <>
                                <TextField
                                  {...field}
                                  required={required}
                                  size="small"
                                  multiline={true}
                                  rows={2}
                                  fullWidth
                                  label={label}
                                  type={type}
                                  placeholder={placeHolder}
                                  error={!!fieldState.error}
                                  helperText={fieldState.error?.message}
                                />
                              </>
                            ) : type === "select" ? (
                              <>
                                <FormControl size="small" fullWidth>
                                  <InputLabel id="demo-select-small-label">
                                    {label}
                                  </InputLabel>
                                  <Select
                                    required={required}
                                    {...field}
                                    sx={{ width: "100%" }}
                                    labelId="demo-select-small-label"
                                    id="demo-select-small"
                                    defaultValue=""
                                    label={label}
                                    error={!!fieldState.error}
                                  >
                                    {options?.map(
                                      (option: any, idx: number) => (
                                        <MenuItem
                                          key={idx}
                                          value={option.value}
                                        >
                                          {option.label}
                                        </MenuItem>
                                      )
                                    )}
                                  </Select>
                                  <FormHelperText sx={{ color: "#d32f2f" }}>
                                    {fieldState?.error?.message}
                                  </FormHelperText>
                                </FormControl>
                              </>
                            ) : type === "tel" ? (
                              <>
                                <MuiTelInput
                                  required={required}
                                  {...field}
                                  fullWidth
                                  value={field.value}
                                  label={label}
                                  defaultCountry="BD"
                                  error={!!fieldState.error}
                                  helperText={fieldState.error?.message}
                                />
                              </>
                            ) : type === "file" ? (
                              <UploadImage field={field} name={name} />
                            ) : type === "password" ? (
                              <TextField
                                required={required}
                                {...field}
                                InputProps={{
                                  endAdornment:
                                    type === "password" ? (
                                      <InputAdornment position="end">
                                        <IconButton
                                          onClick={handleClickShowPassword}
                                          edge="end"
                                        >
                                          {showPassword ? (
                                            <MdVisibility />
                                          ) : (
                                            <MdVisibilityOff />
                                          )}
                                        </IconButton>
                                      </InputAdornment>
                                    ) : null,
                                }}
                                size="small"
                                fullWidth
                                label={label}
                                type={showPassword ? "text" : "password"}
                                placeholder={placeHolder}
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                              />
                            ) : type === "img-file" ? (
                              <UploadImage field={field} name={name} />
                            ) : null}
                          </>
                        );
                      }}
                    />
                  </Grid2>
                );
              }
            )}
          </Grid2>
          <DialogActions sx={{ mt: 2 }}>
            <Button
              sx={{
                width: "100px",
              }}
              variant="acceptBtn"
              onClick={handleSubmit(onSubmit)}
              type="submit"
            >
              Save
            </Button>
          </DialogActions>
        </form>
      </Container>
    </Dialog>
  );
};

export default DynamicFullFormModal;
