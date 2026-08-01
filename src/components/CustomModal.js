import {
  Modal,
  Box,
  Fade,
  Backdrop,
  Typography,
  Button,TextField,
} from "@mui/material";

// import { Box, Typography, TextField, Button } from "@mui/material";

import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#fff",
  borderRadius: 2,
  boxShadow: 24,
  p: 3,
};

export default function CustomModal({open,onClose,title,children}) {
  
  return (
    <>
      

      <Modal
        open={open}
        onClose={onClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 300,
          },
        }}
      >
        <Fade in={open}>
          <form>
             <Box sx={style}>

                      <Typography>{title}</Typography>
            
                      <div>{children}</div>
                    </Box>
            </form>
        </Fade>
      </Modal>
    </>
  );
}