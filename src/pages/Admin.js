import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import { LoginStyle } from "../assets/styled";
function Admin() {
  return (
     <LoginStyle>
      <form className="adminForm">
        <h4
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "25px",
          }}
        >
          <ArrowBackIcon />
          Create Task
        </h4>

        {/* Task Title */}
        <Box sx={{ mb: 2 }}>
          <Typography sx={{ mb: 1, fontWeight: 500 }}>
            Task Title
          </Typography>

          <TextField
            fullWidth
            placeholder="Enter task title"
            variant="outlined"
            size="small"
          />
        </Box>

        {/* Description */}
        <Box sx={{ mb: 2 }}>
          <Typography sx={{ mb: 1, fontWeight: 500 }}>
            Description
          </Typography>

          <TextField
            fullWidth
            multiline
            rows={2}
            placeholder="Write task description..."
            variant="outlined"
          />
        </Box>

        {/* Due Date */}
        <Box sx={{ mb: 2 }}>
          <Typography sx={{ mb: 1, fontWeight: 500 }}>
            Due Date
          </Typography>

          <TextField
            fullWidth
            type="date"
            InputLabelProps={{ shrink: true }}
          />
        </Box>

        {/* Assign To */}
        <Box sx={{ mb: 2 }}>
          <Typography sx={{ mb: 1, fontWeight: 500 }}>
            Assign To
          </Typography>

          <TextField
            fullWidth
            placeholder="Enter assignee name"
            variant="outlined"
            size="small"
          />
        </Box>

        {/* Category */}
        <Box sx={{ mb: 4 }}>
          <Typography sx={{ mb: 1, fontWeight: 500 }}>
            Category
          </Typography>

          <TextField
            select
            fullWidth
            size="small"
            defaultValue=""
          >
            <MenuItem value="">Select Category</MenuItem>
            <MenuItem value="Development">Development</MenuItem>
            <MenuItem value="Design">Design</MenuItem>
            <MenuItem value="Testing">Testing</MenuItem>
            <MenuItem value="Bug Fix">Bug Fix</MenuItem>
            <MenuItem value="Research">Research</MenuItem>
          </TextField>
        </Box>

        {/* Button */}
        <Button
          variant="contained"
          fullWidth
          sx={{
            py: 1.5,
            borderRadius: "10px",
            textTransform: "none",
            fontSize: "16px",
            backgroundColor: "#488df0",
            "&:hover": {
              backgroundColor: "#357AE8",
            },
          }}
        >
          Create Task
        </Button>
      </form>
    </LoginStyle>
  )
}

export default Admin