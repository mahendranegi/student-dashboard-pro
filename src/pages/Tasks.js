import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { TaskStyled } from "../assets/styled";
import CustomTable from "../components/CustomTable";
import SearchInput from "../components/SearchInput";
import { tasks } from "../data/Tasks";
import Notfound from "../pages/NotFound";
import CustomModal from "../components/CustomModal";
import CustomDrawer from "../components/CustomDrawer";
function Tasks({ data }) {
  const [openTaskDrawer, setOpenTaskDrawer] = useState(false);
  const [val, setVal] = useState("");
  const [filter, setFilter] = useState(tasks);

  const taskColumns = [
    { field: "title", header: "Title" },
    { field: "category", header: "Category" },
    { field: "assignedTo", header: "Assigned To" },
    { field: "dueDate", header: "Due Date" },
    { field: "priority", header: "Priority" },
    { field: "status", header: "Status" },
  ];

  const handleOnchange = (e) => {
    const typeData = e.target.value.toLowerCase();
    setVal(typeData);
    let filterData = tasks.filter((task) => {
      return (
        task.title.toLowerCase().includes(typeData) ||
        task.category.toLowerCase().includes(typeData) ||
        task.assignedTo.toLowerCase().includes(typeData) ||
        task.priority.toLowerCase().includes(typeData) ||
        task.status.toLowerCase().includes(typeData)
      );
    });
    setFilter(filterData);
  };

  const handleDelete = (id) => {
    console.log(id, "ddddddddddd");
    let deleteRow = filter.filter((elem, index) => {
      return elem.id !== id;
    });
    console.log(deleteRow, "deleter");
    setFilter(deleteRow);

    console.log(id, data, "table row");
  };

  return (
    <TaskStyled>
      <div className="flexAlign">
        <h1>Tasks </h1>
        

          <CustomDrawer
  open={openTaskDrawer}
  onClose={() => setOpenTaskDrawer(false)}
  title="Create Task"
>
  <Box component="form">
            <TextField
              fullWidth
              label="Task Title"
              placeholder="Enter task title"
              sx={{ mb: 2 }}
            />

            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Category</InputLabel>

              <Select label="Category">
                <MenuItem value="Administration">Administration</MenuItem>
                <MenuItem value="Exam">Exam</MenuItem>
                <MenuItem value="Finance">Finance</MenuItem>
                <MenuItem value="Library">Library</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Assigned To</InputLabel>

              <Select label="Assigned To">
                <MenuItem value="Sneha Verma">Sneha Verma</MenuItem>
                <MenuItem value="Amit Kumar">Amit Kumar</MenuItem>
                <MenuItem value="Arun">Arun</MenuItem>
              </Select>
            </FormControl>

            <TextField
              fullWidth
              type="date"
              label="Due Date"
              InputLabelProps={{ shrink: true }}
              sx={{ mb: 2 }}
            />

            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Priority</InputLabel>

              <Select label="Priority">
                <MenuItem value="Low">Low</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="High">High</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Status</InputLabel>

              <Select label="Status">
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
              </Select>
            </FormControl>

            <TextField
              fullWidth
              multiline
              rows={4}
              label="Description"
              placeholder="Write task details..."
              sx={{ mb: 3 }}
            />

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                gap: 2,
              }}
            >
              <Button variant="outlined">Cancel</Button>

              <Button variant="contained">Create Task</Button>
            </Box>
          </Box>
</CustomDrawer>

        <Button variant="outlined" size="small" onClick={() => setOpenTaskDrawer(true)}>
          Create Task+
        </Button>
      </div>

      <section className="TableUi">
        <Box sx={{ mb: 4 }}>
          <SearchInput
            placeholder="Search by title, category, or assignee"
            value={val}
            onChange={(e) => handleOnchange(e)}
          />
        </Box>
        {filter.length > 0 ? (
          <CustomTable
            onDelete={handleDelete}
            columns={taskColumns}
            data={filter}
          />
        ) : (
          <Notfound
            title={val ? `No results found for "${val}"` : "No tasks available"}
            subtitle={
              val
                ? "Try searching with different keywords."
                : "All tasks have been deleted."
            }
          />
        )}
      </section>
    </TaskStyled>
  );
}

export default Tasks;
