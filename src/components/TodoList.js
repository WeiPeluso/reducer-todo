// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React  from 'react'
import Todo from './Todo'

const TodoList =(props)=>{

   return (
      
           <div className='todo-list'>

           {props.todos.map((todo,index)=>
          
            <Todo toggleTodo={props.toggleTodo} key={index} toDo={todo}/>
            )}
           </div>
   )}

export default TodoList 