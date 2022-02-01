import NewTodoInput from '../components/NewTodoInput';
import TodoList from '../components/TodoList';

const Todos = () => {
  return (
    <div className="todosPage">
      <div className="wrapper">
        <div className="container">
          <NewTodoInput />
        </div>
        <div className="container">
          <TodoList />
        </div>
      </div>
    </div>
  )
}

export default Todos;
