export const addTodo = task => {
    return {
        type: 'ADD_TODO', task
    }
}

export const removeTodo = index => {
    return {
        type: 'REMOVE_TODO', index
    }
}

export const toggleTodo = index => {
    return {
        type: 'TOGGLE_TODO', index
    }
}