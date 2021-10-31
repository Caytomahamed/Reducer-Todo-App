import React from "react";
import '../App'

const Todo = props => {

   console.log('todo.js ' , props.data.completed);
    return (
        <div onClick={() => props.toggleTodo (props.data.id)} 
        className={` ${props.data.completed ? 'completed' : '' }`}>
            <p className='task'>{props.data.task}</p>
        </div>
    )
}
export default Todo;