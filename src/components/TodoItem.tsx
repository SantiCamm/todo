import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Todo } from "../utils/Interfaces";
import { Checkbox, Container, Group, Title } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const TodoItem = (todo: Todo) => {
  const [completed, setCompleted] = useState(false);
  const { dispatch } = useContext(GlobalContext);
  console.log(completed)
  const handleDelete = (id: string) : void => {
    dispatch({
      type: "DELETE_TRANSACTION", payload: id
    });
  }

  return (
    <Container
      styles={(theme) => ({
        root: {
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #eeeeee",
          padding: "10px",
        },
      })}
    >
      <Group>
        <Checkbox onChange={(e) => setCompleted(e.target.checked)}></Checkbox>
        <Title order={5}>{todo.text}</Title>
      </Group>
      <a style={{ cursor: "pointer" }} onClick={() => handleDelete(todo.id)}>
        <FontAwesomeIcon style={{ fontSize: "20px", color:"#474747"}} icon={faTrash} />
      </a>
    </Container>
  );
};

export default TodoItem;
