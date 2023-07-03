import { useEffect, useReducer, useState } from 'react';
import { todoReducer } from '../reducers/todoReducer';

const initialState = [];

const init = () =>{
  const oldTodos = localStorage.getItem('todos');
  return JSON.parse(oldTodos);
}

export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init );

    const [showForm, setShowForm] = useState(false);

    useEffect(()=>{
      localStorage.setItem('todos', JSON.stringify(todos));
    },[todos]);

    const handleShowForm = ()=>{
      setShowForm(!showForm);
    };

    const handleNewTodo = (todoValue) =>{

      const {category, desc} = todoValue;
      const newTodo = {
        id: new Date().getMilliseconds(),
        category,
        desc,
        done: false
      };

      const action = {
        type: '[TODO] add-todo',
        payload: newTodo,
      };

      dispatch(action);
    };

    const handleToggleTodo = (id) =>{
        dispatch({
            type: '[TODO] todo-toggle',
            payload: id
        });
    };

    const handleDeleteTodo = (id) =>{
        dispatch({
            type: '[TODO] delete-todo',
            payload: id
        });
    };

    return{
        todos,
        showForm,
        setShowForm,
        handleShowForm,
        handleNewTodo,
        handleToggleTodo,
        handleDeleteTodo,
    }
}

