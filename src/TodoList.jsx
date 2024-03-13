import './App.css'
import { useState } from "react"

export default function TodoList(){
    let [todos,setTodos] = useState([""]);
    let [newTodo,setNewTodos] = useState([""]);

    function addNewTask(){
        setTodos([...todos,newTodo]);
        setNewTodos("   ")
    }

    function updateTodoValue(event){
        setNewTodos(event.target.value )
    }


    return(
        <div>
            <h2>To Do list</h2>
            <input 
               placeholder = "Add a Task"
               onChange={updateTodoValue}
               value={newTodo}
            ></input>                            
            <button onClick={addNewTask}> Add Task </button><br/> <br/> <br/> 
            
            <hr></hr>
            <h3> Task to do </h3>
            <hr></hr>
            
            <ul>
                {
                    todos.map((todo)=>(
                         (<li>{todo}</li>)
                    ))
                }
            </ul>
        </div>
    )
}