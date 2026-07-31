import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { TaskStyled } from "../assets/styled";
import CustomTable from '../components/CustomTable';
import SearchInput from '../components/SearchInput';
import { tasks } from '../data/Tasks';

function Tasks() {
  const[val,setVal] =useState('hello');
   const[filter,setFilter] =useState(tasks)
    const taskColumns = [
  { field: "title", header: "Title" },
  { field: "category", header: "Category" },
  { field: "assignedTo", header: "Assigned To" },
  { field: "dueDate", header: "Due Date" },
  { field: "priority", header: "Priority" },
  { field: "status", header: "Status" },
];

const handleOnchange = (e) =>{
  const typeData = e.target.value.toLowerCase();
  
  let filterData = tasks.filter((task)=> {
    return  task.title.toLowerCase().includes(val) ||
    task.category.toLowerCase().includes(val) ||
    task.assignedTo.toLowerCase().includes(val) ||
    task.priority.toLowerCase().includes(val) ||
    task.status.toLowerCase().includes(val)
  })
console.log(filterData,'hhh')
  setFilter(filterData);
  // tasks.find(())
}
  return (
    <TaskStyled>
        <div className='flexAlign'>
         <h1>Tasks </h1>
        <Button variant="outlined" size ="small">Create Task+</Button>
        </div>

        <section className='TableUi'>
            <Box sx={{ mb: 4 }}>
                <SearchInput placeholder="Enter Text here 123" value={val} onChange={(e)=>handleOnchange(e)}/>
            </Box>
 <CustomTable columns={taskColumns} data={filter.length > 0 || val ? filter : tasks}/>
        </section>
       
        
    </TaskStyled>
  )
}

export default Tasks