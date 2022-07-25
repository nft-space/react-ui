import React, { useState, useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import FlourescentIcon from "@mui/icons-material/Flourescent";

// Import authentication methods
import { connectAlgoWallet } from "../../../../helper/authentication/methods";

// import data context
import { UserContext } from "../../../../helper/authentication/UserContext";
import { LoginModalContext } from "../../../Modals/Login/DataContext";
import { SignatureContext } from "../../../Buttons/Connect/DataContext";

export const NavDropdown = ({ handleLogout }) => {
  // For login
  const { setOpenLoginModalBool } = useContext(LoginModalContext);
  const { setSignatureContext } = useContext(SignatureContext);
  const handleConnectWallet = async () => {
    try {
      const connectResponse = await connectAlgoWallet();
      setSignatureContext(connectResponse);
      setOpenLoginModalBool(true);
    } catch (err) {
      console.error(err);
    }
  };
  // Define user context
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    let userStorage = localStorage.getItem("user");
    if (userStorage) {
      setUser(userStorage);
    }
  }, []);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box
        sx={{
          width: "40px",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            {user ? (
              <Avatar sx={{ width: 32, height: 32 }}> {user[0]}</Avatar>
            ) : (
              <Avatar />
            )}
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            width: "13vw",
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {user && (
          <a href={`/profile/${user}`}>
            <MenuItem>
              <Avatar sx={{ width: 32, height: 32 }}> {user[0]}</Avatar>
              Profile
            </MenuItem>
          </a>
        )}
        {user && <Divider />}
        <a href="/about">
          <MenuItem>
            <MenuBookOutlinedIcon
              fontSize="small"
              style={{ color: "#757575", marginRight: "0.8em" }}
            />
            Our Story
          </MenuItem>
        </a>
        <a href="/resources">
          <MenuItem>
            <FlourescentIcon
              fontSize="small"
              style={{ color: "#757575", marginRight: "0.8em" }}
            />
            Resources
          </MenuItem>
        </a>
        {!user && (
          <MenuItem onClick={handleConnectWallet}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Login
          </MenuItem>
        )}
        {user && (
          <a href="/registration">
            <MenuItem>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
          </a>
        )}
        {user && (
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        )}
      </Menu>
    </React.Fragment>
  );
};
