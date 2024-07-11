import React from 'react'

const TodoForm = ({handleSubmit,todo,editId,setTodo}) => {
  return (
    <div>
       <form className='TodoForm' onSubmit={handleSubmit}>
            <input type="text" 
            value={todo}
            onChange={(e)=>setTodo(e.target.value)}/>
            <button>{editId?"Edit":"Go"}</button>
        </form>
    </div>
  )
}

export default TodoForm
