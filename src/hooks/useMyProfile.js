import { useState, useEffect } from "react";
import { myProfile as profilesMock } from "../assets/mocks/myProfile";

const useMyProfile = () => {
  const [myProfile, setMyProfile] = useState([]);

  useEffect(() => {
    setMyProfile(profilesMock);
  }, [myProfile]);

  return { myProfile, setMyProfile };
};

export default useMyProfile;