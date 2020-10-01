import React, { CSSProperties } from "react";
import classNames from "classnames";
import { BsCheck, BsPause } from "react-icons/bs"
import { finished } from "stream";

interface Props {
    value: number;
    label?: boolean;
    style?: CSSProperties;
    type?: "bar" | "ring";
    status?: "processing" | "finished" | "paused";
}

const Progress = ({ value, label, style, type, status }: Props) => {

    const classes = classNames({
        Progress: "Progress",
        [`${type}`]: type,
        [`${status}`]: status
    })

    return (
        <div className={classes} style={style}>
            <span className={"Progress__outer"}>
                <span className={"Progress__inner"} style={{ width: value + "%" }}></span>
            </span>
            {label && !status ? <label className={"Progress__label"}>{value + "%"}</label> : null}
            {status === "finished" ? <span className={"Progress__icon"}><BsCheck /></span> : status === "paused" ? <span className={"Progress__icon"}><BsPause /></span> : null}
        </div>
    )
}

Progress.defaultProps = {
    type: "bar"
}

export default Progress;