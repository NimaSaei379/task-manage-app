'use client'
import {Container, TextTitle} from "@/lib/globalStyles";
import TaskListContainer from "@/components/TaskListContainer";
import styled from "styled-components";
import StyledLink from "@/components/StyledLink";

export default function Home() {
    const HeaderStyledContainer = styled(Container)`
      padding: 2.5rem 1rem;
      border-radius: 1rem;
      border: 1px solid var(--accent);
      margin: 2rem auto;
    `

    return (
        <Container w="50%" fd="column" as="main" jc="center">
            <HeaderStyledContainer flex="1" w="100%" fd="row" ai="center" jc="space-between">
                <StyledLink href='/AddTask'>افزودن</StyledLink>
                <TextTitle>لیست کار ها</TextTitle>
            </HeaderStyledContainer>
            <TaskListContainer/>
        </Container>
    );
}
