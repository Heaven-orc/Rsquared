import React from "react";
import styled from 'styled-components';

import { deviceMedia } from "common/media";
import { ICustomFormField } from "./types";


export const FormInput: React.FC<ICustomFormField<HTMLInputElement>> = ({ errors, ...arg }) => {

    return (
        <label>
            {errors && <Errors>
                <ErrorMessage>{errors}</ErrorMessage>
            </Errors>}
            <Input errors={Boolean(errors)} {...arg} />
        </label>
    )
}

interface IInput {
    errors: boolean
}

const Input = styled.input<IInput>`
    font-family: ${props => props.theme.PublicSansRegular};
    font-size: 16px;
    line-height: 28px;
    text-transform: capitalize;
    background: #FAFBFE;
    border: 1px solid ${props => props?.errors ? "#FF0000" : `${props.theme.black}`};
    :focus-visible {
        outline:  ${props => props?.errors ? "#FF0000" : `${props.theme.black}`} auto 1px;
    }
    border-radius: 2px;
    padding: 16px 38px;
    width: 100%;
   ${deviceMedia.media768}{
        padding: 16px 24px;
    }
`
const Errors = styled.div`
    position: absolute;
   
`;
const ErrorMessage = styled.strong`
    font-family: ${props => props.theme.PublicSansRegular};
    font-size: 14px;
    line-height: 20px;
    text-transform: capitalize;
    position: relative;
    border-radius: 2px;
    top: -12px;
    left: 24px;
    color: #FF0000;
    background: #F8F9FD;
    display: block;
    padding: 0 8px;
`;
