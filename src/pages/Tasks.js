import React from 'react'
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { TaskStyled } from "../assets/styled";
import CustomTable from '../components/CustomTable';
import SearchInput from '../components/SearchInput';
import { tasks } from '../data/Tasks';

function Tasks() {
    const taskColumns = [
  { field: "title", header: "Title" },
  { field: "category", header: "Category" },
  { field: "assignedTo", header: "Assigned To" },
  { field: "dueDate", header: "Due Date" },
  { field: "priority", header: "Priority" },
  { field: "status", header: "Status" },
];
  return (
    <TaskStyled>
        <div className='flexAlign'>
         <h1>Tasks </h1>
        <Button variant="outlined" size ="small">Create Task+</Button>
        </div>

        <section className='TableUi'>
            <Box sx={{ mb: 4 }}>
                <SearchInput placeholder="Enter Text here" />
            </Box>
 <CustomTable columns={taskColumns} data={tasks}/>
        </section>
       
        
    </TaskStyled>
  )
}

export default Tasks