const fs = require("fs");
const path = require("path");

// create notes using this function
const noteCreate = (body, notesArray) => {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify({ notes: notesArray }, null, 2)
  );
  return note;
};

// delete notes using this function
const deleteNote = (id, notesArray) => {
  const index = notesArray.findIndex((n) => n.id === id);
  if (index > -1) {
    notesArray.splice(index, 1);
  }
  fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify({ notes: notesArray }, null, 2)
  );
  return notesArray[index];
};

module.exports = {noteCreate, deleteNote};