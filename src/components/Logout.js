import { Button } from "react-bootstrap";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function Logout() {

  const logout = () => {
    // destroy the cookie
    cookies.remove("TOKEN", { path: "/"});
    // clear localStorage
    localStorage.clear();

    // Redirect to login
    window.location.href = "/";
  }

  return (
    <Button className="float-end" type="submit" variant="secondary" onClick={() => logout()}>Logout</Button>
  )
}