import React, { useState } from "react";
import "./App.css";
import Icon from "./components/Icon";

// react toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// bootstrap
import { Card, CardBody, Button, Container, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

const itemArray = new Array(9).fill("empty");
function App() {
  const [isCross, setIsCross] = useState(true);
  const [winMessage, setWinMessage] = useState("");

  const checkWin = () => {
    // checking the winner

    //row checking
    if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[1] &&
      itemArray[1] === itemArray[2]
    ) {
      setWinMessage(`${itemArray[0]} wins`);
    }
    if (
      itemArray[3] !== "empty" &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ) {
      setWinMessage(`${itemArray[4]} wins`);
    }
    if (
      itemArray[6] !== "empty" &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[6]} wins`);
    }

    // 0 1 2
    // 3 4 5
    // 6 7 8

    //column checking
    if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[0]} wins`);
    }

    if (
      itemArray[1] !== "empty" &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      setWinMessage(`${itemArray[1]} wins`);
    }

    if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[2]} wins`);
    }

    // diagonal checking
    if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[0]} wins`);
    }
    if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[2]} wins`);
    }

    if (!itemArray.includes("empty")) {
      setWinMessage("Game draw !!!");
    }
  };

  const reload = () => {
    // responsible for reloding the game
    setIsCross(!isCross);
    setWinMessage("");
    itemArray.fill("empty");
  };

  const changeItem = (itemNumber) => {
    // change the icon in the ui
    if (winMessage) {
      return toast(winMessage, { type: "info" });
    }

    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("Already filled", { type: "error" });
    }

    checkWin();
  };

  return (
    <Container className="p-5">
      <ToastContainer position="top-right" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className="mb-2 mt-2">
              <h1 className="text-white text-uppercase text-center">
                !!! {winMessage} !!!
              </h1>
              <Button color="success" size="lg" onClick={reload} block>
                Reload
              </Button>
            </div>
          ) : (
            <div className="mb-2 mt-2">
              <h1 className="text-center text-warning">
                {isCross ? "Cross turn" : "Circle turn"}
              </h1>
            </div>
          )}
          <div className="grid mt-4">
            {itemArray.map((item, index) => (
              <Card key={index} onClick={() => changeItem(index)}>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
