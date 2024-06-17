"use client";
import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import TextField from "@/components/TextField/TextField";
import { Container } from "@/lib/globalStyles";
import styled from "styled-components";
import Button from "@/components/Button/Button";
import { useTodoContext } from "@/context/TodoContext";
import { useRouter } from "next/navigation";

const StyledForm = styled.form`
  margin: 3rem auto;
  width: 50%;
  border: 1px solid #1f2833;
  border-radius: 2rem;
  padding: 0.937rem 1.25rem;
  & > div {
    margin-top: 1rem;
  }
`;

function Page() {
  const methods = useForm();
  const { dispatch } = useTodoContext();
  const router = useRouter();
  const handleSubmit: SubmitHandler<any> = (value: any) => {
    console.log(value);
    dispatch({ type: "ADD_TODO", payload: value });
    router.push("/");
    methods.reset();
  };
  return (
    <Container>
      <StyledForm onSubmit={methods.handleSubmit(handleSubmit)}>
        <div>
          <TextField
            name="title"
            control={methods.control}
            rules={{
              required: {
                value: true,
                message: "مقدار این فیلد اجباریست",
              },
            }}
            label="عنوان"
          />
        </div>
        <div>
          <TextField
            name="description"
            control={methods.control}
            rules={{
              required: {
                value: true,
                message: "مقدار این فیلد اجباریست",
              },
            }}
            label="توضیحات"
            as="textarea"
          />
        </div>
        <Button type="submit">ایجاد تسک</Button>
      </StyledForm>
    </Container>
  );
}

export default Page;
