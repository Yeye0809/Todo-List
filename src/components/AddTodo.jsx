import { useContext, useState } from "react"
import { TodoContext } from "../context/TodoContext";

export const AddTodo = () => {

  const { handleNewTodo, showForm, setShowForm } = useContext(TodoContext);

  const [formValue, setFormValue] = useState({
    category: '',
    desc: '',
  });

  const { desc } = formValue;

  const handleFormValue = ({target}) =>{
    const {name, value} = target
     setFormValue({
      ...formValue,
       [name]: value
     });
  };

  const handleSubmit = (event)=>{
    event.preventDefault();
    handleNewTodo(formValue);
    setShowForm(!showForm);
  }

  return (
    <>
        <form onSubmit={ handleSubmit }>
           <div>
            <label>Category</label>
            <select 
              name="category"
              onChange={ handleFormValue }
            >
                <option value="">Select category</option>
                <option value="home">Home</option>
                <option value="job">Job</option>
                <option value="personal">Personal</option>
            </select>
           </div> 
           <div>
            <label >What's there to do</label>
            <input 
              type="text" 
              name="desc"
              placeholder="Write something"
              value={ desc }  
              onChange={ handleFormValue }
            />
           </div>
           <div className="justify-content-center">
            <button>Add</button>
           </div>
        </form> 
    </>
  )
}

