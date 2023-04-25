import styled, {css} from "styled-components";
import React, { useState } from 'react';

const Input = (props,{leftIcon,rightIcon}) => {  
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <Label htmlFor={props.id} onChange={handleInputChange} className={inputValue ? 'has_value' : ''}>
                <TextField id={props.id} type="text" maxLength={props.max} /> 
                <SpanField color={props.color}>{props.label}</SpanField>
                <TextFieldLine/>
            </Label>
            <ConfigArea>
                <HelperMessage>
                    {props.message}
                </HelperMessage>
                <Counter className={props.checked1 ? 'active' : ''}>{inputValue.length}/{props.max}</Counter>
            </ConfigArea>
        </div>
    )
}

export default Input

export const TextFieldWrapper = styled.div `
    position: relative;
    padding: 40px;
    width: 1000px;
    height: 400px;
`
export const TextFieldLine = styled.div `
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0%;
    transform: translateX(-50%);
    height: 2px;
    background-color: #6200ee;
    transition: .2s width ease-in;
`

export const SpanField = styled.span `
    position: absolute;
    display: inline-block;
    top: 50%;
    left: 14px;
    ${(props)=> css`
        color:${props.color};
    `}
    transform: translateY(-50%);
    transition: .2s all ease-in;
    z-index: 1;
`

export const TextField = styled.input `
    position: absolute;
    top: 0%;
    left: 0;
    box-sizing: border-box;
    padding: 10px 16px 0;
    width : 100%;
    height: 100%;
    color: #000000;
    font-size: 16px;
    border: none;
    caret-color: #6200ee;
    border-bottom: 1px solid #000000;
    border-radius: 5px 5px 0 0;
    background-color: #f8f8f8;
    transition: .2s all ease-in;

    &:hover {
        background-color: #ececec;
    }

    &:focus, &:active {
        outline: none;
        background-color: #dbdbdb;

        & ~ ${TextFieldLine} {
            width: 100%;
        }

        & + ${SpanField} {
            color: #6200ee;
            top: 12px;
            font-size: 12px;
        }
    }
`
export const Label = styled.label `
    position: relative;
    display: inline-flex;
    width: 214px;
    height: 56px;
    &.has_value {
        ${SpanField} {
            top: 12px;
            font-size: 12px;
        }
    }
`
export const ConfigArea = styled.div `
    width: 214px;
    &::after {
        content: '';
        clear: both;
        display: block;
    }
`

export const HelperMessage = styled.p `
    margin: 0;
    padding-left: 14px;
    display: inline-block;
    color: #747474;
    font-size: 14px;
`

export const Counter = styled.em `
    display: none;
    float: right;
    margin: 0;
    padding-right: 20px;
    color: #747474;
    font-size: 14px;
    font-style: normal;

    &.active {
        display: block;
    }
`