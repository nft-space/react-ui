import React, { useState, useRef, useContext, useEffect } from "react";

// Import mui components
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";

// Import styled components
import { StyledRegistrationContainer } from "./styles";

// Import components
import { CoverPreview } from "./components/CoverPreview/index";
import { AvatarPreview } from "./components/AvatarPreview/index";
import { UploadDropdown } from "./components/UploadDropdown";

// Import Data Context
import { AvatarPreviewContext } from "./components/AvatarPreview/DataContext";
import { CoverPreviewContext } from "./components/CoverPreview/DataContext";
import { UserContext } from "../../helper/authentication/UserContext";

// Import utility functions
import { getBase64FromFile } from "../../helper/registration";
import { axiosPostCall } from "../../helper/util";

export const Registration = () => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = () => {
    setLoading(!loading);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    triggerSubmit();
  };
  // Set initial state for image preview
  const [avatarFile, setAvatarFile] = useState(null);
  const [coverFile, setCoverFile] = useState(null);

  // Define user context
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    // GET LOCAL USER INFORMATION
    let userStorage = localStorage.getItem("user");
    if (userStorage) {
      setUser(userStorage);
    }
    // GET LOCAL REGISTRATION INFORMATION
    let currentRegistrationDataJSON = localStorage.getItem("registrationData");
    if (!currentRegistrationDataJSON) return;
    let currentRegistrationData = JSON.parse(currentRegistrationDataJSON);
    usernameRef.current.value = currentRegistrationData["username"];
    emailRef.current.value = currentRegistrationData["email"];
    bioRef.current.value = currentRegistrationData["bio"];
    twitterLinkRef.current.value = currentRegistrationData["twitter"];
    instagramLinkRef.current.value = currentRegistrationData["instagram"];
    websiteLinkRef.current.value = currentRegistrationData["website"];
  }, []);

  // Define references to input boxes
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const bioRef = useRef(null);
  const twitterLinkRef = useRef(null);
  const instagramLinkRef = useRef(null);
  const websiteLinkRef = useRef(null);

  const saveRegistrationFormToLocalStorage = () => {
    let currentRegistrationData = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      bio: bioRef.current.value,
      twitter: twitterLinkRef.current.value,
      instagram: instagramLinkRef.current.value,
      website: websiteLinkRef.current.value,
      avatarSrc: avatarFile,
      coverSrc: coverFile,
    };
    localStorage.setItem(
      "registrationData",
      JSON.stringify(currentRegistrationData)
    );
  };

  // TRIGGER SUBMIT
  const triggerSubmit = () => {
    // Define filenames
    let profileImageFileName = avatarFile ? avatarFile[0].name : "";
    let backgroundImageFileName = coverFile ? coverFile[0].name : "";

    // Define post dictionary
    let registrationFormData = {
      user_name: usernameRef.current.value,
      email_address: emailRef.current.value,
      user_bio: bioRef.current.value,
      twitter_link: twitterLinkRef.current.value,
      instagram_link: instagramLinkRef.current.value,
      website_link: websiteLinkRef.current.value,
      profileImageFileName: profileImageFileName,
      backgroundImageFileName: backgroundImageFileName,
      profileImage64String: "",
      backgroundImage64String: "",
    };

    // Profile image file
    let profileImageFile = avatarFile ? avatarFile[0] : "";
    let profileImagePromise = new Promise((resolve) => {
      resolve(0);
    });
    if (profileImageFileName.length > 0)
      profileImagePromise = getBase64FromFile(
        profileImageFile,
        registrationFormData,
        "profileImage64String"
      );

    // Background image file
    let backgroundImageFile = coverFile ? coverFile[0] : "";
    let backgroundImagePromise = new Promise((resolve) => {
      resolve(0);
    });
    if (backgroundImageFileName.length > 0)
      backgroundImagePromise = getBase64FromFile(
        backgroundImageFile,
        registrationFormData,
        "backgroundImage64String"
      );

    // wait on the profile image file load
    profileImagePromise.then((result) => {
      // ... wait on the background image file load
      backgroundImagePromise.then((result) => {
        // ...and THEN post registration form data
        // Store all the info form for refresh page
        saveRegistrationFormToLocalStorage();
        let postData = {
          registrationFormData: JSON.stringify(registrationFormData),
          userPublicKey: user,
        };
        let postPath = "/submit-registration-form";
        axiosPostCall(postPath, postData).then((res) => {
          return (window.location.href = `/profile/${user}`);
        });
      });
    });
  };
  return (
    <AvatarPreviewContext.Provider value={{ avatarFile, setAvatarFile }}>
      <CoverPreviewContext.Provider value={{ coverFile, setCoverFile }}>
        <StyledRegistrationContainer>
          {/* Image preview */}
          <CoverPreview />
          <AvatarPreview />
          {/* Upload dropdown */}
          <UploadDropdown />
          {/* Input fields */}
          <TextField
            fullWidth
            label="Username *"
            variant="outlined"
            inputRef={usernameRef}
          />
          <TextField
            fullWidth
            label="Email *"
            variant="outlined"
            inputRef={emailRef}
          />
          <TextField
            fullWidth
            label="Bio *"
            multiline
            rows={4}
            inputProps={{ maxLength: 1000 }}
            inputRef={bioRef}
          />
          <TextField
            fullWidth
            label="Twitter"
            variant="outlined"
            inputRef={twitterLinkRef}
          />
          <TextField
            fullWidth
            label="Instagram"
            variant="outlined"
            inputRef={instagramLinkRef}
          />
          <TextField
            fullWidth
            label="Your Website"
            variant="outlined"
            inputRef={websiteLinkRef}
          />
          {/* Sumbit */}
          <LoadingButton
            loading={loading}
            variant="outlined"
            onClick={handleSubmit}
          >
            Submit
          </LoadingButton>
        </StyledRegistrationContainer>
      </CoverPreviewContext.Provider>
    </AvatarPreviewContext.Provider>
  );
};
