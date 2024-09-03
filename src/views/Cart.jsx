import React, { useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { formatCurrency } from "../helpers/format";


const Cart = () => {
  const [cart, setCart] = useState([]);

  const total = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const increaseQuantity = (id) => {
    const data = [...cart]; // estamos creando una copia de cart
    const index = data.findIndex((p) => p.id == id); // cuando index recorra la copia de cart y sean iguales los id
    const newQuantity = Number(data[index].quantity) + 1; // index de la copia  + 1 ,
    data[index].quantity = newQuantity; //será la nueva cantidad (newQuantity)
    setCart(data); // ahora el setCart está con la nueva data
    return;
  };

  const decreaseQuantity = (id) => {
    const data = [...cart]; // Creamos una copia del carrito
    const index = data.findIndex((p) => p.id == id); // Encontramos el índice del producto con el id dado

    const newQuantity = Number(data[index].quantity) - 1; // Reducimos la cantidad en 1

    if (newQuantity === 0) {
      data.splice(index, 1); // Si la cantidad es 0, eliminamos el producto del carrito
    } else {
      data[index].quantity = newQuantity; // Si la cantidad es mayor que 0, la actualizamos
    }

    setCart(data); // Actualizamos el carrito con la nueva data
  };

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center mt-5">
        <Card border="danger" style={{ width: "40rem" }}>
          <Card.Body className="d-flex flex-column justify-content-center align-items-center">
            <Card.Title className="text-center pb-3 pt-3">
              <strong>Carrito de compras</strong>
            </Card.Title>
            {cart.map((c) => (
              <Card className="mb-3" style={{ width: "540px" }} key={c.id}>
                <div className="row g-0 border border-warning rounded">
                  <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <Card.Img className="pt-4" src={c.img} />
                  </div>
                  <div className="col-md-8 pt-3">
                    <Card.Body>
                      <Card.Text className="text-center">{c.name}</Card.Text>
                      <Card.Text className="text-center">
                        {formatCurrency(c.price)}
                      </Card.Text>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex gap-3 align-items-center">
                          <Button
                            className="border"
                            variant="light"
                            onClick={() => decreaseQuantity(c.id)}
                          >
                            -
                          </Button>
                          <span>{c.quantity}</span>
                        </div>
                        <Button
                          className="border"
                          variant="light"
                          onClick={() => increaseQuantity(c.id)}
                        >
                          +
                        </Button>
                        <strong>Total:</strong> $
                        {formatCurrency(c.price * c.quantity)}
                      </div>
                    </Card.Body>
                  </div>
                </div>
              </Card>
            ))}
            <div className="pt-3 text-center">
              <h3>Total carrito: ${formatCurrency(total)}</h3>
              <Button variant="warning" className="mt-2">
                Pagar
              </Button>
            </div>
            <div className="pt-3 text-center">
              <Button variant="dark">Seguir comprando</Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};
export default Cart;
