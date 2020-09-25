import React from "react";
import classNames from "classnames";

interface Props {

}

const TextField = ({ }: Props) => {

    const classes = classNames({
        TextField: "TextField"
    })


    return (
        <div className={classes}>
            <input placeholder={"Please type in..."}></input>
            <label></label>
        </div>

    )
}

export default TextField;