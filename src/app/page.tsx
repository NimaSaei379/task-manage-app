"use client";
import { Container, TextTitle } from "@/lib/globalStyles";
import TaskListContainer from "@/components/TaskListContainer/TaskListContainer";
import styled from "styled-components";
import StyledLink from "@/components/LInk/StyledLink";

const HeaderStyledContainer = styled(Container)`
  padding: 2.5rem 1rem;
  border-radius: 1rem;
  border: 1px solid var(--accent);
  margin: 2rem auto;
`;
export default function Home() {
  return (
    <Container $w="50%" $fd="column" as="main" $jc="center">
      <HeaderStyledContainer
        $flex="1"
        $w="100%"
        $fd="row-reverse"
        $ai="center"
        $jc="space-between"
      >
        <StyledLink href="/AddTask">افزودن</StyledLink>
        <TextTitle>لیست کار ها</TextTitle>
      </HeaderStyledContainer>
      <TaskListContainer />
    </Container>
  );
}
