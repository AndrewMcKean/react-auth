import React, {useEffect, useState} from 'react';
import { Card, Form } from 'react-bootstrap';
import axios from "axios";
import './index.css';
import Resizer from 'react-image-file-resizer';

export default function PhotoAdd(props) {
  const [img, setImg] = useState("");
  const [uploadToLocal, setUploadToLocal] = useState(false);
    
    //Set up to programatically click "choose file"
    const inputFileRef = React.useRef();  
    const handleClick = (e) => {
      inputFileRef.current.click();
    }

  const addImageLocal = () => {
      
    /*localStorage set here */
    const photoMap = JSON.parse(localStorage.getItem("photoMap"));
    const photoMapSize = Object.keys(photoMap).length;
    const imageNum = "image" + photoMapSize;
    Object.assign(photoMap, {[imageNum] : img});
    localStorage.setItem("photoMap", JSON.stringify(photoMap));
    //props.updateState(img);
    
    //Open guard for addImageServer
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
    const base64 = await resizeFile(e.target.files[0]);
    setImg(base64);
    setUploadToLocal(false);
    addImageLocal();
  }

  useEffect(() => {
    
    const addImageServer = () =>  {
      if(uploadToLocal) {
        // get photoMap
        const photoMap = JSON.parse(localStorage.getItem("photoMap"));
        const email = JSON.parse(localStorage.getItem('email'));

        // set configurations
        const configuration = {
          method: "post",
          url: "https://challenge-auth-app.herokuapp.com/updatephotos",
          data: {
            email,
            photoMap,
          },
        }

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

  }, [uploadToLocal])

  return (
    <Card style={{width: '20rem', height: '15rem', background: 'rgba(218, 223, 225, 0.5)', borderStyle: 'solid', borderColor: '#fdfd96', borderWidth: '2px'}}>
    <Form.Control
      //className="d-flex align-items-center justify-content-center"
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

/* Note to ask about bug I can't fix sometimes localStorage just won't update - saves img as empty string */