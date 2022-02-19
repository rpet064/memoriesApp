import { Modal, Button, Navbar, Container, Nav } from "react-bootstrap";
import React, { useState } from "react";
import occassion from "./occassionData";
import Title from "./Title";
// import ImagesGallery from "./photoAPI";
import ToDoList from "./ToDo";
import Carousel from "./Carousel";

// date & special occassion variables
let specialOccassion = false;
const now = new Date();
const date = now.getDate();
const month = now.getMonth();
let x = 0;

var nextScreenValue = "";

// conditional handles special occassions
if (month === 1 && 12 <= date && date <= 19) {
  specialOccassion = true;
} else if (month === 3 && 20 <= date && date <= 27) {
  specialOccassion = true;
  x = 1;
} else if (month === 11 && 22 <= date && date <= 29) {
  specialOccassion = true;
  x = 2;
} else {
  specialOccassion = false;
}

export default function Modals(props: any) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // modal popup will render near special occassion (birthday, anniversary)
  const handleShow = () => setShow(specialOccassion);
  const [homeScreen, setHomeScreen] = useState(true);

  // function called after homescreen button click
  function handleScreen(componentName: string) {
    if (componentName === "Home") {
      setHomeScreen(true);
    } else {
      setHomeScreen(false);
    }
  }

  // calls function to turn off homescreen and rerender modal
  function handleStateChange(componentName: string) {
    nextScreenValue = componentName;
    handleShow();
    handleScreen(nextScreenValue);
  }

  // function takes homescreen button input, returns components accordingly
  function nextScreen() {
    if (nextScreenValue === "Carousel") {
      return (
        <div>
          <Carousel />
        </div>
      );
    } else if (nextScreenValue === "toDoList") {
      return (
        <div>
          <Title titleText="To Do List" subTitleText="Add Your Items Below" />
          <ToDoList />
        </div>
      );
    } else if (nextScreenValue === "reminders") {
      return (
        <div>
          <Title
            titleText="Reminders"
            subTitleText="Add Your Reminders Below"
          />
          <ToDoList />
        </div>
      );
    }
  }

  return (
    <div>
      <React.Fragment>
        <Navbar className="nav" expand="lg">
          <Container>
            <Navbar.Brand onClick={() => handleScreen("Home")} id="nav-text">
              R❤️J
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <button onClick={() => handleScreen("Home")} id="nav-button">
                  Home
                </button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </React.Fragment>
      <div>
        <Modal id="modal" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{occassion[x].title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{occassion[x].text}</Modal.Body>
          <Modal.Footer>
            <Button variant="danger" size="sm" onClick={handleClose}>
              Continue
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      {homeScreen ? (
        <div>
          <Title
            titleText="Welcome to the Memories App"
            subTitleText="Choose one of the options below"
          />
          <Button
            variant="danger"
            size="lg"
            onClick={() => handleStateChange("Carousel")}
            value="Carousel"
          >
            Memories
          </Button>
          <Button
            variant="danger"
            size="lg"
            onClick={() => handleStateChange("toDoList")}
            value={"toDoList"}
          >
            To Do List
          </Button>
          <Button
            variant="danger"
            size="lg"
            onClick={() => handleStateChange("reminders")}
            value={"reminders"}
          >
            Wish List
          </Button>
        </div>
      ) : (
        nextScreen()
      )}
    </div>
  );
}
