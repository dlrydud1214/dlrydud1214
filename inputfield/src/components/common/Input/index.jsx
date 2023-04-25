import styled, {css} from "styled-components"

function Input ({color, leftIcon}){


    return (
        <TextFieldWrapper>
            {
            leftIcon
            }
        <Textfield color={color} />
    </TextFieldWrapper>
    )
}

export default Input

export const TextFieldWrapper = styled.div`
    width:400px;
`
export const Textfield = styled.input`
    width:100%;
    ${(props)=> css`
        background:${props.color};
    `}
`