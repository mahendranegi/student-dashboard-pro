import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

function SimpleDialog({ open, onClose,handleDelete }) {
  return (
    <Dialog open={open} onClose={onClose}>
      {/* <DialogTitle>Task Actions</DialogTitle>

      <DialogContent>
        Select an action for this task.
      </DialogContent> */}

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button>Edit</Button>
        <Button color="error" onClick={handleDelete}>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default SimpleDialog;