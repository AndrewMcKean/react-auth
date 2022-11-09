import { Container } from "react-bootstrap";
import "./App.css";
import {Switch, Route} from "react-router-dom";
import Splash from "./components/Splash";
import LoginContainer from "./components/LoginContainer";
import RegisterContainer from "./components/RegisterContainer";
import FreeComponent from "./components/FreeComponent";
import Dashboard from "./components/Dashboard";
import NewsExtended from "./components/NewsExtended";
import PhotoGallery from "./components/PhotoGallery";
import ProtectedRoutes from "./ProtectedRoutes";


function App() {
  return (
    <Container>
      {/*Create routes here*/}
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/register" component={RegisterContainer} />
        <Route exact path="/free" component={FreeComponent} />
        <ProtectedRoutes path="/dashboard" component={Dashboard} />
        <ProtectedRoutes path="/news" component={NewsExtended} />
        <ProtectedRoutes path="/photos" component={PhotoGallery} />
      </Switch>
    </Container>
  );
}

export default App;