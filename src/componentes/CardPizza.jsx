import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { formatCurrency } from "../helpers/format";
import { nanoid } from "nanoid";
import React from "react";

const CardPizza = ({
  desc = null, // para validar la descripcion, en home no se usa, en  profile si
  name,
  price,
  ingredients = [], // se deja array vacio por si no viene nada desde la vista
  img,
  isHome, // (true - false) para validar boton ver mas en home, en profile no se usa 
}) => {
  return (
    <Card border="warning" style={{ width: "25rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <hr className="border border-warning"/>
        <div className="d-flex justify-content-center fs-6">
          <Card.Text>Ingredientes</Card.Text>
        </div>
        <Card.Text className="d-flex justify-content-center gap-1 fs-6">
          🍕
          <ul
            className="d-flex gap-2"
            style={{ listStyleType: "none", padding: 0 }}
          >
            {ingredients.map((i) => (
              <li key={nanoid()}>{i}</li>
            ))}
          </ul>
        </Card.Text>
        <hr className="border border-warning" />
        {desc ? (
          <div>
            <Card.Text>{desc}</Card.Text>
          </div>
        ) : null}
        <div className="d-flex justify-content-center">
          <strong>Precio: ${formatCurrency(price)}</strong>
        </div>
        <div
          className={
            isHome
              ? "d-flex justify-content-between p-3"
              : "d-flex justify-content-center p-3"
          }
        >
          {isHome ? (
            <Button className="border" variant="light">
              Ver mas 👀
            </Button>
          ) : null}
          <Button variant="dark">Añadir 🛒</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
