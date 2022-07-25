import React, { useState, useContext, useRef } from "react";

// Import MUI components
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Import data context
import { AvatarPreviewContext } from "../AvatarPreview/DataContext";
import { CoverPreviewContext } from "../CoverPreview/DataContext";

export const UploadDropdown = () => {
  // Define data context
  const { setAvatarFile } = useContext(AvatarPreviewContext);
  const { setCoverFile } = useContext(CoverPreviewContext);

  // MUI defined script
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //   Create file upload references
  const avatarFileRef = useRef(null);
  const coverFileRef = useRef(null);

  //   Handle avatar selection
  const handleAvatarUploadClick = () => {
    handleClose();
    // Handle dialog open
    avatarFileRef.current.click();
  };

  //   Handle cover selection
  const handleCoverUploadClick = () => {
    handleClose();
    // Handle dialog open
    coverFileRef.current.click();
  };

  //   Handle Avatar file selection
  const handleAvatarFileSelected = (e) => {
    let files = e.target.files;
    setAvatarFile(files);
  };

  //   Handle cover file selection
  const handleCoverFileSelected = (e) => {
    let files = e.target.files;
    setCoverFile(files);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Upload
      </Button>
      <input
        hidden
        key="avatar"
        type="file"
        required
        style={{
          width: "0px",
          height: "0px",
          overflow: "hidden",
        }}
        accept="image/*"
        ref={avatarFileRef}
        onChange={handleAvatarFileSelected}
      />
      <input
        hidden
        key="cover"
        type="file"
        required
        style={{
          width: "0px",
          height: "0px",
          overflow: "hidden",
        }}
        accept="image/*"
        ref={coverFileRef}
        onChange={handleCoverFileSelected}
      />
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleAvatarUploadClick}>Profile Image</MenuItem>
        <MenuItem onClick={handleCoverUploadClick}>Background Image</MenuItem>
      </Menu>
    </div>
  );
};
