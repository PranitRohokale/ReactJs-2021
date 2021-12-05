import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import { Container, Row, Col } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import BuyPage from "./Components/BuyPage";
import Cart from "./Components/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => {
    const isItemAlready = cartItems.findIndex(function (eachItem) {
      return eachItem.id === item.id;
    });

    if (isItemAlready !== -1)
      return toast("Product Already in exits in Cart", {
        type: "error",
      });

    setCartItems([...cartItems, item]);
    console.log(cartItems);
  };

  const removeItem = (itemId) => {
    setCartItems(cartItems.filter((eachItem) => eachItem.id !== itemId));
    return toast("Products REmoved!", {
      type: "info",
    });
  };

  const buyNaw = () => {
    setCartItems([]);
    return toast("Products Buy successfully!", {
      type: "success",
    });
  };

  return (
    <Container fluid>
      <ToastContainer position="bottom-right" theme="colored" />
      <Row>
        <Col md="8">
          <BuyPage addInCart={addItem} />
        </Col>
        <React.StrictMode>
        <Col md="4">
          <Cart cartItem={cartItems} removeItem={removeItem} buyNaw={buyNaw} />
        </Col>
        </React.StrictMode>
      </Row>
    </Container>
  );
}

export default App;
