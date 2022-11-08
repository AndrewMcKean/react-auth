import { useEffect, useState } from 'react';
import ProfilePicture from './ProfilePicture';

export default function ProfilePictureContainer(props) {
  const [profileImgSrc, setProfileImgSrc] = useState("");

  useEffect(() => {
    const photoMap = localStorage.getItem("photoMap");
    const profileImg = JSON.parse(photoMap);
    setProfileImgSrc(profileImg.profileImg);
    console.log(profileImg.profileImg);
  }, [])


  return (
    <ProfilePicture src={profileImgSrc} />
  )
}