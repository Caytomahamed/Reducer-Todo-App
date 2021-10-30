
// let nextTodoId = 0;

 export let ADD_TODO = 'ADD_TODO'
// let ADD_TODO = 'ADD_TODO'

export const addTodo = task => {
    return {
      type: "ADD_TODO",
      payload: task
    };
  };

//   const toggleTodo = id => {
//     return {
//       type: "TOGGLE_TODO",
//       id
//     };
//   };