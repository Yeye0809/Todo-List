import { useContext } from "react";
import { TodoList } from "./components";
import { TodoContext } from "./context/TodoContext";

function App() {
  const { todos, handleShowForm } = useContext(TodoContext);

  return (
    <div className="container-App">
      <header className="App-header">
        <h1>Need To Do...</h1>
      </header>

      <TodoList todos={todos} />

      <button className="btn-new--todo" onClick={handleShowForm}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}

export default App;
