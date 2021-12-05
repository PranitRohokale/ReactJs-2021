import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Row,
  Col,
  Button,
  Container,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { FaCheck ,FaTrashAlt} from "react-icons/fa"

const Cart = ({ cartItem, removeItem, buyNaw }) => {
  let amount = 0;

  cartItem.forEach((i) => {
    amount += parseInt(i.productPrice);
  });

  return (
    <Container>
      <h1 className="text-success text-center">Your Cart</h1>
      <ListGroup>
        {cartItem.map((item) => (
          <ListGroupItem key={item.id}>
            <Row>
              <Col>
                <img height={80} src={item.tinyImage} />
              </Col>
              <Col className="text-center">
                <div className="text-primary">{item.productName}</div>
                <span>Price :-{item.productPrice}</span> &nbsp;
                <Button className="btn-danger" onClick={() => removeItem(item.id)}>
                  <FaTrashAlt/>Remove
                </Button>
              </Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>
      {/* if cart empty */}
      {cartItem.length >= 1 ? (
        <Card className="mt-3 text-center">
          <CardHeader>Grand Total </CardHeader>
          <CardBody>
            Your Amount for {cartItem.length} Product is {amount}.
          </CardBody>
          <CardFooter>
            <Button className="btn btn-success btn-block" onClick={buyNaw} block>
              Buy Now <FaCheck/>
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <h1 className="text-muted text-center">Cart is Empty </h1>
      )}
      <hr/>
    </Container>
  );
};

export default Cart;
