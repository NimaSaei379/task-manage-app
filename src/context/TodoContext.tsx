import React, { createContext, Dispatch, useContext, useReducer } from "react";

enum TodoActionKind {
  ADD_TODO = "ADD_TODO",
  REMOVE_TODO = "REMOVE_TODO",
}

interface ITodoInitialState {
  todos: any[];
}

interface TodoActions {
  type: TodoActionKind;
  payload: any;
}

const todoInitialState = {
  todos: [],
};

const TodoContext = createContext<{
  state: ITodoInitialState;
  dispatch: Dispatch<TodoActions>;
}>({ state: todoInitialState, dispatch: () => null });

const reducer = (state: ITodoInitialState, actions: TodoActions) => {
  switch (actions.type) {
    case TodoActionKind.ADD_TODO:
      return { todos: [...state.todos, actions.payload] };
    default:
      return state;
  }
};
export default function TodoContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, todoInitialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

export const useTodoContext = () => {
  return useContext(TodoContext);
};
