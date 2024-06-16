'use client'
import React from 'react';
import {FormProvider, useForm} from "react-hook-form";
import TextField from "@/components/TextField";

function Page() {
    const methods = useForm()
    return (
        <FormProvider {...methods}>
            <form>
                <TextField name="title"/>
            </form>
        </FormProvider>
    );
}

export default Page;