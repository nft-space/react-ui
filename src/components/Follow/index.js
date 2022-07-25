import React, { useState } from "react";
import { StyledFollowButtonLarge, StyledFollowButtonSmall } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faUserPlus } from "@fortawesome/free-solid-svg-icons";

export function FollowButtonLarge({ followedByUser }) {
  const [active, setActive] = useState(followedByUser);
  return (
    <StyledFollowButtonLarge
      active={active}
      onClick={() => {
        setActive((active) => !active);
      }}
    >
      {active ? "Following" : "Follow"}
    </StyledFollowButtonLarge>
  );
}

export function FollowButtonSmall({ followedByUser }) {
  const [active, setActive] = useState(followedByUser);
  return (
    <StyledFollowButtonSmall
      active={active}
      onClick={(e) => {
        e.preventDefault();
        setActive((active) => !active);
      }}
    >
      {active ? (
        <FontAwesomeIcon icon={faCheck} />
      ) : (
        <FontAwesomeIcon icon={faUserPlus} />
      )}
    </StyledFollowButtonSmall>
  );
}
