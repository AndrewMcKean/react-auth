import { Container, Col, Row } from "react-bootstrap";
import "./App.css";
import {Switch, Route} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import FreeComponent from "./components/FreeComponent";
import Dashboard from "./components/Dashboard";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h1>Dev Challenge</h1>

          <section id="navigation">
            <a href="/">Home</a>
            <a href="/free">Free Component</a>
            <a href="/dashboard">Auth Component</a>
          </section>
        </Col>
      </Row>

      {/*Create routes here*/}
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/free" component={FreeComponent} />
        <ProtectedRoutes path="/dashboard" component={Dashboard} />
      </Switch>
    </Container>
  );
}

export default App;
