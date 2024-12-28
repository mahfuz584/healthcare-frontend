import { formDataPayload } from "@/utils/formDataPayload";
import { zodResolver } from "@hookform/resolvers/zod";
import { Grid2, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { MuiFileInput } from "mui-file-input";
import { useState } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { IoIosAttach, IoIosCloseCircleOutline } from "react-icons/io";
import { useCreateApiMutation } from "redux/api/genericEndPoints";
import { toast } from "sonner";
type TDialogPRops = {
  open: boolean;
  handleClose: () => void;
  textTitle: string;
  formFields: any[];
  schema: any;
  formData?: boolean;
  endpoint: string;
};

const DynamicFormModal: React.FC<TDialogPRops> = ({
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

  const [file, setFile] = useState(null);
  const [createApi] = useCreateApiMutation();

  const handleChange = (newFile: any) => {
    setFile(newFile);
  };

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
      maxWidth="md"
      fullWidth
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{textTitle}</DialogTitle>
      <DialogContent
        sx={{
          mt: 2,
          pt: "0 !important",
          overflowY: "visible",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid2 container justifyContent={"space-between"}>
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
                              <MuiFileInput
                                sx={{
                                  cursor: "pointer",
                                }}
                                {...field}
                                fullWidth
                                placeholder={placeHolder}
                                value={file}
                                label={label}
                                onChange={(newFile) => {
                                  field.onChange(newFile);
                                  handleChange(newFile);
                                }}
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                                InputProps={{
                                  inputProps: {
                                    accept: accept,
                                  },
                                  startAdornment: (
                                    <IoIosAttach size={22} color="#080f58" />
                                  ),
                                }}
                                clearIconButtonProps={{
                                  title: "Remove",
                                  children: (
                                    <IoIosCloseCircleOutline
                                      size={22}
                                      color="#080f58"
                                    />
                                  ),
                                }}
                              />
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
              variant="actionBtn"
              onClick={handleSubmit(onSubmit)}
              type="submit"
            >
              Save
            </Button>
            <Button
              sx={{
                width: "100px",
              }}
              variant="actionBtn"
              onClick={handleClose}
            >
              Cancel
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DynamicFormModal;
