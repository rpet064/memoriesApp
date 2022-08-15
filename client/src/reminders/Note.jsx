import CreateArea from "./CreateArea";
import React, { useState, useEffect } from "react";
import HandleNote from "./Note";

export default function Notes() {
  const [notes, setNotes] = useState([]);

  // Set notes to database data
  useEffect(() => {
    fetch('/api/notes'
    ).then(response => response.json()
    ).then(data => setNotes(data))
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
       .then(response => response.json())
    return [...prevNotes, newNote];
  });
}

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }
  return (
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
        )
      })}
    </div>
  )
}
