import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { formatCurrency } from "../helpers/format";
import { Link } from "react-router-dom";

function NavbarApp() {
  const total = 25000;
  const token = true;

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container className="d-flex justify-content-between align-items-center">
        <Nav className="d-flex align-items-center gap-2">
          <Navbar.Brand as={Link} to="/">
            Pizzería Mamma Mia!
          </Navbar.Brand>

          <Link to="/">
            <Button className="btn-sm" variant="outline-light" href="#home">
              🍕Home
            </Button>
          </Link>

          {token ? (
            <>
              <Link to="/Profile">
                <Button
                  className="btn-sm"
                  variant="outline-light"
                  href="#profile"
                >
                  🔓Profile
                </Button>
              </Link>

              <Button className="btn-sm" variant="outline-light" href="#Logout">
                🔒Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/LoginPage">
                <Button
                  className="btn-sm"
                  variant="outline-light"
                  href="#Login"
                >
                  🔐Login
                </Button>
              </Link>
              <Link to="/RegisterPage">
                <Button
                  className="btn-sm"
                  variant="outline-light"
                  href="#register"
                >
                  🔐Register
                </Button>
              </Link>
            </>
          )}
        </Nav>

        {token && (
          <Link to="/Cart">
            <Button className="btn-sm" variant="outline-info" href="#total">
              🛒Total: {formatCurrency(total)}
            </Button>
          </Link>
        )}
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
