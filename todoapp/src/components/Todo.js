import React from "react";

import { connect } from "react-redux";
import { addTodo } from "../actions/Todoaction";
import '../App'

const Todo = props => {
    return (
        <div onClick={() => props.completed(props.data.id)} 
        className={` ${props.data.completed ? 'completed' : '' }`}>
            <p className='task'>{props.data.task}</p>
        </div>
    )
}
const mapStateToProps = state => {
      
    return {
        todos: [
            ...state.todos,
        {
            id:state.id,
            task:state.task,
            completed:state.completed
        }]
        
    }
  } 
export default connect(mapStateToProps, {addTodo})(Todo);