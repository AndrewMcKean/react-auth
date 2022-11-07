import { useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const token = cookies.get("TOKEN");

export default function Splash() {

    return (
        useEffect(() => {
            // set configurations for the API call here
            const configuration = {
              method: "get",
              url: "https://challenge-auth-app.herokuapp.com/dashboard",
              headers: {
                Authorization: `Bearer ${token}`,
              },
            };
        
            axios(configuration)
              .then((result) => {
                window.location.href="/dashboard"
              }, () => {
                window.location.href="/login"
              })
              .catch((error) => {
                error = new Error();
              })
          }, [])
    )
}