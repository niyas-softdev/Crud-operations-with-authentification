import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/esm/Button";

function CollapsibleExample() {
  const userDataString = localStorage.getItem("userData");
  const userData = JSON.parse(userDataString);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    window.location.href = "/login";
  };
  return (
    <Navbar collapseOnSelect expand="sm" data-bs-theme="dark" bg="dark">
      <Container>
        <Navbar.Brand href="/Home">Crud</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/GetApi">GetCards</Nav.Link>
           
            <Nav.Link href="/update">Update</Nav.Link>
          </Nav>

          <Nav className=" d-flex gap-3">
            {userData?.id && (
              <div className=" d-flex gap-3">
                <p className=" text-white fs-6 m-0 fw-bold d-flex align-items-center  justify-content-center">
                  {userData?.name}
                </p>
                <img
                  src={userData?.avatar}
                  alt=""
                  width={40}
                  className="rounded-circle"
                />
              </div>
            )}
            {userData?.id ? (
              <Button variant="light" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <div className=" d-flex gap-3">
                <Button variant="light" href="/login">
                  Login
                </Button>
                <Button variant="light" href="/post">
                  Signup
                </Button>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
