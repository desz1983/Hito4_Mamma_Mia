import React from "react";
import { Container, Card, Button, CardBody } from "react-bootstrap";

const Profile = () => {
  return (
    <Container className="d-flex flex-column align-items-center mt-4">
      <Card border="warning" style={{ width: "40rem", height: "34rem" }}>
        <Card.Body className="d-flex flex-column justify-content-center align-items-center">
          <Card.Title className="text-center pb-3 pt-3">
            <strong>davidsalcedo1983@gmail.com</strong>
          </Card.Title>
          <Button
            className="border btn btn-dark"
            variant="outline-light"
            type="submit"
          >
            Cerrar sesión
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile;
