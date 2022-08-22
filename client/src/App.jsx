import Footer from "./Footer";
import "./styles/styles.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashCan, faNoteSticky, faPhotoFilm, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import CreateArea from "./reminders/CreateArea";
import HandleNote from "./reminders/HandleNote";
import React, { useState, useEffect } from "react";
import { Modal, Button, Navbar, Container, Nav } from "react-bootstrap";
import occassion from "./homeScreen/occassionData";
import { isSpecialOccassion, x } from "./homeScreen/isSpecialOccassion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

let specialOccassion = isSpecialOccassion;
const n = 20;


library.add(faTrashCan, faNoteSticky, faPhotoFilm, faGithub, faLinkedin, faEnvelope)

export default function App() {
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

  // Set notes to database data
  useEffect( () => {
    fetch('/api/notes'
    // fetch('http://localhost:5000/api/notes'
    ).then(response => response.json()
    ).then(data => setNotes(data)
    )
    }, [])

function addNote(newNote) {
  setNotes(prevNotes => {
    // post new note to db
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newNote)
       };
       fetch('/api/add_note', requestOptions)
        // fetch('http://localhost:5000/api/add_note', requestOptions)
       .then(response => console.log(response.json()))
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
    <div className="App">
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
            <div id="btn-grp">
              <Button
              onClick={() => handleStateChange("imageGallery")}
            >
              <FontAwesomeIcon icon="fa-solid fa-photo-film" />
            </Button>
            <Button
              onClick={() => handleStateChange("wishList")}
            >
              <FontAwesomeIcon icon="fa-solid fa-note-sticky" />
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
      {/* show array of images  */}
      <div id="main-content">
      {imageGallery && [...Array(n)].map((e, i) => <img className="image-gallery" src={`https://weddingphotosapp.s3.amazonaws.com/${i+1}.jpg`} key={i} alt="" />)
      }
      {/* show notes */}
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
    </div>
      <Footer />
    </div>
  );
}

