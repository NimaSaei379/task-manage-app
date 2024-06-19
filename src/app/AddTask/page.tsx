"use client";
import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import TextField from "@/components/TextField/TextField";
import { Container, FormActionContainer, StyledForm } from "@/lib/globalStyles";
import styled from "styled-components";
import Button from "@/components/Button/Button";
import { addNewTodo, useTodoContext } from "@/context/TodoContext";
import { useRouter } from "next/navigation";

interface AddNewFormShape {
  title: string;
  description: string;
}

function Page() {
  const methods = useForm<AddNewFormShape>();
  const { dispatch, state } = useTodoContext();
  const router = useRouter();
  const handleSubmit: SubmitHandler<AddNewFormShape> = (values) => {
    dispatch(
      addNewTodo({ ...values, isDone: false, id: String(state.todos.length) }),
    );
    router.push("/");
    methods.reset();
  };
  return (
    <Container>
      <FormProvider {...methods}>
        <StyledForm onSubmit={methods.handleSubmit(handleSubmit)}>
          <div>
            <TextField
              name="title"
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
          <FormActionContainer>
            <Button type="submit">ایجاد تسک</Button>
          </FormActionContainer>
        </StyledForm>
      </FormProvider>
    </Container>
  );
}

export default Page;
