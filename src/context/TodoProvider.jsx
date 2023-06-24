import { useReducer } from 'react';
import { TodoContext } from './TodoContext';
import { todoReducer } from '../reducers/todoReducer';

const initialState = [
    {
      id: new Date().getTime(),
      category: 'Word',
      desc: 'vamos a recolectar las gemas del infinito',
      done: false,
    },
    {
      id: new Date().getTime() * 2,
      category: 'Home',
      desc: 'cuando tengamos recolectadas todas las gemas, las pondremos en el guantelete',
      done: false,
    }
   
  ]

export const TodoProvider = ({children}) =>{

    const [todos, dispatch] = useReducer(todoReducer, initialState );

    const value ={
        todos,
    }

    return(
        <TodoContext.Provider value={ value }>
            {
                children
            }
        </TodoContext.Provider>
    )
}