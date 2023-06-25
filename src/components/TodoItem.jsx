import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

export const TodoItem = ({todo}) => {
    const { category, desc, done, id } = todo;

    const { handleDeleteTodo, handleToggleTodo } = useContext(TodoContext);
    const handleDone = () =>{
      handleToggleTodo(id)
        setTimeout(()=>{
          handleDeleteTodo(id);
        }, 500);
    }

  return (
    <div className={`todo-container animate__animated ${ done ? "animate__backOutDown" : "animate__bounceInDown"}`}>
        <div className="todo-container--category">
            <span>{ category }</span>
            <input type="checkbox" onChange={handleDone}/>
        </div>
        <p>{ desc }</p>
    </div>
  )
}

