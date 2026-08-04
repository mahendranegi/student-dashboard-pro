import React, { useState } from "react";
import { teachers } from "../data/Teachers";
import CustomTable from "../components/CustomTable";
import { TaskStyled } from "../assets/styled";
import SearchInput from "../components/SearchInput";
import NotFound from "./NotFound";
import CustomDrawer from "../components/CustomDrawer";
import {
  Box,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import CustomNotification from "../components/CustomNotification";
function Teachers() {
const [notify, setNotify] = useState(false)
  const [teacher, setTeacher] = useState("");
  const [teacherFilter, setTeacherFilter] = useState(teachers);
  const [teacherData, setTeacherData] = useState(teachers);
  const [open, setOpen] = useState(false);
  const [tName, setTName] = useState("");
  const [subject, setSubject] = useState("");
  const [experience, setExperience] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [status, setStatus] = useState("");

const [selectedTeacher, setSelectedTeacher] = useState(null);
  const searchTeacherData = (e) => {
    let value = e.target.value.toLowerCase();
    setTeacher(value);
    let filterTeacherData = teachers.filter((item) => {
      return item.name.toLowerCase().includes(value);
    });
    setTeacherFilter(filterTeacherData);
  };
  const teachersColumns = [
    { field: "name", header: "Teacher Name" },
    { field: "subject", header: "Subject" },
    { field: "experience", header: "Experience" },
    { field: "phone", header: "Phone" },
    { field: "email", header: "Email" },
    { field: "salary", header: "Salary" },
    { field: "status", header: "Status" },
  ];

  // Delete row Functionality
  const deleteTeacherRow = (id) => {
    const deleteRow = teacherData.filter((item) => {
      return item.id !== id;
    });

    setTeacherData(deleteRow);
    setTeacherFilter(deleteRow);
  };

  //Edit Functionality
  const editTeacherRow = (id) => {
    setOpen(true);

    let editRowData = teacherData.find((elem)=>{
      return elem.id === id;
    });
    if (!editRowData) return;
    setSelectedTeacher(editRowData)
    setTName(editRowData?.name);
    setSubject(editRowData?.subject);
    setExperience(editRowData?.experience);
    setPhone(editRowData?.phone);
    setEmail(editRowData?.email);
    setSalary(editRowData?.salary);
    setStatus(editRowData?.status);
    // console.log(editRowData,'Hello India')
  };


  //save data

  const handleSaveEditDetails = () =>{
if(!selectedTeacher) return;
    const updateTeacher = teacherData.map((item)=>{
      if(item.id === selectedTeacher.id){
        return {
          ...item,
          name: tName,
          subject,
          experience,
          phone,
          email,
          salary,
          status
        }
      }
      return item
    });
    setTeacherData(updateTeacher);
    setTeacherFilter(updateTeacher);
    setOpen(false);
    setNotify(true);

    setTimeout(() => {
      setNotify(false)
    }, 2000);
  }
  return (
    <TaskStyled>
      <Box sx={{ mb: 4 }}>
        <h1>Teachers </h1>
      </Box>

      <section className="TableUi">
        <Box sx={{ mb: 4 }}>
          <SearchInput
            placeholder="Enter teacher name"
            value={teacher}
            onChange={(e) => searchTeacherData(e)}
          />
        </Box>
        {teacherFilter.length > 0 ? (
          <CustomTable
            onDelete={(e) => deleteTeacherRow(e)}
            onEdit={(e) => editTeacherRow(e)}
            columns={teachersColumns}
            data={teacherFilter}
          />
        ) : (
          <NotFound
            title={
              teacher.trim()
                ? `No teacher found for "${teacher}"`
                : "No teachers available"
            }
          />
        )}
      </section>
      <CustomDrawer
        open={open}
        onClose={() => setOpen(false)}
        title="Edit Teacher Data"
      >
        <Box component="form">
          <TextField
            fullWidth
            value={tName}
            onChange={(e) => setTName(e.target.value)}
            label="Teacher Name"
            placeholder="Enter Teacher Name"
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            label="Subject"
            placeholder="Enter Subject"
            sx={{ mb: 2 }}
          />

          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Experience</InputLabel>

            <Select
              label="Experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            >
              <MenuItem value="8 Years">8 Years</MenuItem>
              <MenuItem value="5 Years">5 Years</MenuItem>
              <MenuItem value="3 Years">3 Years</MenuItem>
            </Select>
          </FormControl>

          <TextField
            fullWidth
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            label="Phone"
            placeholder="Enter Phone no."
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Enter Email"
            sx={{ mb: 2 }}
          />

          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Salary</InputLabel>

            <Select
              label="Salary"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            >
              <MenuItem value="65000">65000</MenuItem>
              <MenuItem value="70000">70000</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Status</InputLabel>

            <Select
              label="Status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Offline">Offline</MenuItem>
            </Select>
          </FormControl>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 2,
            }}
          >
            <Button variant="outlined" onClick={() => setOpen(false)}>
              Cancel
            </Button>

            <Button variant="contained" onClick={handleSaveEditDetails}>Save</Button>
          </Box>
        </Box>
      </CustomDrawer>
      {notify && <CustomNotification title="Teacher data updated" />}
    </TaskStyled>
  );
}

export default Teachers;
