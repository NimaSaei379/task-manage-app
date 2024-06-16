"use client";

import styled from "styled-components";

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
    return <StyledListElements>تسکی وجود ندارد</StyledListElements>;
}

export default TaskListContainer;
