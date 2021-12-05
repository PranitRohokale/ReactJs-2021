import React, { useEffect, useState } from "react";

import { random, commerce } from "faker";
import { Container, Col, Row } from "reactstrap";
import axios from "axios";
import CartItem from "./CartItem";

const URL = "http://myjson.dit.upm.es/api/bins/inov";

const BuyPage = ({ addInCart }) => {
  const [product, setProduct] = useState([]);

  function randomArrayShuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  const fetchPhotos = async () => {
    const { data } = await axios.get(URL);
    const { photos } = data;
    console.log(photos);

    const allProduct = photos.map((photo) => ({
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      productName: random.word(),
      productPrice: commerce.price(),
      id: random.uuid(),
    }));

    setProduct(randomArrayShuffle(allProduct));
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <Container>
      <Row>
        {product.map((p) => {
          return (
            <Col md={4} key={p.id}>
              <CartItem product={p} addInCart={addInCart} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default BuyPage;
