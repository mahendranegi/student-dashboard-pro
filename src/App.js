import Button from "@mui/material/Button";
// import {Header} from '../'
import Header from './components/layout/Header';
import CustomCard from "./components/Card";
import StudentInfo from "./components/StudentInfo";
import Login from "./auth/Login";
import Container from '@mui/material/Container';
import Sidebar from "./components/layout/Sidebar";
function App() {
  return (
    <div className="App">
      
<div style={{display: 'flex', gap: '32px'}}>
<Sidebar />
<div style={{width: '100%'}}>
      <Header />
      <>
      <CustomCard />
      <StudentInfo />
      </>
      </div>
      {/* <Login /> */}
    </div>
    </div>
  );
}

export default App;
