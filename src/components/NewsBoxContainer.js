import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import NewsBox from './NewsBox';

export default function NewsBoxContainer() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [link, setLink] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    
    function getNews() {
      const CORS_PROXY = "https://api.rss2json.com/v1/api.json?rss_url=";
      const configuration = {
        method: "get",
        url: CORS_PROXY + "http://feeds.bbci.co.uk/news/rss.xml",
      };
  
      axios(configuration)
        .then((result) => {
          //set result.data items to state and pass to presentation component
          //set result.data items to localStorage so they an be accessed by extended news page
          //result.data.items thumbnails are empty so took the base BBC news image instead
          setImg(result.data.feed.image);
          localStorage.setItem("newsImg", result.data.feed.image);

          setTitle(result.data.items[0].title);
          localStorage.setItem("newsTitle", result.data.items[0].title);
          
          setDesc(result.data.items[0].description);
          localStorage.setItem("newsDesc", result.data.items[0].description);

          setLink(result.data.items[0].link);
          localStorage.setItem("newsLink", result.data.items[0].link);
        })
        .catch((error) => {
          error = new Error();
        })
      }

      getNews();
    
      }, [])

  return (
    <NewsBox cardTitle="News" title={title} desc={desc} link={link} img={img} />
  )
}