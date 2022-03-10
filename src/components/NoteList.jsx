import { SimpleGrid } from "@mantine/core";
import AddNote from "./AddNote";
import Note from "./Note";

function NoteList({ notes, addNote, deleteNote }) {
  return (
    <SimpleGrid cols={3}>
      {notes?.map((note) => (
        <Note key={note.id} note={note} deleteNote={deleteNote} />
      ))}
      <AddNote addNote={addNote} />
    </SimpleGrid>
  );
}

export default NoteList;
