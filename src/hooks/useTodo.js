import { useReducer, useState } from 'react';
import { todoReducer } from '../reducers/todoReducer';

const initialState = [ {
    id: new Date().getMilliseconds(),
    category: 'Home',
    desc: 'hola',
    done: false
  } ];

export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState );

    const [showForm, setShowForm] = useState(false);

    const handleShowForm = ()=>{
      setShowForm(!showForm);
    }

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

