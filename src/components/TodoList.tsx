import { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState"
import { Group } from '@mantine/core';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { state: { todos } } = useContext(GlobalContext);

  return (
    <Group direction="column" spacing="xs" grow styles={(theme) => ({
      root: {
        margin: "10px 0",
      }
    })}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </Group>);
};

export default TodoList;
