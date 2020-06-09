import React from 'react'
import "./Todo.css"

const Todo =(props)=>{

           console.log(props.toDo.todo)
         return(<div onClick={(e)=>{e.preventDefault();
            console.log("clicked")
            props.toggleTodo(props.toDo.todo.id)
         }}
          className={`todo${props.toDo.todo.completed ? " completed": ""}`}>
            {props.toDo.todo.task} </div>
         )
       

}

export default Todo;