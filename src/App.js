import Button from "@mui/material/Button";
import { BrowserRouter,Routes,Route } from "react-router-dom";

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
import { loginData } from "./auth/LoginData";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Layout from "./layout/Layout";
function App() {
const[data] = useState(loginData);
const[loginSuccess,setLoginSuccess] = useState(false);
  console.log(data,'jjjj')
  return (
    <BrowserRouter>
    <AppStyle>
      <Routes>
        <Route path="/" element={<Login loginSuccess={loginSuccess} setLoginSuccess={setLoginSuccess} />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/students" element={<Students />} /> */}
          {/* <Route path="/tasks" element={<Tasks />} /> */}
          {/* <Route path="/profile" element={<Profile />} /> */}
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
       {loginSuccess && <Dashboard />}
      
    {/* </div> */}
    
    </AppStyle>
    </BrowserRouter>
  );
}

export default App;
