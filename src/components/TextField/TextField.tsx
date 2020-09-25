import React, { CSSProperties } from "react";
import classNames from "classnames";

interface Props {
    processing?: boolean,
    style?: CSSProperties
}

const TextField = ({ processing, style }: Props) => {

    const classes = classNames({
        TextField: "TextField",
        processing: processing
    })


    return (
        <div className={classes} style={style}>
            <input placeholder={"Please type in..."}></input>
            <label></label>
        </div>

    )
}

export default TextField;