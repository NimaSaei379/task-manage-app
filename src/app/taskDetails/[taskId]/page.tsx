"use client";
import { Container, FormActionContainer, StyledForm } from "@/lib/globalStyles";
import TextField from "@/components/TextField/TextField";
import Button from "@/components/Button/Button";
import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { EditTodo, useTodoContext } from "@/context/TodoContext";
import { useRouter } from "next/navigation";
interface EditFormShape {
  title: string;
  description: string;
}
function TaskDetailsPage({ params }: { params: { taskId: string } }) {
  const { dispatch, state } = useTodoContext();
  const router = useRouter();
  const editTargetValues = state.todos.find((todo) => todo.id == params.taskId);
  const methods = useForm<EditFormShape>({
    defaultValues: {
      title: editTargetValues?.title,
      description: editTargetValues?.description,
    },
  });
  const handleSubmit: SubmitHandler<EditFormShape> = (values) => {
    dispatch(EditTodo({ ...values, isDone: false, id: params.taskId }));
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
            <Button type="submit">ویرایش تسک</Button>
            <Button $color="pink" onClick={() => router.push("/")}>
              انصراف
            </Button>
          </FormActionContainer>
        </StyledForm>
      </FormProvider>
    </Container>
  );
}

export default TaskDetailsPage;
