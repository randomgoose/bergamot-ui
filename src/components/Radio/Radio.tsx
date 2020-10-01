import React from "react";
import classNames from "classnames";
import { BsDot } from "react-icons/bs";
 
interface Props {
    id: string,
    type?: "default" | "toggle"
}

const Radio = ({ id, type }: Props) => {
    const classes = classNames({
        Radio: "Radio",
        [`${type}`]: type
    });

    const [checked, setChecked] = React.useState(false);

    const toggle = (e?: React.MouseEvent) => {
        setChecked(true);
    }

    return (
        <span className={classes}>
            <input type={"radio"} id={id} name={"radio"} checked={checked}></input>
            <span onClick={toggle} className={"Radio__checkmark"}><BsDot /></span>
            <label onClick={toggle} htmlFor={id}>Checkbox</label>
        </span>
    )
}

export default Radio;