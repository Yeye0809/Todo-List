
export const AddTodo = () => {
  return (
    <>
        <form>
           <div>
            <label>Category</label>
            <select name="category" className="form-select">
                <option value="home">Home</option>
                <option value="word">Word</option>
                <option value="personal">Personal</option>
            </select>
           </div> 
           <div>
            <label >What's there to do</label>
            <input type="text" />
           </div>
        </form> 
    </>
  )
}

