import { Modal, Button, Navbar, Container, Nav } from "react-bootstrap";
import React, { useState } from "react";
import occassion from "./occassionData";
import Title from "./Title";
import Carousel from "./Carousel";
import { isSpecialOccassion, x } from "./isSpecialOccassion";
import ToDoList from "../toDoList/ToDoList";
import CreateArea from "../reminders/CreateArea";
import HandleNote from "../reminders/HandleNote";

// import { getImages, searchImages } from '../api/api';

let specialOccassion = isSpecialOccassion;

var nextScreenValue = "";

export default function Modals(props: any) {
  const [show, setShow] = useState(false);
  // handle closing <Modal>
  const handleClose = () => setShow(false);
  // modal popup will render near special occassion (birthday, anniversary)
  const handleShow = () => setShow(specialOccassion);
  // handle homescreen transition
  const [homeScreen, setHomeScreen] = useState(true);
  // handle rendering new notes
  const [notes, setNotes] = useState([]);

  function addNote(newNote: any) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id: any) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

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
    // from homepage slideshow button
    if (nextScreenValue === "Carousel") {
      return (
        <div>
          <Carousel />
        </div>
      );
    } else if (nextScreenValue === "toDoList") {
      // from homepage To Do list button
      return (
        <div>
          <Title titleText="To Do List" subTitleText="Add Your Items Below" />
          <ToDoList />
        </div>
      );
      // from homepage reminders button
    } else if (nextScreenValue === "reminders") {
      return (
        <div>
          <Title
            titleText="Reminders"
            subTitleText="Add Your Reminders Below"
          />
          <div>
            <CreateArea onAdd={addNote} />;
            {notes.map((noteItem, index) => {
              return (
                <HandleNote
                  key={index}
                  id={index}
                  title={noteItem.title}
                  content={noteItem.content}
                  onDelete={deleteNote}
                />
              );
            })}
          </div>
        </div>
      );
    } else {
      console.log(
        "Page cannot be found, please click on the home button and try again"
      );
    }
  }

  return (
    <div>
      <React.Fragment>
        <Navbar className="nav" expand="lg">
          <Container>
            <Navbar.Brand onClick={() => handleScreen("Home")} id="nav-text">
              <button id="brandButton"> R❤️J </button>
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
