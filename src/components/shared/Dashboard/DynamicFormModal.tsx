import { TDialogProps } from "@/types/common";
import { formDataPayload } from "@/utils/formDataPayload";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AppBar,
  Container,
  Grid2,
  Slide,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef, useState } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { IoMdCloudDownload } from "react-icons/io";
import { useCreateApiMutation } from "redux/api/genericEndPoints";

import { toast } from "sonner";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DynamicFormModal: React.FC<TDialogProps> = ({
  open,
  handleClose,
  textTitle,
  formFields,
  schema,
  formData,
  endpoint,
}) => {
  const defaultFieldValues = formFields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      ...defaultFieldValues,
    },
    resolver: zodResolver(schema),
  });

  const [file, setFile] = useState<File | null>(null);

  const [createApi] = useCreateApiMutation();

  const onSubmit = async (values: FieldValues) => {
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
      sx={{
        "& .MuiPaper-root": {
          height: "auto",
          minHeight: "fit-content",
        },
        "& .MuiDialog-container": {
          height: "fit-content",
          position: "absolute",
          bottom: 0,
          width: "100%",
        },
      }}
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
            <Grid2 container justifyContent={"space-between"} rowGap={2}>
              {formFields?.map(
                ({ name, type, label, placeHolder, accept }, idx) => {
                  return (
                    <Grid2
                      key={idx}
                      size={{
                        sm: 12,
                        md: 5.9,
                      }}
                    >
                      <Controller
                        name={name as any}
                        control={control}
                        render={({ field, fieldState }) => {
                          // if (field) {
                          //   console.log(field);
                          // }
                          // if (fieldState) {
                          //   console.log(fieldState);
                          // }
                          return (
                            <>
                              {type === "text" ? (
                                <TextField
                                  {...field}
                                  label={label}
                                  placeholder={placeHolder}
                                  fullWidth
                                  size="small"
                                  error={!!fieldState.error}
                                  helperText={fieldState.error?.message}
                                />
                              ) : type === "file" ? (
                                <Button
                                  component="label"
                                  role={undefined}
                                  variant="contained"
                                  tabIndex={-1}
                                  sx={{
                                    width: "100%",
                                    height: "fit-content",
                                    position: "relative",
                                    py: "10px",
                                    borderRadius: "5px",
                                    color: "#fff",
                                    bgcolor: "#062a4d",

                                    "&:hover": {
                                      backgroundColor: "#062a4d",
                                      color: "#fff",
                                    },
                                  }}
                                >
                                  <Stack direction={"row"} gap={2}>
                                    <Stack
                                      direction="row"
                                      gap={1}
                                      alignItems="center"
                                    >
                                      <IoMdCloudDownload size={22} />
                                      Upload files
                                    </Stack>
                                    <Typography>
                                      {file ? file?.name : ""}
                                    </Typography>
                                  </Stack>
                                  <TextField
                                    sx={{
                                      "& .MuiFormHelperText-root": {
                                        position: "absolute",
                                        bottom: -44,
                                        left: -390,
                                      },
                                      "& .MuiInputBase-root": {
                                        display: "none",
                                      },
                                    }}
                                    {...field}
                                    type="file"
                                    slotProps={{
                                      htmlInput: {
                                        accept: accept,
                                      },
                                    }}
                                    // accept={accept}
                                    value={""}
                                    onChange={(e: any) => {
                                      field.onChange(e.target.files?.[0]);
                                      setFile(e.target.files?.[0]);
                                    }}
                                    error={!!fieldState.error}
                                    helperText={fieldState.error?.message}
                                  />
                                </Button>
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
      </DialogContent>
    </Dialog>
  );
};

export default DynamicFormModal;
