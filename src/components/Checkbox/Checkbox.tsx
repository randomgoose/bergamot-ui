import React from "react";
import classNames from "classnames";
import { BsCheck } from "react-icons/bs";

interface Props {
    id: string
}



const Checkbox = ({ id }: Props) => {
    return (
        <span className={"Checkbox"}>
            <input type={"checkbox"} id={"checkbox"}></input>
            <span className={"Checkbox__checkmark"}><BsCheck /></span>
            <label htmlFor={"checkbox"}>Checkbox</label>
        </span>
    )
}

export default Checkbox;