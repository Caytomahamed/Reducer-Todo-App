import React, {useState } from "react"
import { connect } from "react-redux"
import { addTodo,clearTodo } from "../actions/Todoaction"
import '../App.css'

const TodoForm  = (props) =>  {
 
    
    const [newTask,setNewTask] = useState('')

    const handleChange = (event) => {
        setNewTask(event.target.value) 
    }

    const handleSubmit = (event) => {
        let inPut = document.querySelector('input')
      
        event.preventDefault();
        if(inPut.value === ''){
            alert('add something ')
        }else {
            props.addTodo(newTask)
        }
      
        setNewTask('')
    }
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input 
                    type='text'
                    name='newtask'
                    value={newTask}
                    onChange={handleChange}
                    placeholder='To do list '
                    autoComplete='off'
                    />
                    <button className='add'>Add Todo</button>
                    
                </form>
                <button   className='clearBtn'
                     onClick = {props.clearTodo}>Clear Completed</button>
            
            </div>
        )
    }

const mapStateToProps = state => {

    return {
        todos: [
        {
            id:state.id,
            task:state.task,
            completed:state.completed
        }]
        
    }
  }

export default  connect(mapStateToProps, {addTodo ,clearTodo})(TodoForm);