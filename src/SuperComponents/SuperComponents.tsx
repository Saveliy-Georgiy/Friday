import React from 'react';
import SuperButton from "../common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../common/c3-SuperCheckbox/SuperCheckbox";
import SuperInputText from "../common/c1-SuperInputText/SuperInputText";

export const SuperComponents = () => {
    return (
        <div>
            <SuperButton children={"OK"}/>
            <SuperButton children={"NO OK"} red/>
            <SuperCheckbox/>
            <SuperInputText placeholder={"text"}/>
        </div>
    );
};