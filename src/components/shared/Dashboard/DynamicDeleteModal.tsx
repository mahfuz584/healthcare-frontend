import { TDeleteModalProps } from "@/types/common";
import { Button, Modal, Stack, Typography } from "@mui/material";
import React from "react";
import { useDeleteApiMutation } from "redux/api/genericEndPoints";
import { toast } from "sonner";

const DynamicDeleteModal: React.FC<TDeleteModalProps> = ({
  openModal,
  setOpenModal,
  endpoint,
}) => {
  const [deleteApi] = useDeleteApiMutation();
  const handleDelete = async () => {
    const loadingToast = toast.loading("Deleting...");

    try {
      const res = await deleteApi({
        url: endpoint,
        id: openModal,
      }).unwrap();

      if (res.success) {
        toast.success(res.message, { id: loadingToast });
        setOpenModal(false);
      } else {
        toast.error(res.message, { id: loadingToast });
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while deleting", { id: loadingToast });
    }
  };
  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Stack
        justifyContent={"space-between"}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          height: 200,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 1,
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Do you want to delete this item?
        </Typography>
        <Stack
          direction="row"
          justifyContent={"end"}
          alignItems={"space-between"}
          spacing={2}
          sx={{ mt: 4 }}
        >
          <Button variant="removeBtn" onClick={handleDelete}>
            Delete
          </Button>
          <Button onClick={() => setOpenModal(false)} variant="actionBtn">
            Cancel
          </Button>
        </Stack>
      </Stack>
    </Modal>
  );
};

export default DynamicDeleteModal;
