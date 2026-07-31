import React, { useState } from 'react'
import {students} from '../data/Students'
import CustomTable from '../components/CustomTable';
import Box from '@mui/material/Box';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { TaskStyled } from "../assets/styled";
import SearchInput from '../components/SearchInput';
function Students() {
    const [studentData] = useState(students);
    console.log(studentData,'student')

    const studentColumns = [
  { field: "name", header: "Student Name" },
  { field: "rollNo", header: "Roll No" },
  { field: "class", header: "Class" },
  { field: "phone", header: "Phone" },
  { field: "attendance", header: "Attendance" },
  { field: "fees", header: "Fees" },
];
  return (
     <TaskStyled>
            <Box sx={{ mb: 4 }}>
         <h1><DragIndicatorIcon />Students </h1>
      </Box>
    
            <section className='TableUi'>
                <Box sx={{ mb: 4 }}>
                    <SearchInput placeholder="Enter Student name" />
                </Box>
     <CustomTable columns={studentColumns} data={studentData}/>
            </section>
           
            
        </TaskStyled>
  )
}

export default Students