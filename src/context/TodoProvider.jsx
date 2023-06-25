import { useTodo } from '../hooks/useTodo';
import { TodoContext } from './TodoContext';


export const TodoProvider = ({children}) =>{

  const { todos, showForm, setShowForm, handleNewTodo, handleShowForm, handleToggleTodo, handleDeleteTodo} = useTodo();    

  const value ={
      todos,
      showForm,
      setShowForm,
      handleShowForm,
      handleNewTodo,
      handleToggleTodo,
      handleDeleteTodo,
  };

  return(
      <TodoContext.Provider value={ value }>
          {
              children
          }
      </TodoContext.Provider>
  )
}