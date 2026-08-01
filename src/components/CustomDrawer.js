import { Drawer, Box, Typography } from "@mui/material";

export default function CustomDrawer({
  open,
  onClose,
  title,
  children,
  width = 480,
}) {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
    >
      <Box sx={{ width, p: 3 }}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          {title}
        </Typography>

        {children}
      </Box>
    </Drawer>
  );
}