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
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const checkWin = () => {
    // checking the winner
  };

  const reload = () => {
    // responsible for reloding the game
  };

  const changeItem = (itemNumber) => {
    // change the icon in the ui
  };

  return (
    <div className="">
      <h1>hello world</h1>
      <Icon />
    </div>
  );
}

export default App;
