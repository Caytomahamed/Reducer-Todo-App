import { ADD_TODO } from "../actions/Todoaction";


const initialState = {
      todos:[
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        },
        {
          task: 'watching tv',
          id: 1528817084359,
          completed: false
        }
      ]
};

  export const TodoReducer = (state = initialState, action) => {

    switch (action.type) {
      case ADD_TODO:
        return {
          ...state,
          todos :[
            ...state.todos,
            {
              id: Date.now(),
              task: action.task,
              completed: false
            }
          ]
        };
      // case 'TOGGLE_TODO':
      //   return {
      //     ...state,
      //     todos: state.todos.map(todo =>
      //       todo.id === action.id
      //         ? {
      //             ...state,
      //             completed: !state.completed,
      //           }
      //         : todo,
      //     ),
      //   };

      default:
        return state;
    }
  };

