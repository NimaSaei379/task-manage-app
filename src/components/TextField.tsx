import React, {InputHTMLAttributes} from 'react';
import {Controller} from "react-hook-form";
import styled from "styled-components";

interface ItextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string,
    rules?: any
    onInputVaueChange?: React.ChangeEventHandler<HTMLInputElement>
}

const StyledInput = styled.input`

`

function TextField({name, rules, onInputVaueChange}: ItextFieldProps) {
    return (
        <Controller
            rules={rules}
            name={name}
            render={({field, fieldState, formState,}) =>
                <StyledInput
                    name={field.name}
                    onChange={(e) => {
                        field.onChange(e.target.value)
                        if (onInputVaueChange) {
                            onInputVaueChange(e)
                        }
                    }}
                    ref={field.ref}
                />
            }
        />
    );
}

export default TextField;