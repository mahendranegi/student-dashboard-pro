import React, { useState } from 'react'
import {students} from '../data/Students'
import CustomTable from '../components/CustomTable';
import Box from '@mui/material/Box';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
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
    <div>
         <Box sx={{ mb: 4 }}>
         <h1><DragIndicatorIcon />Students </h1>
      </Box>
        <CustomTable columns={studentColumns} data={studentData}/>
    </div>
  )
}

export default Students