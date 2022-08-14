import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}><FontAwesomeIcon icon={"fa-solid, trashCan"}/></button>
    </div>
  );
}
