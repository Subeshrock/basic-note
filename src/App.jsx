import { useState, useEffect } from "react";
import { Container, Space } from "@mantine/core";
import { nanoid } from "nanoid";
import NoteList from "./components/NoteList";
import NoteHeader from "./components/NoteHeader";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("note-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("note-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toISOString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <Container>
      <NoteHeader />
      <Space h="xl" />
      <NoteList notes={notes} addNote={addNote} deleteNote={deleteNote} />
    </Container>
  );
}

export default App;
