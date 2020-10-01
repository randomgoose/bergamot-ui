import React, { CSSProperties } from "react";
import classNames from "classnames";

interface Props {
    value: number,
    label?: boolean,
    style?: CSSProperties,
    type?: "bar" | "ring",
}

const Progress = ({ value, label, style, type }: Props) => {
    // const [percentage, setPercentage] = React.useState(value);

    const classes = classNames({
        Progress: "Progress",
        [`${type}`]: type
    })

    return (
        <div className={classes} style={style}>
            <span className={"Progress__outer"}>
                <span className={"Progress__inner"} style={{ width: value + "%" }}></span>
            </span>
            {label ? <label className={"Progress__label"}>{value + "%"}</label> : null}
        </div>
    )
}

Progress.defaultProps = {
    type: "bar"
}

export default Progress;