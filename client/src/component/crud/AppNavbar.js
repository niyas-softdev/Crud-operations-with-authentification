import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';

function CollapsibleExample() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="/Home">Crud</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/GetApi">GetCards</Nav.Link>
        <Nav.Link href="/post">Post</Nav.Link>
        <Nav.Link href="/update">Update</Nav.Link>
     
      </Nav>
        <Nav className=' d-flex gap-3'>
          <Button variant='light' href='/login'>Login</Button>
          <Button  variant='light' href='/post'>Signup</Button>

        </Nav>
      
    </Container>
  </Navbar>
)}

export default CollapsibleExample;
