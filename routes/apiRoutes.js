const router = require("express").Router();
const {notes} = require("../db/db.json");
const { v4: uuidv4 } = require("uuid");
const { noteCreate, deleteNote } = require("../lib/notes");

router.get("/notes", (req, res) => {
  let savedNotes = notes;
  res.json(savedNotes);
});

router.post("/notes", (req, res) => {
  req.body.id = uuidv4();
  res.json(noteCreate(req.body, notes));
});

router.delete("/notes/:id", (req, res) => {
  const params = req.params.id;
  deleteNote(params, notes);
  res.redirect("");
});

module.exports = router;
