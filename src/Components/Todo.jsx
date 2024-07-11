import React,{useState} from 'react';
import '../App.css'
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todo = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [editId, setEditId] = useState(0);
    
    
    const handleSubmit=(e)=>{
        e.preventDefault();

        if(editId){
            const editTodo=todos.find((i)=>i.id===editId)
            const updateTodos=todos.map((t)=>
            t.id===editTodo.id
            ?(t={id:t.id,todo})
            :{id:t.id,todo:t.todo}
            )
            setTodos(updateTodos)
            setEditId(0)
            setTodo("")
            return;
        }

        if(todo !==" "){
            setTodos([{id:`${todo} - ${Date.now()}`,todo},...todos])
            setTodo("");
        }
    };
    const handleEdit=(id)=>{
        const editTodo=todos.find((i)=>i.id===id)
        setTodo(editTodo.todo)
        setEditId(id)
    }
    const handleDelete=(id)=>{
       const deleteTodo=todos.filter((td)=>td.id !==id)
       setTodos([...deleteTodo])
        };
  return (
    <div className="Todo">
      <div className="container">
        <h1>Todo List App</h1>
       <TodoForm 
       handleSubmit={handleSubmit}
       todo={todo}
       editId={editId}
       setTodo={setTodo} 
       />

        <TodoList
        todos={todos}
        handleEdit={handleEdit}
        handleDelete={handleDelete} />        
      </div>
    </div>
  );
}

export default Todo;
