import React, {useState,useContext } from "react"
import { connect } from "react-redux"
import { addTodo } from "../actions/Todoaction"
import '../App.css'
import { TodoContext } from "../context/Todocontext"

const TodoForm  = (props) =>  {
    const data = useContext(TodoContext)
    console.log('form' ,props);
    const [newTask,setNewTask] = useState('')

    const handleChange = (event) => {
        setNewTask( event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
         props.addTodo(newTask)
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
                    />
                    <button className='add'>Add Todo</button>
                    <button   className='clearBtn'
                     onClick={props.clear}>Clear Completed</button>
                </form>
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

export default  connect(mapStateToProps, {addTodo})(TodoForm);