import { Box, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { IoMdCloudDownload } from "react-icons/io";
type TFiledProps = {
  field: any;
  name: string;
};

const UploadImage: React.FC<TFiledProps> = ({ field, name }) => {
  const [preview, setPreview] = useState<string | null>(null);
  const getBase64 = (file: any): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const handlePreview = async (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      const base64 = await getBase64(file);
      setPreview(base64);
    }
  };

  return (
    <Button
      component="label"
      variant="contained"
      sx={{
        width: "120px",
        borderRadius: "5px",
        height: "120px",
        color: "#fff",
        bgcolor: "#062a4d",
        backgroundImage: preview ? `url(${preview})` : "none",
        backgroundSize: "cover",
        padding: "0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {preview ? (
        <>
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              "&:hover .hover-stack": {
                display: "flex",
              },
            }}
          >
            <Stack
              className="hover-stack"
              direction="column"
              alignItems="center"
              justifyContent="end"
              gap="1px"
              sx={{
                bgcolor: "rgba(0, 0, 0, 0.8)",
                width: "100%",
                // height: "30%",
                position: "absolute",
                bottom: 0,
                borderBottomLeftRadius: "5px",
                borderBottomRightRadius: "5px",
                py: "2px",
                display: "none",
              }}
            >
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "#fff",
                }}
              >
                Change Image
              </Typography>
              <IoMdCloudDownload size={22} color="#fff" />
            </Stack>
          </Box>
        </>
      ) : (
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          gap="2px"
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <Typography
            sx={{
              fontSize: "15px",
            }}
          >
            Upload Image
          </Typography>
          <IoMdCloudDownload size={20} />
        </Stack>
      )}
      <input
        style={{ display: "none" }}
        {...field}
        name={name}
        accept="image/*"
        type="file"
        sx={{ display: "none" }}
        value={""}
        onChange={(e: any) => {
          handlePreview(e);
          field.onChange(e.target.files?.[0]); // Update the form value
        }}
      />
    </Button>
  );
};

export default UploadImage;
