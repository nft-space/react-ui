import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

// Import components
import { ProfileBio } from "./Bio";
import { ProfilePageGallery } from "./Gallery/index";
import { Loading } from "../../components/Loading";

// Import data context
import { ProfilePageContext } from "./Bio/DataContext";

// Import utility functions
import { axiosGetCall } from "../../helper/util";
import { propsFromProfilePage } from "../../helper/propsConverter";

// Get Data context
import { UserContext } from "../../helper/authentication/UserContext";

function Profile() {
  // Get profile address
  const { artistAddress } = useParams();

  // Set intial state of props
  const [profilePageProps, setProfilePageProps] = useState(null);
  const [loadingStatus, setLoadingStatus] = useState(true);

  // User context
  const { user } = useContext(UserContext);

  // Retrieve api info
  useEffect(() => {
    axiosGetCall(`/profile/${artistAddress}`, { user: user }).then((res) => {
      let formattedProfilePageObject = propsFromProfilePage(res.data);
      setProfilePageProps(formattedProfilePageObject);
      setLoadingStatus(false);
    });
  }, [user]);
  return (
    <>
      {loadingStatus && <Loading />}
      {profilePageProps && (
        <ProfilePageContext.Provider
          value={{ profilePageProps, setProfilePageProps }}
        >
          <ProfileBio />
          <ProfilePageGallery />
        </ProfilePageContext.Provider>
      )}
    </>
  );
}

export default Profile;
