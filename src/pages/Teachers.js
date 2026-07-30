import React from 'react'
import { teachers } from '../data/Teachers';
import CustomTable from '../components/CustomTable';
import Box from '@mui/material/Box';

function Teachers() {
      const teachersColumns = [
  { field: "name", header: "Teacher Name" },
  { field: "subject", header: "Subject" },
  { field: "experience", header: "Experience" },
  { field: "phone", header: "Phone" },
  { field: "email", header: "Email" },
  { field: "salary", header: "Salary" },
  { field: "status", header: "Status" },
];
  return (
    <div>
       <Box sx={{ mb: 4 }}>
         <h1>Teachers </h1>
      </Box>
                <CustomTable columns={teachersColumns} data={teachers}/>
        
    </div>
  )
}

export default Teachers