import React from 'react'
import { teachers } from '../data/Teachers';
import CustomTable from '../components/CustomTable';
import Box from '@mui/material/Box';
import { TaskStyled } from "../assets/styled";
import SearchInput from '../components/SearchInput';

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
    <TaskStyled>
                <Box sx={{ mb: 4 }}>
             <h1>Teachers </h1>
          </Box>
        
                <section className='TableUi'>
                    <Box sx={{ mb: 4 }}>
                        <SearchInput placeholder="Enter teacher name" />
                    </Box>
         <CustomTable columns={teachersColumns} data={teachers}/>
                </section>
               
                
            </TaskStyled>


  )
}

export default Teachers