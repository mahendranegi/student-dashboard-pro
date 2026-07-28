import { Box, Typography, TextField, Button } from "@mui/material";
import { LoginStyle } from "../assets/styled";
import { useState } from "react";
import { loginData } from "./LoginData";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Admin from "../pages/Admin";

function Login({data,setLoginSuccess,loginSuccess}) {
   const[loginShow,setLoginShow] = useState(true);
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const[error,setError] = useState(false);
  const[type,setType] = useState("password");
  const handleSubmit = (e) => {
  e.preventDefault();

  if (email.trim() === "" || password.trim() === "") {
    setError(true);
    return;
  }

  setError(false);
  loginFunc()
  setEmail("");
  setPassword("");
};

const loginFunc = () => {

  const user = loginData.find((item)=>{
    return item.email === email && item.password.toString() === password
  })
  if (user) {
  localStorage.setItem("user", JSON.stringify(data));
  setLoginSuccess(true);
  setLoginShow(false)
} else {
  alert("Invalid Email or Password");
}
};

const handlePasswordShow = () =>{
  setType((prev)=> {
    return prev === 'password' ? 'text' : 'password';
  })
}
  return (
    <>
    {loginShow && <LoginStyle>
      <form onSubmit={handleSubmit}>
        <div className="loginHead">
          <h1>Student Login</h1>
          <p>Hey, Enter your details to get sign in to your account</p>
          <em></em>
        </div>
        <Box>
          <Typography sx={{ fontWeight: 500 }}>Email</Typography>

          <TextField
            fullWidth
            placeholder="Enter your email"
            variant="outlined"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
         {error && email.trim() === "" && (
  <p className="error">Please enter email</p>
)}
        </Box>
        <Box sx={{ mt: 4}} className="posRelative">
          <Typography sx={{ fontWeight: 500 }}>Password</Typography>

          <TextField
            fullWidth
            type={type}
            placeholder="Enter your password"
            variant="outlined"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          {error && password.trim() === "" && (
  <p className="error">Please enter password</p>
)}
{type === 'password' ? <RemoveRedEyeIcon className="eyeIcon"  onClick={handlePasswordShow}/> : <VisibilityOffIcon className="eyeIcon"  onClick={handlePasswordShow}/>}


        </Box>
        <Box sx={{ mb: 4}}>
            <p style={{textAlign:'right'}}><Button>Forgot Password?</Button></p>
        </Box>
        
        <Button
          variant="contained"
          fullWidth
          onClick={handleSubmit}
          sx={{
            backgroundColor: "#488df0",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#488df0",
            },
          }}
        >
          Login
        </Button>
      </form>
    </LoginStyle>}
    
   
    </>
  );
}

export default Login;
