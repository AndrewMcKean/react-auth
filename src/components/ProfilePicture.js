import { Image } from 'react-bootstrap';

export default function ProfilePicture(props) {

  return (
    <Image src={props.src} thumbnail style={{maxHeight: '70%'}} />
  )
}