import React from "react";

import { connect } from "react-redux";
import { addTodo } from "../actions/Todoaction";
import '../App'

const Todo = props => {

   console.log('todo.js ' , props.task, props.id ,props.completed);
    return (
        <div onClick={() => props.completed(props.id)} 
        className={` ${props.completed ? 'completed' : '' }`}>
            {/* <p className='task'>{props.data.task}</p> */}
            <p className='task'>{props.task}</p>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        id:state.id,
        task: state.task,
        completed:state.completed
    }
  } 
export default connect(mapStateToProps, {addTodo})(Todo);