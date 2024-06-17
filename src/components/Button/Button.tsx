"use client";
import styled, { css } from "styled-components";
import React from "react";

const colors: Record<string, any> = {
  blue: {
    default: "#3f51b5",
    hover: "#283593",
  },
  pink: {
    default: "#e91e63",
    hover: "#ad1457",
  },
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  $color?: "blue" | "pink";
  $size?: "sm" | "md" | "lg";
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ $color }) => colors[$color!].default};
  color: white;
  ${({ $size }) =>
    (!$size || $size === "sm") &&
    css`
      padding: 0.5rem 1rem;
    `}
  ${({ $size }) =>
    $size === "md" &&
    css`
      padding: 1rem 1.5rem;
    `}
  ${({ $size }) =>
    $size === "lg" &&
    css`
      padding: 1.25rem 1.75rem;
    `}
  border-radius: 5px;
  outline: 0;
  border: 0;
  margin: 10px 0;
  cursor: pointer;
  box-shadow: 0 2px 2px lightgray;
  transition: ease background-color 250ms;

  &:hover {
    background-color: ${({ $color }) => colors[$color!].hover};
  }

  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;
StyledButton.defaultProps = {
  $color: "blue",
};

function Button({
  type,
  children,
  $color = "blue",
  ...restBtnProps
}: ButtonProps) {
  return (
    <StyledButton type={type} $color={$color} {...restBtnProps}>
      {children}
    </StyledButton>
  );
}

export default Button;
