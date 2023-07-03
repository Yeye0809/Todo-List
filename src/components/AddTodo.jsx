import { useContext, useState } from "react"
import { TodoContext } from "../context/TodoContext";
import Swal from "sweetalert2";

export const AddTodo = () => {

  const { handleNewTodo, showForm, setShowForm } = useContext(TodoContext);

  const [formValue, setFormValue] = useState({
    category: '',
    desc: '',
  });

  const { desc, category } = formValue;

  const handleFormValue = ({target}) =>{

    const {name, value} = target
     setFormValue({
      ...formValue,
       [name]: value
     });
  };

  const handleSubmit = (event)=>{
    event.preventDefault();
    if( category.length === 0 || desc.length === 0 ) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'you must complete the form!',
      })
    }

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

