import React, { InputHTMLAttributes } from "react";
import { Controller, RegisterOptions, UseFormReturn } from "react-hook-form";
import styled, { css } from "styled-components";

interface ItextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  rules?: RegisterOptions;
  label?: string;
  errors?: UseFormReturn["formState"]["errors"];
  control: UseFormReturn["control"];
  as?: string;
}

const StyledInput = styled.input<{ as?: string; $error?: boolean }>`
  padding: 0.75rem 1.25rem;
  display: block;
  border-radius: 0.5rem;
  border: 1px solid ${({ $error }) => ($error ? `red` : `var(--accent)`)};
  width: 100%;
  outline: none;
  margin-top: 0.5rem;
  & + p {
    color: ${({ $error }) => ($error ? `red` : `var(--accent)`)};
  }
  & ~ label {
    color: ${({ $error }) => ($error ? `red` : `var(--accent)`)};
  }
  ${(props) =>
    props.as === "textarea" &&
    css`
      box-sizing: border-box;
      resize: none;
    `}
`;

const StyledErrorMessage = styled.p<any>`
  font-size: 0.75rem;
`;
function TextField({
  label,
  control,
  rules,
  name,
  as,
  ...restProps
}: ItextFieldProps) {
  return (
    <Controller
      rules={rules}
      control={control}
      name={name}
      render={({ field, fieldState, formState }) => {
        return (
          <>
            <label htmlFor={name}>{label}</label>
            <StyledInput
              $error={Boolean(formState.errors[name])}
              id={name}
              as={as}
              {...field}
              {...restProps}
            />
            <StyledErrorMessage>
              {formState.errors[name]?.message}
            </StyledErrorMessage>
          </>
        );
      }}
    />
  );
}
export default TextField;
