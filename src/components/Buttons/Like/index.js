import React, { useState, useEffect, useRef, useContext } from "react";

// Import styled components
import { StyledLikeIcon } from "./styles";

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

export const LikeButton = ({ id, nftLikeCount, isLikedByUser }) => {
  // Determine mount cycle
  const isMounted = useRef(false);
  // Set initial state
  const [active, setActive] = useState(isLikedByUser);
  const [likeCount, setLikeCount] = useState(nftLikeCount);

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

  // Handle like click
  const handleSaveClick = (e) => {
    e.preventDefault();
    setActive((active) => !active);
  };

  // Handle like POST
  const postLike = debounceRequests((id, active) => {
    let likeData = {
      nft_address: id,
      liked_by_user: active,
      user_address: user,
    };
    let postData = {
      likeData: JSON.stringify(likeData),
    };
    axiosPostCall("/submit-like", postData).then((res) => {});
  });

  // Updates on 'like' status change
  useEffect(() => {
    if (isMounted.current) {
      setLikeCount((prev) => {
        return active ? prev + 1 : prev - 1;
      });
      postLike(id, active);
    } else {
      isMounted.current = true;
    }
  }, [active]);

  // Updates on 'like count' status change
  useEffect(() => {
    setLikeCount(nftLikeCount);
  }, [nftLikeCount]);

  // Updates on 'like active' status change
  useEffect(() => {
    setActive(isLikedByUser);
  }, [isLikedByUser]);

  return (
    <>
      <StyledLikeIcon
        active={active}
        onClick={
          user ? (e) => handleSaveClick(e) : (e) => handleConnectWallet(e)
        }
      />
      <Subtitle>{likeCount}</Subtitle>
    </>
  );
};
