"use client"


import styled from "styled-components";

interface IContainerProps {
    flex?: string,
    fd?: "row" | "row-reverse" | "column" | "column-reverse"
    jc?: "space-between" | "space-around" | "space-evenly" | "stretch" | "center" | "start" | "end" | "flex-start" | "flex-end"
    ai?: "center" | "start" | "end" | "self-start" | "self-end" | "flex-start" | "flex-end"
    w?: string | number
    image?: string
    bgColor?: string
}

export const Container = styled.div<IContainerProps>`
    display: flex;
    flex: ${({flex}) => (flex ? flex : 0)};
    flex-direction: ${({fd}) => (fd ? fd : "column")};
    justify-content: ${({jc}) => (jc ? jc : "flex-start")};
    align-items: ${({ai}) => (ai ? ai : "flex-start")};
    background-color: ${({bgColor}) => (bgColor ? bgColor : "none")};
    width: ${({w}) => (w ? w : "100%")};
    height: 100%;
    background-image: ${({image}) => (image ? `
url($ { image })
` : "none")};
    background-size: cover;
    background-position: center;
`;

export const Screen = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
`;

export const TextTitle = styled.p`
    color: var(--primary-text);
    font-size: 22px;
    font-weight: 500;
    line-height: 1.6;
`;

export const TextDescription = styled.p`
    color: var(--primary-text);
    font-size: 16px;
    line-height: 1.6;
`;