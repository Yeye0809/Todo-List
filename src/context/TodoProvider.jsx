import { useReducer, useState } from 'react';
import { TodoContext } from './TodoContext';
import { todoReducer } from '../reducers/todoReducer';

const initialState = [ ]

export const TodoProvider = ({children}) =>{

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
    }

    const value ={
        todos,
        showForm,
        setShowForm,
        handleShowForm,
        handleNewTodo
    };

    return(
        <TodoContext.Provider value={ value }>
            {
                children
            }
        </TodoContext.Provider>
    )
}