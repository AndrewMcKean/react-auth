import { Container } from "react-bootstrap";
import './index.css';

export default function SignUp() {

    return (
        <Container>
            <p className="signup">New to the challenge? <a href="/register" style={{color: 'white'}}>Sign up!</a></p>
        </Container>
    )
}