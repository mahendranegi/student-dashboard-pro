import React, { useContext } from 'react'
import Card from "../components/Card"
import Box from '@mui/material/Box';
import CustomTable from '../components/CustomTable';
import { tasks } from '../data/Tasks';

function Dashboard({user}) {
    const taskColumns = [
  { field: "title", header: "Title" },
  { field: "category", header: "Category" },
  { field: "assignedTo", header: "Assigned To" },
  { field: "dueDate", header: "Due Date" },
  { field: "priority", header: "Priority" },
  { field: "status", header: "Status" },
];
  return (
    <dashBoardStyle>
      <Box sx={{ mb: 4 }}>
         <h1>Welcome, {user.name} </h1>
      </Box>
     <Box sx={{ mb: 4 }}>
      <Card />
      </Box>
      <CustomTable columns={taskColumns} data={tasks}/>
    </dashBoardStyle>
  )
}

export default Dashboard