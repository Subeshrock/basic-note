import { useState, useEffect } from "react";
import { Card, Text, Textarea, Button, Group } from "@mantine/core";

function AddNote({ addNote }) {
  const [noteText, setNoteText] = useState("");
  const [empty, setEmpty] = useState(false);

  const characterLimit = 200;

  const handleChange = (e) => {
    if (characterLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };

  useEffect(() => {
    if (noteText.length >= 0) {
      setEmpty(false);
    }
  }, [noteText]);

  const handleAddNote = (e) => {
    if (noteText.length <= 0) {
      return setEmpty(true);
    }
    addNote(noteText);
    setNoteText("");
  };

  return (
    <Card
      sx={(theme) => ({ backgroundColor: theme.colors.blue[2] })}
      shadow="sm"
      padding="sm"
    >
      <Card.Section>
        <Textarea
          styles={(theme) => ({
            input: { border: "none", backgroundColor: theme.colors.blue[2] },
          })}
          placeholder="Type to add a note..."
          autosize
          value={noteText}
          onChange={handleChange}
          error={
            (characterLimit - noteText.length <= 0 &&
              "Note should not cross more than 200 latters") ||
            (empty && "Please write some note")
          }
        />
      </Card.Section>
      <Group position="apart">
        <Text>{characterLimit - noteText.length} remaining</Text>
        <Button onClick={handleAddNote} radius="xl" compact>
          Save
        </Button>
      </Group>
    </Card>
  );
}

export default AddNote;
