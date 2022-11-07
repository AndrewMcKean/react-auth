import { Container } from "react-bootstrap";
import "./App.css";
import {Switch, Route} from "react-router-dom";
import Splash from "./components/Splash";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import FreeComponent from "./components/FreeComponent";
import Dashboard from "./components/Dashboard";
import ProtectedRoutes from "./ProtectedRoutes";


function App() {
  return (
    <Container>
      {/*Create routes here*/}
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/free" component={FreeComponent} />
        <ProtectedRoutes path="/dashboard" component={Dashboard} />
      </Switch>
    </Container>
  );
}

export default App;