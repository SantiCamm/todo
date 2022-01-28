import './App.css';
import { useContext } from 'react'
import NewTodoInput from './components/NewTodoInput';
import TodoList from './components/TodoList';
import { GlobalContext } from './context/GlobalState';

function App() {
  const { state: { todos } } = useContext(GlobalContext);

  return (
    <>
      <div className="container">
        <NewTodoInput />
      </div>
      {todos.length > 0 && <div className="container">
        <TodoList />
      </div>
      }
    </>
  );
}

export default App;
