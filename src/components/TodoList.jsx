import { useContext, useState } from 'react';
import { TodoItem } from './TodoItem';
import { AddTodo } from './';
import { TodoContext } from '../context/TodoContext';

export const TodoList = ({todos}) => {

  const {showForm} = useContext(TodoContext);

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
      

    </div>    
  )
}

