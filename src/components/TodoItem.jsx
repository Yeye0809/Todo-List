
export const TodoItem = ({todo}) => {
    const { category, desc, done } = todo;
  return (
    <div className="todo-container">
        <div className="todo-container--category">
            <span>{ category }</span>
            <input type="checkbox"/>
        </div>
        <p>{ desc }</p>
    </div>
  )
}

