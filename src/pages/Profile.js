import React, { useContext, useState } from "react";
import { SettingStyle } from "../assets/styled";

import darkBg from "../assets/images/dark.jpg";
import light from "../assets/images/light.jpg";
import { Box, Typography, TextField, Button, MenuItem } from "@mui/material";
import MyImg from "../assets/images/profile.png";

import NotificationHead from "../components/NotificationHead";
import { userContext } from "../context/ContextData";
import CustomNotification from "../components/CustomNotification";
function Profile() {
  const [activeTab, setActiveTab] = useState(1);
  const [check, setCheck] = useState("light");
  const [notify, setNotify] = useState(false);
  // const[name,setName] = useState('')
  const { setTheam, theam, handleTheam, user, setUser } =
    useContext(userContext);
  const [name, setName] = useState(user?.name || "");
  const [imgProfile, setImgProfile] = useState(user?.image || "");
  const [newPassword, setNewPassword] = useState("");
  const [cNewPassword, setcNewPassword] = useState("");
  const [error, setError] = useState(false);
  const[confirmError,setConfirmError] = useState(false);
  const handleOne = () => {
    setCheck("check");
  };

  const handleTwo = () => {
    setCheck("");
  };
  const handleOnchange = (e) => {
    setName(e.target.value);
  };

  //Update the name value

  const handleUpdate = () => {
  if (!name.trim()) {
    setError("Please enter your username.");
    return;
  }

  setError("");

  const updatedUser = {
    ...user,
    name: name.trim(),
    image: imgProfile || user.image,
  };

  setUser(updatedUser);
  localStorage.setItem("user", JSON.stringify(updatedUser));
  setName("")
};

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setImgProfile(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleUpdatePass = () => {
    if(newPassword.trim() === '' || cNewPassword === ''){
      setConfirmError(true);
      return;
    }
    else{
      setConfirmError(false);
if (newPassword !== cNewPassword) {

      alert("Passwords do not match");
      setNewPassword("");
    setcNewPassword("");
      return;
    }
    const updatePass = {
      ...user,
      password: newPassword,
    };
    setUser(updatePass);
    localStorage.setItem("user", JSON.stringify(updatePass));
    setNotify(true);
    setTimeout(() => {
      setNotify(false);
    }, 1000);
    setNewPassword("");
    setcNewPassword("");
    }

    
  };
  return (
    <SettingStyle>
      <div className="profileSec1">
        <div className="flexBodyMain">
          <div className="profileNotify">
            <NotificationHead />

            <ul>
              <li
                className={activeTab === 1 ? "active" : ""}
                onClick={() => setActiveTab(1)}
              >
                Profile
              </li>
              <li
                className={activeTab === 2 ? "active" : ""}
                onClick={() => setActiveTab(2)}
              >
                Account
              </li>
              <li
                className={activeTab === 3 ? "active" : ""}
                onClick={() => setActiveTab(3)}
              >
                Appearance
              </li>
              <li
                className={activeTab === 4 ? "active" : ""}
                onClick={() => setActiveTab(4)}
              >
                Password
              </li>
            </ul>
          </div>

          <div className="rightPannel">
            {activeTab === 1 && (
              <div>
                <Box sx={{ mb: 3 }}>
                  <h1>Profile </h1>
                </Box>
                <div className="flexBody">
                  <img
                    src={imgProfile || user?.image}
                    alt="Profile"
                    style={{ minWidth: "100px", height: "100px" }}
                  />
                  <div>
                    <Button variant="outlined" component="label">
                      Upload Image
                      <input
                        hidden
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                      />
                    </Button>
                    {/* <input type="upload"/> */}
                    <span style={{ color: "#757575" }}>
                      Use Google account avatar
                    </span>
                  </div>
                </div>
                <Box sx={{ mb: 3, mt: 4 }}>
                  <Typography>Username</Typography>

                  <TextField
                    fullWidth
                    value={name}
                    onChange={(e) => handleOnchange(e)}
                  />
                  {error && <p style={{ color: "red",fontSize: '12px' }}>Please enter name</p>}

                  
                </Box>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={handleUpdate}
                  type="submit"
                  sx={{
                    background: "#488df0",
                    "&:hover": {
                      background: "#488df0",
                    },
                  }}
                >
                  Update Username
                </Button>
              </div>
            )}

            {activeTab === 2 && (
              <div>
                <Box sx={{ mb: 3 }}>
                  <h1>Account </h1>
                </Box>
                <h4>Email Address</h4>
                <span style={{ color: "#757575" }}>
                  Your current email address is {user?.email}
                </span>

                <Box sx={{ mb: 4, mt: 2 }}>
                  <Button variant="contained">Change email Address</Button>
                </Box>
                <hr />

                <Box sx={{ mb: 2, mt: 3 }}>
                  <h4>Delete Account</h4>
                </Box>
                <Button variant="contained" color="error">
                  Delete Account
                </Button>
              </div>
            )}

            {activeTab === 3 && (
              <div>
                <Box sx={{ mb: 3 }}>
                  <h1>Appearance </h1>
                </Box>

                <div className="theamDiv">
                  <span
                    onClick={() => {
                      setCheck("dark");
                      document
                        .querySelector(".commonLayoutSec")
                        .classList.add("darkBg");
                    }}
                    className={check === "dark" ? "active" : ""}
                  >
                    <img src={darkBg} />
                  </span>

                  <span
                    onClick={() => {
                      setCheck("light");
                      document
                        .querySelector(".darkBg")
                        .classList.remove("darkBg");
                    }}
                    className={check === "light" ? "active" : ""}
                  >
                    <img src={light} />
                  </span>
                </div>
              </div>
            )}
            {activeTab === 4 && (
              <div>
                <Box sx={{ mb: 1 }}>
                  <h1>Set Password </h1>
                </Box>
                <span style={{ color: "#757575" }}>
                  You can still sign in with Google or Apple after setting a
                  password.
                </span>
                {confirmError && <p className="errorMsg" style={{color: 'red',background: '#f6f6f6',padding: '4px'}}>Please Enter Both fields</p>}
                <Box sx={{ mb: 3, mt: 4 }}>
                  <Typography>New password</Typography>

                  <TextField
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    fullWidth
                    type="password"
                  />
                </Box>
                <Box sx={{ mb: 3, mt: 4 }}>
                  <Typography>Confirm new password</Typography>

                  <TextField
                    value={cNewPassword}
                    onChange={(e) => setcNewPassword(e.target.value)}
                    fullWidth
                    type="text"
                  />
                </Box>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={handleUpdatePass}
                  type="submit"
                  sx={{
                    background: "#488df0",
                    "&:hover": {
                      background: "#488df0",
                    },
                  }}
                >
                  Update Password
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      {notify && <CustomNotification title="Password now changed" />}
    </SettingStyle>
  );
}

export default Profile;
