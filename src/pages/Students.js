import React, { useState } from 'react'
import {
  Box,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import {students} from '../data/Students'
import CustomTable from '../components/CustomTable';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { StudenStyle, TaskStyled } from "../assets/styled";
import SearchInput from '../components/SearchInput';
import NotFound from './NotFound';
import CustomDrawer from "../components/CustomDrawer";
import CustomNotification from '../components/CustomNotification';

function Students() {
  const [notify, setNotify] = useState(false)
const [studentData, setStudentData] = useState(students);
const[filterStudent,setFilterStudent] = useState(students);
const [student,setStudent] = useState("");
const [open, setOpen] = useState(false);
const [selectedStudent, setSelectedStudent] = useState(null);
const [sName, setSName] = useState("");
const [rollNo, setRollNo] = useState("");
const [className, setClassName] = useState("");
const [phone, setPhone] = useState("");
const [attendance, setAttendance] = useState("");
const [fees, setFees] = useState("");
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
 if (!searchStudent) return;
  let filerStudentData = studentData.filter((elem,index)=>{
    return elem.name.toLowerCase().includes(searchStudent) ||
    elem.email.toLowerCase().includes(searchStudent)

  });

  setFilterStudent(filerStudentData);
}

const deleteStudentTask = (id) =>{
  let studentRow =  studentData.filter((elem)=>{
    return elem.id !== id;
  });

  setStudentData(studentRow)
  const updatedFilter = filterStudent.filter(
    (student) => student.id !== id
  );

  setFilterStudent(updatedFilter);
}

const editStudent = (id) =>{
  const student = studentData.find((item)=> item.id === id);
if (!student) return;
setSelectedStudent(student);
  setSName(student?.name);
  setRollNo(student?.rollNo);
  setClassName(student?.class);
  setPhone(student?.phone);
  setAttendance(student?.attendance);
  setFees(student?.fees);
  setOpen(true)
}

const handleSaveStudent = () => {
  if (!selectedStudent) return;

  const updatedStudents = studentData.map((item) => {
    if (item.id === selectedStudent.id) {
      return {
        ...item,
        name: sName,
        rollNo,
        class: className,
        phone,
        attendance,
        fees,
      }; 
    }

    return item;
  });

  setStudentData(updatedStudents);
  setFilterStudent(updatedStudents);
  setOpen(false);
  setNotify(true);
  setTimeout(() => {
    setNotify(false);
  }, 2000);
};
  return (
     <TaskStyled>
            <Box sx={{ mb: 3 }}>
         <h1> Students </h1>
      </Box>
    
            <section className='TableUi'>
                <Box sx={{ mb: 4 }}>
                    <SearchInput placeholder="Enter Student name" value={student} onChange={(e)=> filterDataStudent(e)} />
                </Box>
                {filterStudent.length > 0 ? (<CustomTable onEdit={(id)=>editStudent(id)} onDelete={(id)=>deleteStudentTask(id)} columns={studentColumns} data={filterStudent}/>) : <NotFound title={student ? `No results found for "${student}"` : "No tasks available"}/>}
                
            </section>
           <CustomDrawer
                     open={open}
                    onClose={() => setOpen(false)}
                     title="Edit Student data"
                   > 
                      <Box component="form">
                        {console.log(students,'Drawer Data')}
                       <TextField
                         fullWidth
                         value={sName}
                         onChange={(e)=> setSName(e.target.value)}
                         label="Student Name"
                         placeholder="Enter Student Name"
                         sx={{ mb: 2 }}
                       />
           
                        <TextField
                         fullWidth
                          value={rollNo}
                          onChange={(e)=> setRollNo(e.target.value)}
                         label="Roll no"
                         placeholder="Enter Roll no"
                         sx={{ mb: 2 }}
                       />

                        <FormControl fullWidth sx={{ mb: 2 }}>
                         <InputLabel>Class</InputLabel>
           
                         <Select label="Class" value={className}  onChange={(e)=> setClassName(e.target.value)}>
                           <MenuItem value="10-A">10-A</MenuItem>
                           <MenuItem value="9-B">9-B</MenuItem>
                           <MenuItem value="8-A">8-A</MenuItem>
                           <MenuItem value="7-B">7-B</MenuItem>
                           <MenuItem value="6-A">6-A</MenuItem>
                           <MenuItem value="12-B">12-B</MenuItem>
                         </Select>
                       </FormControl>

                       <TextField
                         fullWidth
                         value={phone}
                         onChange={(e)=> setPhone(e.target.value)}
                         label="Phone"
                         placeholder="Enter Phone no."
                         sx={{ mb: 2 }}
                       />
                        <TextField
                         fullWidth
                         label="Attendance %"
                         value={attendance}
                         onChange={(e)=> setAttendance(e.target.value)}
                         type='number'
                         placeholder="Enter Attendance"
                         sx={{ mb: 2 }}
                       />
                        
                       
           
                       <FormControl fullWidth sx={{ mb: 2 }}>
                         <InputLabel>Fees</InputLabel>
           
                         <Select label="Priority" value={fees} onChange={(e)=> setFees(e.target.value)}>
                           <MenuItem value="Paid">Paid</MenuItem>
                           <MenuItem value="Pending">Pending</MenuItem>
                         </Select>
                       </FormControl>
           
           
                       <Box
                         sx={{
                           display: "flex",
                           justifyContent: "flex-end",
                           gap: 2,
                         }}
                       >
                         <Button variant="outlined" onClick={()=> setOpen(false)}>Cancel</Button>
           
                         <Button variant="contained" onClick={handleSaveStudent}>Save</Button>
                       </Box>
                     </Box>
           </CustomDrawer>
            {notify && <CustomNotification title="Student data updated" />}
        </TaskStyled>
  )
}

export default Students