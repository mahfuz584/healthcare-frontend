import { TDialogProps } from "@/types/common";
import { formDataPayload } from "@/utils/formDataPayload";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AppBar,
  Container,
  FormControl,
  FormHelperText,
  Grid2,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Skeleton,
  Slide,
  Stack,
  TextField,
  Toolbar,
} from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { TransitionProps } from "@mui/material/transitions";

import { MuiTelInput } from "mui-tel-input";
import React, { forwardRef, useEffect, useState } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import {
  useRetrieveApiQuery,
  useUpdateApiMutation,
} from "redux/api/genericEndPoints";
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

const DynamicUpdateFormModal: React.FC<TDialogProps> = ({
  open,
  handleClose,
  textTitle,
  formFields,
  schema,
  formData,
  patchEndpoint,
  retrieveEndpoint,
}) => {
  const defaultFieldValues = formFields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const { data: { data: retrivedData = {} } = {}, isLoading } =
    useRetrieveApiQuery(
      {
        url: retrieveEndpoint,
        id: open,
      },
      {
        skip: typeof open !== "string",
      }
    );

  const { control, handleSubmit, reset } = useForm({
    defaultValues: defaultFieldValues,
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (retrivedData && Object.keys(retrivedData).length > 0) {
      reset(retrivedData);
    }
  }, [retrivedData, reset]);

  //   const [file, setFile] = useState<File | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [updateApi] = useUpdateApiMutation();

  const onSubmit = async (values: FieldValues) => {
    const toastID = toast.loading("Saving your data, please wait...");
    const payloadData = formData ? formDataPayload(values) : values;

    try {
      const res = await updateApi({
        url: patchEndpoint,
        id: open,
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
    } catch (error: any) {
      toast.error(error.message || "Something went wrong", {
        id: toastID,
      });
    }
  };

  return (
    <Dialog
      fullScreen
      fullWidth
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <AppBar sx={{ position: "relative", mb: 2 }}>
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
      <DialogTitle
        sx={{
          px: 6.5,
        }}
        id="alert-dialog-title"
      >
        {textTitle}
      </DialogTitle>
      <DialogContent
        sx={{
          my: 5,

          p: "0 !important",
          overflowY: "visible",
        }}
      >
        <Container>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid2
              container
              justifyContent={"space-between"}
              sx={{ rowGap: 3 }}
            >
              {formFields?.map(
                (
                  { name, type, label, placeHolder, options, required },
                  idx
                ) => {
                  return (
                    <React.Fragment key={idx}>
                      {isLoading ? (
                        <Grid2
                          size={{
                            sm: 12,
                            md:
                              type === "text-area" || type === "img-file"
                                ? 12
                                : 5.9,
                          }}
                        >
                          <Skeleton
                            variant="text"
                            width="20%"
                            height={20}
                            animation="wave"
                          />

                          <Skeleton
                            variant="rounded"
                            width="100%"
                            height={
                              type === "text-area" || type === "img-file"
                                ? 100
                                : 40
                            }
                            animation="wave"
                          />
                        </Grid2>
                      ) : (
                        <Grid2
                          size={{
                            sm: 12,
                            md:
                              type === "text-area" || type === "img-file"
                                ? 12
                                : 5.9,
                          }}
                        >
                          <Controller
                            name={name as any}
                            control={control}
                            render={({ field, fieldState }) => {
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
                                    />
                                  ) : type === "text-area" ? (
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
                                  ) : type === "select" ? (
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
                                  ) : type === "tel" ? (
                                    <MuiTelInput
                                      required={required}
                                      {...field}
                                      fullWidth
                                      label={label}
                                      defaultCountry="BD"
                                      error={!!fieldState.error}
                                      helperText={fieldState.error?.message}
                                    />
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
                                                onClick={
                                                  handleClickShowPassword
                                                }
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
                      )}
                    </React.Fragment>
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
      </DialogContent>
    </Dialog>
  );
};

export default DynamicUpdateFormModal;
