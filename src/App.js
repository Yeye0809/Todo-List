import { useContext } from "react";
import { TodoList } from "./components";
import { TodoContext } from "./context/TodoContext";


function App() {

  const {todos} = useContext(TodoContext);

  return (
    <div className="container-App">
      <header className="App-header">
        <h1>Need To Do...</h1>
      </header>
          
      <TodoList todos={ todos }/>

    </div>
  );
}

export default App;
