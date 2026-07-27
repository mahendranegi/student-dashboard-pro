import { Box, Typography, TextField, Button } from "@mui/material";
import { LoginStyle } from "../assets/styled";

function Login() {
  return (
    <LoginStyle>
      <form>
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
          />
        </Box>
        <Box sx={{ mt: 4}}>
          <Typography sx={{ fontWeight: 500 }}>Password</Typography>

          <TextField
            fullWidth
            type="password"
            placeholder="Enter your password"
            variant="outlined"
          />
        </Box>
        <Box sx={{ mb: 4}}>
            <p style={{textAlign:'right'}}><Button>Forgot Password?</Button></p>
        </Box>
        
        <Button
          variant="contained"
          fullWidth
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
    </LoginStyle>
  );
}

export default Login;
