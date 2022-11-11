import React, {useEffect, useState} from 'react';
import { Card, Form } from 'react-bootstrap';
import axios from "axios";
import './index.css';
import Resizer from 'react-image-file-resizer';

export default function PhotoAdd(props) {
    const [uploadToLocal, setUploadToLocal] = useState(false);

    //Set up to programatically click "choose file"
    const inputFileRef = React.useRef();  
    const handleClick = (e) => {
      inputFileRef.current.click();
    }

  const addImageLocal = (image) => {
      
    /*localStorage set here */
    const photoMap = JSON.parse(localStorage.getItem("photoMap"));
    const photoMapSize = Object.keys(photoMap).length;
    const imageNum = "image" + photoMapSize;
    Object.assign(photoMap, {[imageNum] : image});
    localStorage.setItem("photoMap", JSON.stringify(photoMap));
    
    setUploadToLocal(true);
   }

  //Resize to 280*280 and convert to base64
  const resizeFile = (file) => {
    return new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        280,
        280,
        "PNG",
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });
  };
  

  const handleImage = async (e) => {
    await resizeFile(e.target.files[0])
    .then((result) => (
      addImageLocal(result)
    ))
  }

  useEffect(() => {
    
    const addImageServer = () =>  {
      if(uploadToLocal) {
        //Get photoMap
        const photoMap = JSON.parse(localStorage.getItem("photoMap"));
        const email = JSON.parse(localStorage.getItem('email'));

        //Set configurations
        const configuration = {
          method: "post",
          url: "https://challenge-auth-app.herokuapp.com/updatephotos",
          data: {
            email,
            photoMap,
          },
        }

        //Save photoMap to server
        axios(configuration)
          .then((result) => {
            console.log("Images saved successfully");
          })
          .catch((message, error) => {
            error = new Error();
          });
      }
    }

    addImageServer();

  }, [uploadToLocal]) //Added a boolean guard here as was having issues with async/await in the function cascade

  return (
    <Card style={{width: '20rem', height: '15rem', background: 'rgba(218, 223, 225, 0.5)', borderStyle: 'solid', borderColor: '#fdfd96', borderWidth: '2px'}}>
    <Form.Control
      type="file"
      ref={inputFileRef}
      name="image"
      style={{visibility: 'hidden'}}
      onChange={(e) => handleImage(e)}
    />
    <Card.Text
      className="text-center"
      style={{background: 'transparent', color: '#fdfd96', fontSize: '200%'}}
      onClick={(e) => handleClick(e.target.value)}
    >
      Add Picture
    </Card.Text> 
  </Card>
  )
}