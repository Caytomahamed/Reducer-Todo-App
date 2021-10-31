

//ACTION TYPE 
export const ADD_TODO = 'ADD_TODO'
// let ADD_TODO = 'ADD_TODO'


//ACTION CREATOR 
 export const addTodo = task => {
   return{
     type: "ADD_TODO",
     task
   }
   
}
// export const addTodo = task => {
//     return {
//       id: nextTodoId++,
//       
//       task: task,
//       completed: false
//     };
//   };

//   const toggleTodo = id => {
//     return {
//       type: "TOGGLE_TODO",
//       id
//     };
//   };