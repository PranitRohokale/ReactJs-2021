import react, { useState } from "react";
import Icon from "./components/icon";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const itemArray = new Array(9).fill("empty");

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty", 0, 9);
  };

  const checkIsWinner = () => {
        if(    
            //row wise
               (itemArray[0] === itemArray[1]  && itemArray[0]=== itemArray[2] && itemArray[0]!=="empty")
            || (itemArray[3] === itemArray[4]  && itemArray[3]=== itemArray[5] && itemArray[3]!=="empty")
            || (itemArray[6] === itemArray[7]  && itemArray[6]=== itemArray[8] && itemArray[6]!=="empty")
            //col wise
            || (itemArray[0] === itemArray[3]  && itemArray[0]=== itemArray[6] && itemArray[0]!=="empty")
            || (itemArray[1] === itemArray[4]  && itemArray[1]=== itemArray[7] && itemArray[1]!=="empty")
            || (itemArray[2] === itemArray[5]  && itemArray[2]=== itemArray[8] && itemArray[2]!=="empty")
            //diagonal
            || (itemArray[0] === itemArray[4]  && itemArray[4]=== itemArray[8] && itemArray[0]!=="empty")
            || (itemArray[2] === itemArray[4]  && itemArray[4]=== itemArray[6] && itemArray[2]!=="empty")
            )
        {
            setWinMessage(`Yeah! ${itemArray[0]} won`);
            return toast(`${winMessage}`,{type:"success"});
        }
  };

  const changeItem = (itemNumber) => {
    if (winMessage) {
      return toast(`${winMessage}`, { type: "success" });
    }
    if (itemArray[itemNumber] !== "empty")
      return toast("already Filled!", { type: "error" });

    itemArray[itemNumber] = isCross ? "cross" : "circle";
    setIsCross(!isCross);
    checkIsWinner();
  };

  return (
    <Container className="p-5">
      <ToastContainer position="top-right" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className="mb-2 mt-2">
              <h1 className="text-success text-capitalize text-center">
                {winMessage}
              </h1>
              <Button color="success" block onClick={reloadGame}>
                Reload Game
              </Button>
            </div>
          ) : (
            <h1 className="text-center text-capitalize text-warning">
              {isCross ? "Cross Turn" : "Circle Turn"}
            </h1>
          )}
          <div className="grid">
            {itemArray.map((item, itemIndex) => (
              <Card color="warning" onClick={() => changeItem(itemIndex)} className={item!=="empty" ? "box-mark" : ""}>
                <CardBody className="box">
                  <Icon name={item} key={itemIndex} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
