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
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import CustomNotification from "../components/CustomNotification";
function Tasks({ data }) {
const [updatetask, setUpdatetask] = useState(tasks);
const [filter, setFilter] = useState(tasks);
const [notify, setNotify] = useState(false);
const [deletenotify, setDeletenotify] = useState(false);
const [task, setTask] = useState("");
const [category, setCategory] = useState("");
const [assigned, setAssigned] = useState("");
const [date, setDate] = useState("");
const [priority, setPriority] = useState("");
const [status, setStatus] = useState("");
const [des, setDes] = useState("");

  const [openTaskDrawer, setOpenTaskDrawer] = useState(false);
  const [val, setVal] = useState("");

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

    setDeletenotify(true);
    setTimeout(() => {
      setDeletenotify(false);
    }, 2000);
  };
//

const handleCreateTask = () =>{
  if(!task.trim() || !category.trim() || !assigned.trim() || !date.trim() || !priority.trim() || !status.trim() || !des.trim()){
    alert('Please fill the all field');
  }
  else{
  const newTask = {
    id: Date.now(),
    title: task,
    category,
    assignedTo: assigned,
    dueDate: date,
    priority,
    status,
    description: des,
  };
   const updatedTasks = [...updatetask, newTask];

  setUpdatetask(updatedTasks);
  setFilter(updatedTasks);
  setTask('');
  setCategory('');
  setAssigned('');
  setDate('');
  setPriority('');
  setStatus('');
  setDes('')
  setOpenTaskDrawer(false)
  setNotify(true);
  setTimeout(() => {
    setNotify(false);
  }, 2000);
  }
}
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
              value={task}
              onChange={(e)=>setTask(e.target.value)}
              label="Task Title"
              placeholder="Enter task title"
              sx={{ mb: 2 }}
            />

            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Category</InputLabel>

              <Select label="Category"  value={category}  onChange={(e)=>setCategory(e.target.value)}>
                <MenuItem value="Administration">Administration</MenuItem>
                <MenuItem value="Exam">Exam</MenuItem>
                <MenuItem value="Finance">Finance</MenuItem>
                <MenuItem value="Library">Library</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Assigned To</InputLabel>

              <Select label="Assigned To" value={assigned}  onChange={(e)=>setAssigned(e.target.value)}> 
                <MenuItem value="Sneha Verma">Sneha Verma</MenuItem>
                <MenuItem value="Amit Kumar">Amit Kumar</MenuItem>
                <MenuItem value="Arun">Arun</MenuItem>
              </Select>
            </FormControl>

            <TextField
              fullWidth
              value={date}
              onChange={(e)=>setDate(e.target.value)}
              type="date"
              label="Due Date"
              InputLabelProps={{ shrink: true }}
              sx={{ mb: 2 }}
            />

            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Priority</InputLabel>

              <Select label="Priority"  value={priority}  onChange={(e)=>setPriority(e.target.value)}>
                <MenuItem value="Low">Low</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="High">High</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Status</InputLabel>

              <Select label="Status" value={status} onChange={(e)=>setStatus(e.target.value)}>
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
              </Select>
            </FormControl>

            <TextField
              fullWidth
              multiline
              value={des}
              onChange={(e)=>setDes(e.target.value)}
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

              <Button variant="contained" onClick={handleCreateTask}>Create Task</Button>
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
       {notify && <CustomNotification title="New task is updated.." />}
       {deletenotify && <CustomNotification title="Task Deteted.." />}
    </TaskStyled>
  );
}

export default Tasks;
