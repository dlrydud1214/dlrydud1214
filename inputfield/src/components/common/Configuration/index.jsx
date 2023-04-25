import styled, {} from "styled-components";
// import React, { useState } from 'react';

const Config = (props) => {  
    return (
        <ConfigWrapper>
            <ConfigTit>Configuration</ConfigTit>
            <ConfigOpt>
                <label>
                    <input type="checkbox" checked={props.checked1} onChange={props.onCheckbox1Change} value="checkbox1" />
                    Character counter
                </label>
                <label>
                    <input type="checkbox" checked={props.checkbox2} onChange={props.onCheckbox2Change} value="checkbox2" />
                    Leading icon
                </label>
                <label>
                    <input type="checkbox" checked={props.checked3} onChange={props.onCheckbox3Change} value="checkbox3" />
                    Trailing icon
                </label>
            </ConfigOpt>
        </ConfigWrapper>
    )
}

export default Config

export const ConfigWrapper = styled.div`

`

export const ConfigTit = styled.h2`

`

export const ConfigOpt = styled.div`

`

