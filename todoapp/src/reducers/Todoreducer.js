import { ADD_TODO, TOGGLE_TODO} from "../actions/Todoaction";


const initialState = {
      todos:[]
};

  export const TodoReducer = (state = initialState, action) => {

    switch (action.type) {
      case ADD_TODO:
        return {
          todos :[
            ...state.todos,
            {
              id: action.id,
              task: action.task,
              completed: false
            }
          ]
        };
      case 'TOGGLE_TODO':
        return {
          ...state,
          todos: state.todos.map(todo =>
            todo.id === action.id
              ? {
                  ...todo,
                  completed: !todo.completed,
                }
              : todo,
          ),
        };

      default:
        return state;
    }
  };

