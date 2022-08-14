import { Modal, Button, Navbar, Container, Nav } from "react-bootstrap";
import React, { useState } from "react";
import occassion from "./occassionData";
import { isSpecialOccassion, x } from "./isSpecialOccassion";
import CreateArea from "../reminders/CreateArea";
import HandleNote from "../reminders/HandleNote";
import Images from  './Images'

// import { getImages, searchImages } from '../api/api';

let specialOccassion = isSpecialOccassion;

export default function Modals(props) {
  const [show, setShow] = useState(false);
  // handle homescreen transition
  const [note, showNote] = useState(false);
  // handle rendering new notes
  const [notes, setNotes] = useState([]);
  // render image gallery
  const [imageGallery, setImageGallery] = useState([false]);
  // handle closing <Modal>
  const handleClose = () => setShow(false);
  // modal popup will render near special occassion (birthday, anniversary)
  const handleShow = () => setShow(specialOccassion);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  //  render imageGallery (and model if special occasion) else notes
  function handleStateChange(stateChange) {
    if (stateChange === 'wishList') {
    handleShow();
    setImageGallery(false)
      showNote(true)
    } else {
      setImageGallery(true)
      showNote(false)
    }
  }
  return (
    <div>
      <React.Fragment>
        <Navbar className="nav" expand="lg">
          <Container>
            <Navbar.Brand onClick={() => handleStateChange("imageGallery")} id="nav-text">
              <button id="brandButton"> R❤️J </button>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
            <div>
            <Button
            variant="danger"
            size="lg"
            onClick={() => handleStateChange("imageGallery")}
          >
            Memories
          </Button>
          <Button
            variant="danger"
            size="lg"
            onClick={() => handleStateChange("wishList")}
          >
            Wish List
          </Button>
            </div>
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
      {imageGallery && <Images url="https://weddingphotosapp.s3.amazonaws.com/2.jpg" />}
        {note && 
          <div>
            <CreateArea onAdd={addNote} />
            {notes.map((noteItem, index) => {
              return (
                <HandleNote
                  key={index}
                  id={index}
                  title={noteItem.title}
                  content={noteItem.content}
                  onDelete={deleteNote}
                />
                )})}
          </ div>}
    </div>
  )
}
