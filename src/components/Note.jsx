import { ActionIcon, Card, Text, Space, Group } from "@mantine/core";
import { ReactComponent as DeleteIcon } from "../assets/Delete.svg";

function Note({ note, deleteNote }) {
  return (
    <Card
      shadow="sm"
      padding="sm"
      sx={(theme) => ({ backgroundColor: theme.colors.yellow[2] })}
    >
      <Text>{note.text}</Text>
      <Space h="md" />
      <Group position="apart">
        <Text>{note.date}</Text>
        <ActionIcon onClick={() => deleteNote(note.id)}>
          <DeleteIcon style={{ width: 16, height: 16 }} />
        </ActionIcon>
      </Group>
    </Card>
  );
}

export default Note;
