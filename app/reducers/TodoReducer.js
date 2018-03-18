export const todos = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [{
                task: action.task,
                completed: false
            }, ...state]
        case 'REMOVE_TODO':
            return state.filter((_, i) => i !== action.index);
        case 'TOGGLE_TODO':
            const currentTask = state[action.index];
            currentTask.completed = true;
            return [...state.filter((_, i) => i !== action.index), 
                currentTask];
        default:
            return state;
    }
}