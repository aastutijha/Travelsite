import { useState } from 'react';
import { signInWithGoogle, logInWithEmailAndPassword } from 'firebase';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    await logInWithEmailAndPassword(email, password);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Row>
        <Col md={12}>
          <h4 className="mb-3">Login</h4>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Login
            </Button>
            <Button onClick={signInWithGoogle} variant="secondary" className="mt-3 ml-2">
              Login with Google
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
