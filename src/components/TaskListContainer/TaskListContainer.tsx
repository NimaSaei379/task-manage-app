"use client";

import styled from "styled-components";
import { useTodoContext } from "@/context/TodoContext";

const StyledListElements = styled.div`
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid var(--accent);
  font-size: 22px;
`;

function TaskListContainer() {
  const { state } = useTodoContext();
  console.log(state.todos);
  return <StyledListElements>{}</StyledListElements>;
}

export default TaskListContainer;
