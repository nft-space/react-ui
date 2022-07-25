import React, { useContext, useEffect } from "react";
import { StyledConnectButton } from "./styles";
import { TextWrapper } from "../../../pages/globalStyles.js";

// Import authentication methods
import { connectAlgoWallet } from "../../../helper/authentication/methods";

// Import data context
import { LoginModalContext } from "../../Modals/Login/DataContext";
import { SignatureContext } from "./DataContext";
import { UserContext } from "../../../helper/authentication/UserContext";

// Import utility functions
import { getShortenedAddressString } from "../../../helper/util";

export const ConnectButton = () => {
  const { setOpenLoginModalBool } = useContext(LoginModalContext);
  const { setSignatureContext } = useContext(SignatureContext);
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    let userStorage = localStorage.getItem("user");
    if (userStorage) {
      setUser(userStorage);
    }
  }, []);
  const handleConnectWallet = async (e) => {
    e.preventDefault();
    try {
      const connectResponse = await connectAlgoWallet();
      setSignatureContext(connectResponse);
      setOpenLoginModalBool(true);
    } catch (err) {
      console.error(err);
    }
  };
  const handleRedirect = () => {
    return (window.location.href = `/profile/${user}`);
  };
  return (
    <StyledConnectButton
      onClick={user ? handleRedirect : (e) => handleConnectWallet(e)}
    >
      <TextWrapper>
        {user ? getShortenedAddressString(user) : "Connect Wallet"}
      </TextWrapper>
    </StyledConnectButton>
  );
};
