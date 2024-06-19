import React, { createContext, Dispatch, useContext, useReducer } from "react";

export enum TodoActionKind {
  ADD_TODO = "ADD_TODO",
  REMOVE_TODO = "REMOVE_TODO",
  DONE_TODO = "DONE_TODO",
  EDIT_TODO = "EDIT_TODO",
}

interface todoShape {
  title: string;
  description: string;
  id: string;
  isDone: boolean;
}

interface ITodoInitialState {
  todos: todoShape[];
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
    case TodoActionKind.DONE_TODO:
      const findDoneIndex = state.todos.findIndex(
        (todo) => String(todo.id) === actions.payload,
      );
      state.todos[findDoneIndex] = {
        ...state.todos[findDoneIndex],
        isDone: true,
      };
      return {
        todos: [...state.todos],
      };
    case TodoActionKind.REMOVE_TODO:
      const findRemoveIndex = state.todos.findIndex(
        (todo) => String(todo.id) === actions.payload,
      );
      return {
        todos: [
          ...state.todos.filter((todo) => Number(todo.id) !== findRemoveIndex),
        ],
      };
    case TodoActionKind.EDIT_TODO:
      const findEditIndex = state.todos.findIndex(
        (todo) => String(todo.id) === actions.payload.id,
      );
      state.todos[findEditIndex] = {
        ...state.todos[findEditIndex],
        description: actions.payload.description,
        title: actions.payload.title,
      };
      return {
        todos: [...state.todos],
      };
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

export const setIsDone = (id: string) => ({
  type: TodoActionKind.DONE_TODO,
  payload: id,
});

export const addNewTodo = (data: todoShape) => ({
  type: TodoActionKind.ADD_TODO,
  payload: data,
});

export const EditTodo = (data: todoShape) => ({
  type: TodoActionKind.EDIT_TODO,
  payload: data,
});
export const RemoveTodo = (id: string) => ({
  type: TodoActionKind.REMOVE_TODO,
  payload: id,
});
