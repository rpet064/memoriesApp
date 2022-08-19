const express = require("express");
const noteModel = require("../models/Note");
const app = express();

// get all notes
app.get("/notes", async (req, res) => {
	const notes = await noteModel.find({});
	try {
	  res.send(notes);
	} catch (error) {
	  res.status(500).send(error);
	}
  });

// create Note
app.post("/add_note", async (req, res) => {
    const note = new noteModel(req.body);
    try {
      await note.save();
      res.send(note);
    } catch (error) {
      res.status(500).send(error);
    }
});

app.delete("/delete_note/:title", async (req, res) => {
  try{
  const noteTitle = req.params.title;
  const notes = await noteModel.findOneAndDelete({title: noteTitle});
  res.json({success: noteTitle});
  } catch (error) {
    res.status(500).send(error);
  }
  });

// delete note
module.exports = app;