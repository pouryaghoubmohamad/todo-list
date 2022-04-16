import { v4 as uuid } from "uuid";



const initialState = {
    filterStatus : "all" ,
    todoList : [] ,
}

const todoReducer = (state = initialState , action) => {
    switch(action.type){
        case "ADD_TODO" :
            state.todoList.push({
                ...action.payload ,
                id : uuid() ,
                time : new Date().toLocaleString() ,
            });

            return{
                ...state ,
                todoList : [...state.todoList] ,
            }

        case "REMOVE_TODO" :
            const newTodoList = state.todoList.filter(item => item.id !== action.payload.id);
            return{
                ...state ,
                todoList : [...newTodoList]
            }
            
        
        case "UPDATE_TODO" :
            const index = state.todoList.findIndex(item => item.id === action.payload.id);
            state.todoList[index].title = action.payload.title;
            state.todoList[index].status = action.payload.status;
            return{
                ...state ,
            }
        
            case "UPDATE_FILTER_STATUS" : 
                return{
                    ...state ,
                    filterStatus : action.payload.status  ,
                }
            
        default : 
            return state ;
    }
}

export default todoReducer ;