import React, { useState, useEffect, useRef, useContext } from "react";

// Import styled components
import { StyledSaveIcon } from "./styles";

// Import global styled
import { Subtitle } from "../../../pages/globalStyles";

// Import utility methods
import { debounceRequests } from "../../../helper/util";
import { axiosPostCall } from "../../../helper/util";
import { connectAlgoWallet } from "../../../helper/authentication/methods";

// import user context
import { UserContext } from "../../../helper/authentication/UserContext";
import { LoginModalContext } from "../../Modals/Login/DataContext";
import { SignatureContext } from "../../Buttons/Connect/DataContext";

export const SaveButton = ({ id, nftSaveCount, isSavedByUser }) => {
  // Determine mount cycle
  const isMounted = useRef(false);

  // Open connection dialog if not-authorized
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

  // Set initial state
  const [active, setActive] = useState(isSavedByUser);
  const [saveCount, setSaveCount] = useState(0);
  // Updates on 'save count' status change
  useEffect(() => {
    setSaveCount(nftSaveCount);
  }, [nftSaveCount]);

  // Updates on 'save active' status change
  useEffect(() => {
    setActive(isSavedByUser);
  }, [isSavedByUser]);
  // Handle like click
  const handleLikeClick = (e) => {
    e.preventDefault();
    setActive((active) => !active);
  };

  // Handle like POST
  const postSave = debounceRequests((id, active) => {
    let bookmarkData = {
      nft_address: id,
      saved_by_user: active,
      user_address: user,
    };
    let postData = {
      bookmarkData: JSON.stringify(bookmarkData),
    };
    axiosPostCall("/submit-bookmark", postData).then((res) => {});
  });
  // Updates on 'save' status change
  useEffect(() => {
    if (isMounted.current) {
      setSaveCount((prev) => {
        return active ? prev + 1 : prev - 1;
      });
      postSave(id, active);
    } else {
      isMounted.current = true;
    }
  }, [active]);

  return (
    <>
      <StyledSaveIcon
        active={active}
        onClick={
          user ? (e) => handleLikeClick(e) : (e) => handleConnectWallet(e)
        }
      />
      <Subtitle>{saveCount}</Subtitle>
    </>
  );
};
