import React from "react";
import styled from "styled-components";
import { TextDescription, TextTitle } from "@/lib/globalStyles";
import { LuPencil, LuTrash } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { RemoveTodo, setIsDone, useTodoContext } from "@/context/TodoContext";

interface ITaskListElementProps {
  title: string;
  description: string;
  id: string;
  isDone: boolean;
}

const StyledTaskListItem = styled.div<{ isDone: boolean }>`
  display: flex;
  flex-direction: row;
  margin: 1rem 0;
  padding: 1.25rem 2rem;
  border-radius: 1.5rem;
  gap: 0.5rem;
  align-items: center;
  box-shadow: 0.3rem 0.3rem 1rem var(--accent);
  background-color: ${({ isDone }) => (isDone ? "#eee" : "")};

  & .checkbox-container .checkbox-wrapper {
    display: block;
    position: relative;
    padding-left: 10px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    & input[type="checkbox"] {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;

      &:checked ~ .checkmark:after {
        display: block;
      }
    }

    & .checkmark {
      position: absolute;
      top: -10px;
      left: 0;
      height: 25px;
      width: 25px;
      background-color: #eee;
      border-radius: 15px;

      &:after {
        content: "";
        position: absolute;
        display: none;
      }
    }

    &:hover input ~ .checkmark {
      background-color: #ccc;
    }

    & .checkmark:after {
      left: 9px;
      top: 5px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }

    & input:checked ~ .checkmark {
      background-color: #2196f3;
    }
  }

  .content-container {
    flex-grow: 1;
  }

  .Actions-container {
    display: flex;
    gap: 0.75rem;
  }
`;
const EditButton = styled.button`
  color: blue;
  cursor: pointer;
  border-radius: 100%;
  width: 2rem;
  height: 2rem;
  padding: 0.25rem;
  border: 1px solid var(--accent);
  background-color: white;
  &:hover {
    background-color: #eee;
  }
`;

const DeleteButton = styled.button`
  color: red;
  cursor: pointer;
  border-radius: 100%;
  width: 2rem;
  height: 2rem;
  padding: 0.25rem;
  border: 1px solid var(--accent);
  background-color: white;
  &:hover {
    background-color: #eee;
  }
`;

function TaskListElement({
  description,
  title,
  id,
  isDone,
}: ITaskListElementProps) {
  const router = useRouter();
  const { dispatch, state } = useTodoContext();

  return (
    <StyledTaskListItem isDone={isDone}>
      <div className="checkbox-container">
        <label className="checkbox-wrapper">
          <input
            type="checkbox"
            checked={isDone}
            disabled={isDone}
            onChange={() => dispatch(setIsDone(id))}
          />
          <span className="checkmark"></span>
        </label>
      </div>
      <div className="content-container">
        <TextTitle isDone={isDone}>{title}</TextTitle>
        <TextDescription>{description}</TextDescription>
      </div>
      <div className="Actions-container">
        <EditButton
          disabled={isDone}
          onClick={() => router.push(`/taskDetails/${id}`)}
        >
          <LuPencil />
        </EditButton>
        <DeleteButton onClick={() => dispatch(RemoveTodo(id))}>
          <LuTrash />
        </DeleteButton>
      </div>
    </StyledTaskListItem>
  );
}

export default TaskListElement;
