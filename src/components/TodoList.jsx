import { useState } from 'react';
import { TodoItem } from './TodoItem';
import { AddTodo } from './';

export const TodoList = ({todos}) => {

  const [showForm, setShowForm] = useState(false);

  const handleShowForm = ()=>{
    setShowForm(!showForm);
  }

  return (
    <div className="container-list">
        {
            todos.map( todo =>(
                <TodoItem key={ todo.id } todo={ todo }/>
            ))
        }

        {
          showForm && <AddTodo />
        }

        <button 
          className="btn-new--todo"
          onClick={ handleShowForm }  
        >
          <i className="fa-solid fa-plus"></i>
        </button>
    </div>    
  )
}

