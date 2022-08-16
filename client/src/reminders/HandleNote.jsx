import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from "react-bootstrap";


export default function Note(props) {
  async function handleClick() {
    // await fetch(`/api/delete_note/${props.title}`, { method: 'DELETE' });
    await fetch(`http://localhost:5000/api/delete_note/${props.title}`, { method: 'DELETE' });
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Button className="btn btn-warning" onClick={handleClick}><FontAwesomeIcon icon="fa-solid fa-trash-can" /></Button>
    </div>
  );
}
