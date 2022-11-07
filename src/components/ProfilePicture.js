import { Image } from 'react-bootstrap';
import profilePic from '../assets/profilepic.jpg';

export default function ProfilePicture() {

  return (
    <Image src={profilePic} thumbnail />
  )
}