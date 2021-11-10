import React,{useState} from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm';
import './App.css';



const App = () =>  {


    return (

      <div className='todo'>
        <h2 className='title'>Welcome to your Todo App!</h2>
        <TodoForm />
        <TodoList/>
      </div>

    );
  }

export default App;
