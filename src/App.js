import Button from "@mui/material/Button";
import { BrowserRouter,Routes,Route, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// import {Header} from '../'
import Header from './components/Header';
import CustomCard from "./components/Card";
import StudentInfo from "./components/StudentInfo";
import Login from "./auth/Login";
import Container from '@mui/material/Container';
import Sidebar from "./components/Sidebar";
import { AppStyle } from "./assets/styled";
import Admin from "./pages/Admin";
import CustomTable from "./components/CustomTable";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Layout from "./layout/Layout";
import { userContext } from "./context/ContextData";
import Students from "./pages/Students";
import Tasks from "./pages/Tasks";
import Profile from "./layout/Profile";
import Teachers from "./pages/Teachers";
import Settings from "./pages/Settings";
import {AuthProvider} from "./context/ContextData"

function App() {
const storedUser = localStorage.getItem("user");
const user = storedUser ? JSON.parse(storedUser) : null;

const[open,setOpen] = useState(true);

const handleSideBarToggle = () =>{
  setOpen((prev)=> !prev)
}
  return (
    <AuthProvider>
    <BrowserRouter>
    <AppStyle>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={user  ? <Layout setOpen={setOpen} handleSideBarToggle={handleSideBarToggle} open= {open}  user={user}/> : <Navigate to="/" replace />}>
          <Route path="/dashboard" element={<Dashboard  user={user}/>} />
          <Route path="/students" element={<Students />} />
           <Route path="/teachers" element={<Teachers />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/profile" element={<Profile />} />
           <Route path="*" element={<NotFound />} />
            <Route path="/settings" element={<Settings />} />
        </Route>

       
{/* <Route path="*" element={<NotFound />} /> */}
{/* <Route path="/login" element={<Login />}/> */}
        
      </Routes>
{/* <div style={{display: 'flex', gap: '32px'}}>
<Sidebar />
<div className="rightPannel">
      <Header />
      <div className="scrollContent">
      <CustomCard />
      <StudentInfo />
      <CustomTable />
      </div>
      </div> */}
      {/* <Login loginSuccess={loginSuccess} setLoginSuccess={setLoginSuccess} data={data}/> */}
      

      
    {/* </div> */}
    
    </AppStyle>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
