import { Box, Typography, TextField, Button } from "@mui/material";
import { LoginStyle } from "../assets/styled";
import { useState, useContext } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { userContext } from "../context/ContextData";

function Login() {
  const navigate = useNavigate();

  const { login } = useContext(userContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [type, setType] = useState("password");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError(true);
      return;
    }

    setError(false);

    const success = login(email, password);

    if (success) {
      navigate("/dashboard");
    } else {
      alert("Invalid Email or Password");
    }
  };

  const handlePasswordShow = () => {
    setType((prev) => (prev === "password" ? "text" : "password"));
  };

  return (
    <LoginStyle>
      <form onSubmit={handleSubmit}>
        <div className="loginHead">
          <h1>Student Login</h1>
          <p>Hey, Enter your details to sign in to your account.</p>
        </div>

        <Box  sx={{ mb: 2 }}>
          <Typography>Email</Typography>

          <TextField
            fullWidth
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {error && email.trim() === "" && (
            <p className="error">Please enter email</p>
          )}
        </Box>

        <Box mt={3} className="posRelative">
          <Typography>Password</Typography>

          <TextField
            fullWidth
            type={type}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && password.trim() === "" && (
            <p className="error">Please enter password</p>
          )}

          {type === "password" ? (
            <RemoveRedEyeIcon
              className="eyeIcon"
              onClick={handlePasswordShow}
            />
          ) : (
            <VisibilityOffIcon
              className="eyeIcon"
              onClick={handlePasswordShow}
            />
          )}
        </Box>

        <Box mt={2} mb={4}>
          <p style={{ textAlign: "right" }}>
            <Button>Forgot Password?</Button>
          </p>
        </Box>

        <Button
          variant="contained"
          fullWidth
          type="submit"
          sx={{
            background: "#488df0",
            "&:hover": {
              background: "#488df0",
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