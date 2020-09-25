import React, { useState, MouseEvent, CSSProperties } from "react";
import classNames from "classnames";

export interface Props {
    style?: CSSProperties;
    disabled?: boolean;
    onToggle?: () => void;
}

const Switch = ({disabled, onToggle}: Props) => {
    const [checked, setChecked] = useState(false);


    const classes = classNames({
        Switch: "Switch",
        checked: checked,
        disabled: disabled
    });

    const toggle = (e: MouseEvent) => {
        setChecked(!checked)
        if (onToggle) {
            onToggle();
        }
    }

    return (
        <button className={classes} onClick={toggle}>
            <div className={`Switch__slider`}></div>
        </button>
    )
}

export default Switch;