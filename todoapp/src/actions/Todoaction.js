
export let nextTodoId = 1;

//ACTION TYPE 
 export const ADD_TODO = 'ADD_TODO'
// let ADD_TODO = 'ADD_TODO'


//ACTION CREATOR 
const addTask = event => {
  const addNew = {
    task: event,
    id: Date.now(),
    completed: false
  }
}
export const addTodo = task => {
    return {
      id: nextTodoId++,
      type: "ADD_TODO",
      task: task,
      completed: false
    };
  };

//   const toggleTodo = id => {
//     return {
//       type: "TOGGLE_TODO",
//       id
//     };
//   };