const initialState = {
    todos: [],
  };
  const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [
            ...state.todos,
            {
              id: action.id,
              text: action.text,
              completed: false,
            },
          ],
        };
      case 'TOGGLE_TODO':
        return {
          ...state,
          todos: state.todos.map(todo =>
            todo.id === action.id
              ? {
                  ...state,
                  completed: !state.completed,
                }
              : todo,
          ),
        };
      default:
        return state;
    }
  };