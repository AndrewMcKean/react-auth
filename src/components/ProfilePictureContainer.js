import { useEffect, useState } from 'react';
import ProfilePicture from './ProfilePicture';

export default function ProfilePictureContainer(props) {
  const [profileImgSrc, setProfileImgSrc] = useState("");

  useEffect(() => {
    let profileImg = localStorage.getItem("profileImg");
    setProfileImgSrc(JSON.parse(profileImg));
  }, [])


  return (
    <ProfilePicture src={profileImgSrc} />
  )
}