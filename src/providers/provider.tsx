"use client";
import React from "react";
import StyledComponentsRegistry from "@/lib/registry";
import TodoContextProvider from "@/context/TodoContext";
import { Screen } from "@/lib/globalStyles";

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <TodoContextProvider>
        <Screen>{children}</Screen>
      </TodoContextProvider>
    </StyledComponentsRegistry>
  );
}

export default Provider;
