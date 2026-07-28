import Button from "@mui/material/Button";
// import {Header} from '../'
import Header from './components/layout/Header';
import CustomCard from "./components/Card";
import StudentInfo from "./components/StudentInfo";
import Login from "./auth/Login";
import Container from '@mui/material/Container';
import Sidebar from "./components/layout/Sidebar";
import { AppStyle } from "./assets/styled";
import Admin from "./pages/Admin";
import CustomTable from "./components/CustomTable";
import { loginData } from "./auth/LoginData";
import { useState } from "react";
function App() {
const[data] = useState(loginData);
const[loginSuccess,setLoginSuccess] = useState(false);
  console.log(data,'jjjj')
  return (
    <AppStyle>
      
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
      <Login loginSuccess={loginSuccess} setLoginSuccess={setLoginSuccess} data={data}/>
       {loginSuccess && <Admin />}
    {/* </div> */}
    
    </AppStyle>
  );
}

export default App;
