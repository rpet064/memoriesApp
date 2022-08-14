import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from "react-bootstrap";


export default function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Button class="btn btn-warning" onClick={handleClick}><FontAwesomeIcon icon="fa-solid fa-trash-can" /></Button>
    </div>
  );
}
