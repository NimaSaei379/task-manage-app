"use client";

import styled from "styled-components";
import { useTodoContext } from "@/context/TodoContext";
import TaskListElement from "@/components/TaskListContainer/TaskListElement";

const StyledListElements = styled.div`
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--accent);
  font-size: 22px;
`;

function TaskListContainer() {
  const { state } = useTodoContext();

  return (
    <StyledListElements>
      {state.todos.length === 0
        ? "موردی برای نمایش وجود ندارد"
        : state.todos.map((todo, index) => (
            <TaskListElement
              title={todo.title}
              description={todo.description}
              isDone={todo.isDone}
              id={`${index}`}
              key={index}
            />
          ))}
    </StyledListElements>
  );
}

export default TaskListContainer;
