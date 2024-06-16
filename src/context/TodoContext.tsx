import React, {createContext, useContext, useReducer} from "react";

enum TodoActionKind {
    ADD_TODO = 'ADD_TODO',
    REMOVE_TODO = 'REMOVE_TODO'
}

interface ITodoState {
    todos: any[]
}

interface TodoActions {
    type: TodoActionKind
    payload: any
}


const todoInitialState = {
    todos: []
}

const TodoContext = createContext<ITodoState>(todoInitialState)

const reducer = (state: any, actions: TodoActions) => {
    return state
}
export default function TodoContextProvider({children}: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(reducer, todoInitialState)

    return (
        <TodoContext.Provider value={{...state, dispatch}}>{children}</TodoContext.Provider>
    )
}

export const useTodoContext = () => {
    return useContext(TodoContext)
}
