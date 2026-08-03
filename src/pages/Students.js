import React, { useState } from 'react'
import {students} from '../data/Students'
import CustomTable from '../components/CustomTable';
import Box from '@mui/material/Box';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { TaskStyled } from "../assets/styled";
import SearchInput from '../components/SearchInput';
import NotFound from './NotFound';
function Students() {
    const [studentData] = useState(students);
    const[filterStudent,setFilterStudent] = useState(students);
    console.log(filterStudent.length, 'RRRRR')
    const [student,setStudent] = useState("zsdfsdf");
    console.log(filterStudent,'student newwww');
    const studentColumns = [
  { field: "name", header: "Student Name" },
  { field: "rollNo", header: "Roll No" },
  { field: "class", header: "Class" },
  { field: "phone", header: "Phone" },
  { field: "attendance", header: "Attendance" },
  { field: "fees", header: "Fees" },
];

//filter student data

const filterDataStudent = (e) =>{
  let searchStudent = e.target.value.toLowerCase();
setStudent(searchStudent)
  let filerStudentData = students.filter((elem,index)=>{
    return elem.name.toLowerCase().includes(searchStudent) ||
    elem.email.toLowerCase().includes(searchStudent) ||
        elem.gender.toLowerCase().includes(searchStudent) ||
        elem.address.toLowerCase().includes(searchStudent) ||
        elem.phone.toLowerCase().includes(searchStudent)

  });

  console.log(filerStudentData,'GGGG')
  setFilterStudent(filerStudentData);
  // console.log(searchStudent,'HHHH')
}

const deleteStudentTask = (id) =>{
  let studentRow =  studentData.filter((elem)=>{
    return elem.id !== id;
  });

  console.log(studentRow,'Deteeeeeeeeeeee')
  setFilterStudent(studentRow)
}
  return (
     <TaskStyled>
            <Box sx={{ mb: 3 }}>
         <h1> Students </h1>
      </Box>
    
            <section className='TableUi'>
                <Box sx={{ mb: 4 }}>
                    <SearchInput placeholder="Enter Student name" value={student} onChange={(e)=> filterDataStudent(e)} />
                </Box>
                {filterStudent.length > 0 ? (<CustomTable onDelete={(id)=>deleteStudentTask(id)} columns={studentColumns} data={filterStudent}/>) : <NotFound title={student ? `No results found for "${student}"` : "No tasks available"}/>}
                
            </section>
           
            
        </TaskStyled>
  )
}

export default Students