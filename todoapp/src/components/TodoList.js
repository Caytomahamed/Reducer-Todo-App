// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React,{useContext} from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from '../actions/Todoaction';

import Todo from './Todo';
    // console.log(toogle);
const TodoList = (props) => { 
    const {todos , toggleTodo} = props
    console.log(props);
    return(
            <div >
               {todos.map( list => (
                   <Todo data= {list} key={list.id}  toggleTodo = {toggleTodo}/>
               ))}
            </div>
        )
    }

 const map = state => {
     console.log('state ' + state);
    return {
  
        todos: [
            ...state.todos,
             
        ]
    }
 }

export default connect(map, {addTodo,toggleTodo})(TodoList);