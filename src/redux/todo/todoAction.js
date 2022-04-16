const addTodo = (todo) => {
    return {
        type : "ADD_TODO" ,
        payload : todo ,
    }
}

const removeTodo = (todo) => {
    return {
        type : "REMOVE_TODO" ,
        payload : todo ,
    }
}

const updateTodo = (todo) => {
    return {
        type : "UPDATE_TODO" ,
        payload : todo ,
    }
}

const updateFilterStatus = (status) => {
    return {
        type : "UPDATE_FILTER_STATUS" ,
        payload : status ,
    }
}


export { addTodo , removeTodo , updateTodo , updateFilterStatus }