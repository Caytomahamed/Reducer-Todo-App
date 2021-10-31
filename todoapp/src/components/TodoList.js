// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React,{useContext} from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from '../actions/Todoaction';

import Todo from './Todo';

const TodoList = (props) => { 
    const {todos , toggleTodo} = props
    console.log('todolist',props);
    return(
            <div >
               {todos.map( list => (
                   <Todo data= {list} key={list.id}  toggleTodo = {toggleTodo}/>
               ))}
            </div>
        )
    }

 const map = state => {
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

export default connect(map, {addTodo,toggleTodo})(TodoList);