import React, { useContext } from "react";

// Import MUI components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";

// Import data context
import { LoginModalContext } from "./DataContext";
import { SignatureContext } from "../../Buttons/Connect/DataContext";
import { UserContext } from "../../../helper/authentication/UserContext";

// Import authentication methods
import { verifySignature } from "../../../helper/authentication/methods";
import { faBorderNone } from "@fortawesome/free-solid-svg-icons";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  border: "none",
  outline: "none",
  p: 4,
  borderRadius: "2em",
};

export const LoginModal = () => {
  const { openLoginModalBool, setOpenLoginModalBool } = useContext(
    LoginModalContext
  );
  const { setUser } = useContext(UserContext);
  const { signatureContext } = useContext(SignatureContext);
  const handleClose = () => setOpenLoginModalBool(false);
  const triggerSignatureVerifiction = async () => {
    try {
      handleClose();
      const userAddress = await verifySignature(signatureContext.addresses);
      setUser(userAddress);
      localStorage.setItem("user", userAddress);
      localStorage.setItem("registrationData", "");
    } catch (err) {
      alert("failed to log in");
    }
  };
  return (
    <div>
      <Modal
        open={openLoginModalBool}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{
              margin: "auto",
              width: "max-content",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Please verify your signature
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Button
              variant="contained"
              color="success"
              onClick={triggerSignatureVerifiction}
              style={{
                margin: "auto",
                width: "max-content",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              VERIFY
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
